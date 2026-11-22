import { marked } from "../node_modules/marked/lib/marked.esm.js";
import { getJson, getComponent, params} from "./main.js"

const title = document.getElementById("TITLE");
const uploadDate = document.getElementById("UPLOAD-DATE");
const updateDate = document.getElementById("UPDATE-DATE");
const contentSection = document.getElementById("CONTENT");
const authors = document.getElementById("AUTHORS");
const desc = document.getElementById("DESC");
const loadingSection = document.getElementById("LOADING-SECTION");

// JSON
const indirectPathJson = await getJson("./indirect_path.json");
//


const quizParse = "q1"
// q1-{quizBlockId}-{questionId}

// get the URL path of the md file
let mdPath = "articles/";

if (params.get("p")){
    mdPath += params.get("p");
}
else{
    const indirectPath = params.get("ip");

    mdPath += indirectPathJson[indirectPath];
}

// intialize renderer for md
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

renderer.image = function ({href, title, text}) {
    const imagePath = `${mdPath}/../${href}`
    return `<img src="${imagePath}" alt="${text}" ${
        title ? `title="${title}"` : ""
    }>`;
};

// Parse the md to the page
await renderArticle(mdPath)
    .then(() => {
        loadingSection.classList.add("hidden");
    })
    .catch(error => {
        console.error(error);
        loadingSection.textContent = "Không thể truy xuất bài viết.";
    });



