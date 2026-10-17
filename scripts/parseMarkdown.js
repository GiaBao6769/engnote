import { marked } from "../node_modules/marked/lib/marked.esm.js";


const title = document.getElementById("TITLE");
const uploadDate = document.getElementById("UPLOAD-DATE");
const updateDate = document.getElementById("UPDATE-DATE");
const contentSection = document.getElementById("CONTENT");
const authors = document.getElementById("AUTHORS");


// rename to a better name
async function processMd(mdPath){
    const res = await fetch(`./../articles/${mdPath}`);
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

async function loadArticle(mdPath){

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

    const html = await marked.parse(content);
    contentSection.innerHTML = html;
}

const params = new URLSearchParams(window.location.search);
const path = params.get("p");
loadArticle(path).catch(console.error);



