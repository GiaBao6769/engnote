import { getJson, getComponent, isExistingPath } from "./main.js"

const main = document.querySelector("main");

const articlesJson = await getJson("./articles.json");

const defaultThumbnailPath = "./images/no_thumbnail2.jpg";

// console.log(articlesJson);

// This is a copy of the same function in parseMarkdown, rename to a better name, make the code not terminate if anything fails
async function getMetadata(mdPath){
    const res = await fetch(`./articles/${mdPath}`);
    if (!res.ok){
        throw new Error(
            `Failed to load article: ${res.status}`         
        );
    }
    const md = await res.text();

    const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

    if (!match) {
        throw new Error(`Metadata not found ${mdPath}`);
    }

    const metadataText = match[1];

    const metadata = {};

    for (const line of metadataText.split(/\r?\n/)) {
        const colon = line.indexOf(":");
        if (colon === -1) continue;

        const key = line.slice(0, colon).trim();
        const value = line.slice(colon + 1).trim();

        metadata[key] = value.replace(/^["']|["']$/g, "").replace(/\\n/g, "\n");
    }

    return metadata;
}

async function createCard(path){

    const card = await getComponent("#ARTICLE-CARD-TEMP");

    const metadata = await getMetadata(path).catch(err => {
        throw new Error(`Cannot get metadata of ${path}`);
    });

    const a = card.querySelector("a");
    a.href = `article.html?p=${path}`;

    const cardTitle = card.querySelector(".card-title");
    const cardDesc = card.querySelector(".card-desc");
    const cardThumbnail = card.querySelector(".article-thumbnail");

    cardTitle.textContent = metadata["title"];
    cardDesc.textContent = metadata["description"];
    
    cardThumbnail.onerror = () => {
        cardThumbnail.onerror = null;
        cardThumbnail.src = defaultThumbnailPath;
    };

    cardThumbnail.src = metadata["thumbnail"] || defaultThumbnailPath;
 
    return card;
}


async function addGroup(group){
    const div = document.createElement("div");
    div.classList.add("center-section");

    const h1 = document.createElement("h1");
    h1.textContent = group["name"];
    h1.classList.add("formal");


    div.appendChild(h1);

    
    for (let path of group["article-paths"]){
        try{
            const card = await createCard(path);
            div.appendChild(card);
        }
        catch (err){
            console.error(err);
        }

    }

    main.appendChild(div);
}

for (const group of articlesJson){
    await addGroup(group);
}