// rename to a better name
async function processMd(mdPath){
    const res = await fetch(mdPath);
    if (!res.ok){
        throw new Error(
            `Failed to load article: ${res.status}`         
        );
    }
    const md = await res.text();

    const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

    if (!match) {
        console.error("Metadata not found");
        return [{}, md];
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

    // console.log(metadata);

    return [metadata, content];
}


async function renderArticle(mdPath){

    const [metadata, content] = await processMd(mdPath);

    // console.log(metadata);
    document.title = metadata["title"] ?? "N/A";
    title.innerText = metadata["title"] ?? "N/A";
    uploadDate.innerText = metadata["upload-date"] ?? "N/A";
    updateDate.innerText = metadata["update-date"] ?? "N/A";

    // if (metadata["description"]){
    //     desc.innerText = metadata["description"];
    //     desc.classList.remove("hidden");
    // }


    const authorsText = metadata["authors"] ?? "N/A";

    for (const author of authorsText.split(",")){
        const li = document.createElement("li");
        li.innerHTML = marked.parseInline(author.trim());
        authors.appendChild(li);
    }

    const html = await marked.parse(content, {renderer });
    contentSection.innerHTML = html;
}

function saveMultipleChoices() {

}

function loadSavedMultipleChoices(quiz){
    return false;
    const quizId = quiz.dataset.quizId;
    
    const userAnswers = "CBB";

    const questions = quiz.querySelectorAll("fieldset");

    questions.forEach((question, questionId) => {
        const options = question.querySelectorAll('input[type="radio"]');
        options.forEach((option, optionId) => {
            if (option.value == userAnswers[questionId]){
                option.checked = true;
            }
        });
    });

    return true;
}

function submitMultipleChoices(quiz) {
    const correctAnswers = quiz.dataset.correctAnswers;

    const questions = quiz.querySelectorAll("fieldset");

    let correctAnsCnt = 0;

    questions.forEach((question, questionId) => {
        question.disabled = true;

        const options = question.querySelectorAll('input[type="radio"]');

        options.forEach((input) => {
            const label = input.closest("label");

            if (input.value == correctAnswers[questionId]) {
                label.classList.add("correctOption");
                if (input.checked){
                    correctAnsCnt += 1;
                }
            } 
            else if (input.checked){
                label.classList.add("incorrectOption");
            }
        });

    });
}

function resetMultipleChoices(quiz){
    quiz.querySelectorAll("fieldset")
        .forEach((fieldset) => {
            fieldset.disabled = false;
        });


    quiz.querySelectorAll(".correctOption, .incorrectOption")
        .forEach(label => {
            label.classList.remove("correctOption", "incorrectOption");
            const input = label.querySelector("input");
            input.checked = false;
        });
}

function renderMultipleChoices() {
    const quizzes = contentSection.querySelectorAll("quiz");

    if (quizzes === null) return;

    // get each quizBlock to convert to radio buttons
    quizzes.forEach((quiz, quizId) => {
        // get the answers from details tags in md
        const details = quiz.querySelector("details");
        const correctAnswers = details.querySelector("p").innerHTML.replace(/[^A-D]/g, "");

        details.classList.add("hidden");

        quiz.dataset.correctAnswers = correctAnswers;
        quiz.dataset.quizId = `${quizId}`;

        const questions = quiz.querySelectorAll("ol > li");

        questions.forEach((question, questionId) => {

            const questionText = question.querySelector("p").textContent.trim();

            const options = question.querySelectorAll("ul > li");
            const fieldset = document.createElement("fieldset");
    
            fieldset.dataset.quizId = `${quizParse}-${questionId}`;

            const p = document.createElement("p");
            p.innerText = `${questionId+1}. ${questionText}`;

            fieldset.append(p);

            options.forEach((option) => {
                const text = option.textContent.trim();
                const match = text.match(/^([A-D])\.\s*(.*)$/);
                if (!match) return;

                // This can be detached to a distinct function
                const [, letter, optionText] = match;

                const input = document.createElement("input");
                input.type = "radio";
                input.name = `${quizParse}-${quizId}-${questionId}`;
                input.value = letter;
                // 
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

            question.replaceWith(fieldset);

        });

        const submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Nộp bài";

        const resetButton = document.createElement("button");
        resetButton.type = "button"; 
        resetButton.textContent = "Làm lại";

        submitButton.classList.add("formButton");
        resetButton.classList.add("formButton");
        
        submitButton .addEventListener("click", () => {
            submitMultipleChoices(quiz);
        });
        
        resetButton.addEventListener("click", () => {
            resetMultipleChoices(quiz);
        });

        if (loadSavedMultipleChoices(quiz)){
            submitMultipleChoices(quiz);
        }

        quiz.append(submitButton, resetButton);
    });
}


function saveFillAnswer(quizBlockId, userAnswers){

    let string = "";
    
    userAnswers.forEach(answer => {
        string += answer + ";";
    });

    localStorage.setItem(`fill-quiz${quizBlockId}`);
}

function loadFillQuizzes(questions, quizBlockId){
    const string = localStorage.getItem(`fill-quiz${quizBlockId}`);

    const userAnswers = "";

    questions.forEach((question, questionId) => {

        const input = question.querySelector(".input-box");

        const answer = input.value;
        // add refine

        if (answer == answers[questionId]){
            question.classList.add("correctOption");
        }
        else if (answer === ""){
            question.classList.add("incorrectOption");
        }
        else{
            question.classList.add("incorrectOption");
            input.value = answers[questionId];
        }

        input.disabled = true;

        // input.classList.add("chosen");
    });
}   

function resetFillQuizzes(questions){
    questions.forEach((question) =>{

        const input = question.querySelector(".input-box");
        input.value = "";

        question.classList.remove("correctOption");
        question.classList.remove("incorrectOption");
        question.classList.remove("correctOption");

        input.disabled = false;

    });
}

function submitFillQuizzes(questions, answers){

    questions.forEach((question, questionId) => {

        const input = question.querySelector(".input-box");

        const answer = input.value;
        // add refine

        if (answer == answers[questionId]){
            question.classList.add("correctOption");
        }
        else if (answer === ""){
            input.value = answers[questionId];
            question.classList.add("incorrectOption");
        }
        else{
            question.classList.add("incorrectOption");
            input.value += ` (${answers[questionId]})`;
        }

        input.disabled = true;

        // input.classList.add("chosen");
    });
}

let GLOBAL_QUIZ_ID = 0;

function renderFillQuizzes(){
    const quizBlocks = document.querySelectorAll("fill-quiz");

    quizBlocks.forEach((quizBlock, quizId) => {

        // quizBlocks.dataset["QUIZ_ID"] = GLOBAL_QUIZ_ID;
        // GLOBAL_QUIZ_ID += 1;

        const questionBox = quizBlock.querySelector(".question-box");
        const questions = questionBox.querySelectorAll("ol > li");

        const details = quizBlock.querySelector("details");

        details.classList.add("hidden");

        const ps = details.querySelector("ol").querySelectorAll("p");

        const answers = []

        ps.forEach(p => {
            answers.push(p.innerHTML);
        });
        
        questions.forEach((question, questionId) => {

            // console.log(question);

            const input = document.createElement("input");
            input.type = "text";
            input.name = `quiz-${quizId}-question${questionId}`;
            input.classList.add("input-box");

            const span = question.querySelector("span");

            span.replaceChildren(input);

        });
        
        const submitButton = document.createElement("button");
        const resetButton = document.createElement("button");

        submitButton.classList.add("formButton");
        submitButton.innerText = "Nộp bài"

        resetButton.classList.add("formButton");
        resetButton.innerText = "Làm bài"
        
        submitButton.addEventListener("click", () => {
            console.log("submitted fill quizzes");
            submitFillQuizzes(questions, answers);
        });

        resetButton.addEventListener("click", () => {
            console.log("reset");
            resetFillQuizzes(questions);
        });

        quizBlock.appendChild(submitButton);
        quizBlock.appendChild(resetButton);


    });
}



// function renderTFQuizzes(){
//     const quizBlocks = document.querySelectorAll("tf-quiz");

//     // console.log()

//     quizBlocks.forEach(quizBlock => {
//         const ol = quizBlock.querySelector("ol");
//         const li = ol.querySelectorAll("li");


//     });
// }





renderMultipleChoices();
renderFillQuizzes();
// renderTFQuizzes();


