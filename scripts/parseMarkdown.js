import { marked } from "../node_modules/marked/lib/marked.esm.js";


const title = document.getElementById("TITLE");
const uploadDate = document.getElementById("UPLOAD-DATE");
const updateDate = document.getElementById("UPDATE-DATE");
const contentSection = document.getElementById("CONTENT");
const authors = document.getElementById("AUTHORS");


// rename to a better name
async function processMd(mdPath){
    const res = await fetch(`./articles/${mdPath}`);
    if (!res.ok){
        throw new Error(
            `Failed to load article: ${res.status}`         
        );
    }
    const md = await res.text();

    const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

    if (!match) {
        throw new Error("Metadata not found");
    }

    const metadataText = match[1];
    const content = md.slice(match[0].length);

    const metadata = {};

    for (const line of metadataText.split(/\r?\n/)) {
        const colon = line.indexOf(":");
        if (colon === -1) continue;

        const key = line.slice(0, colon).trim();
        const value = line.slice(colon + 1).trim();

        metadata[key] = value.replace(/^["']|["']$/g, "").replace(/\\n/g, "\n");
    }

    return [metadata, content];
}

const renderer = new marked.Renderer();
renderer.listitem = function (token) {
    let content = "";
    let inlineTokens = [];

    const flushInline = () => {
        if (inlineTokens.length) {
            content += `<p>${this.parser.parseInline(inlineTokens)}</p>\n`;
            inlineTokens = [];
        }
    };

    for (const child of token.tokens) {
        if (child.type === "text") {
            inlineTokens.push(child);
        } else {
            flushInline();
            content += this.parser.parse([child]);
        }
    }

    flushInline();

    return `<li>${content}</li>\n`;
};

async function renderArticle(mdPath){

    const [metadata, content] = await processMd(mdPath);

    // console.log(metadata);
    document.title = metadata["title"];
    title.innerText = metadata["title"];
    uploadDate.innerText = metadata["upload-date"];
    updateDate.innerText = metadata["update-date"];

    const authorsText = metadata["authors"];

    for (const author of authorsText.split(",")){
        const li = document.createElement("li");
        li.textContent = author.trim();
        authors.appendChild(li);
    }

    const html = await marked.parse(content, {renderer });
    contentSection.innerHTML = html;
}

function renderMultipleChoices() {
    const quizBlocks = contentSection.querySelectorAll("quiz");

    quizBlocks.forEach((quiz, quizId) => {
        const form = document.createElement("form");
        form.classList.add("quiz-form");

        const answers = quiz.dataset.answers;
        const questions = quiz.querySelectorAll("ol > li");

        questions.forEach((question, questionId) => {
            const fieldset = document.createElement("fieldset");
            fieldset.dataset.correct = answers[questionId];

            // Extract the question text without its options list.
            const questionCopy = question.cloneNode(true);
            questionCopy.querySelectorAll("ul, ol").forEach(list => list.remove());
            const questionText = questionCopy.textContent.trim();

            const legend = document.createElement("legend");
            legend.textContent = `${questionId + 1}. ${questionText}`;
            fieldset.append(legend);

            const options = question.querySelectorAll(":scope > ul > li");

            options.forEach(option => {
                const text = option.textContent.trim();
                const match = text.match(/^([A-D])\.\s*(.*)$/);
                if (!match) return;

                const [, letter, optionText] = match;

                const input = document.createElement("input");
                input.type = "radio";
                input.name = `quiz-${quizId}-q${questionId}`;
                input.value = letter;
                input.required = true;

                const label = document.createElement("label");
                label.classList.add("quiz-option");

                const optionLetter = document.createElement("p");
                optionLetter.textContent = letter;
                optionLetter.classList.add("optionLetter");

                const optionContent = document.createElement("span");
                optionContent.innerHTML = marked.parseInline(optionText);

                label.append(input, optionLetter, optionContent);
                fieldset.append(label);
            });

            form.append(fieldset);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";

        const resetButton = document.createElement("button");
        resetButton.textContent = "reset";
        resetButton.addEventListener("click", () => {
            form.reset();

            form.querySelectorAll(".correctOption, .incorrectOption")
                .forEach(label => {
                    label.classList.remove("correctOption", "incorrectOption");
                });
        });

        
        submitButton.classList.add("formButton");
        resetButton.classList.add("formButton");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const questions = form.querySelectorAll("fieldset[data-correct]");

            questions.forEach((question) => {
                const correctAnswer = question.dataset.correct;

                const options = question.querySelectorAll('input[type="radio"]');

                options.forEach((input) => {
                    const label = input.closest("label");
                    if (input.value === correctAnswer) {
                        label.classList.add("correctOption");
                    } 
                    else if (input.checked) {
                        label.classList.add("incorrectOption");
                    }
                });
            });



            form.reset();

        });

        form.append(submitButton, resetButton);

        quiz.replaceChildren(form);
    });
}

const params = new URLSearchParams(window.location.search);
const path = params.get("p");
await renderArticle(path).catch(console.error);
// renderMultipleChoices();



