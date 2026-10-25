export async function isExistingPath(path) {
    try {
        const res = await fetch(path, { method: "HEAD" });
        return res.ok;
    } 
    catch {
        return false;
    }
}

let templateRoot = null;

async function preloadTemplates(){
    if (templateRoot) return templateRoot;

    const res = await fetch("templates.html");
    const html = await res.text();

    const div = document.createElement("div");
    div.innerHTML = html;
    templateRoot = div;
    return templateRoot;
}


export async function getJson(path){
    // path must include file name extention
    const res = await fetch(path);

    if (!res.ok) {
        throw new Error(`Failed to fetch ${path}: ${res.status}`);
    }
    
    const data = await res.json();

    return data;
}


export async function getComponent(componentId){
    const root = await preloadTemplates();
    const template = root.querySelector(`${componentId}`);

    if (!template){
        console.erorr(`Template ${componentId} not found`);
        return;
    }
    return template.content.cloneNode(true);
}


async function addComponent(targetId, componentId){
    try{
        const component = await getComponent(componentId);
        const target = document.querySelector(targetId);
        
        target.replaceWith(component);
    }
    catch (error){
        console.error(`Failed to add component template ${componentId} to ${targetId}`)
    }
}


await addComponent("#NAVBAR", "#NAVBAR-TEMP");
// await addComponent("#FOOTER", "#FOOTER-TEMP");

// Change mode


const sunIcon = document.getElementById("SUN-ICON");
const moonIcon = document.getElementById("MOON-ICON");

function setMode(mode){
    document.body.classList.replace(
        mode == "lightmode" ? "darkmode" : "lightmode",
        mode
    );

    if (mode == "lightmode"){
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
    }
    else{
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }

    // modeToggleButton.textContent = (mode == "lightmode" ? "Light" : "Dark");
    localStorage.setItem("mode", mode);
}

try{
    const currentMode = localStorage.getItem("mode");

    if (currentMode === "darkmode"){
        setMode(currentMode);
    }
} 
catch (e) {
    console.log(e);
}

const modeToggleButton = document.getElementById("MODE-TOGGLE-BUTTON");
modeToggleButton.addEventListener("click", toggleMode);

function toggleMode(){
    if (document.body.classList.contains("lightmode")){
        setMode("darkmode");
    } 
    else{
        setMode("lightmode");
    }
    console.log("Mode changed")
}