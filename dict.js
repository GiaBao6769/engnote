word = {
    "word": "Pragmatic",
    "label": "formal",
    
    "pronunciation": {
        "US":"præɡˈmæt̬.ɪk",
        "UK":"præɡˈmæt.ɪk"
    },
    

    "defs": {
        
        "adj":  [
                {
                    "level": "C2",
                    "content": "Solving problems in a sensible way that suits the conditions that really exist now, rather than obeying fixed theories, ideas, or rules",
                    "examples": ["In business, the pragmatic approach to problems is often more successful than an idealistic one.", "At its core the Marshall Plan was a pragmatic approach to a tough problem."],
                },

                {
                    "level": "C2",
                    "content": "Based on practical judgements rather than principles",
                    "examples": ["He made a pragmatic decision to settle the lawsuit because in the end it would cost more to try it in court."],
                }
        ]
    }
};


word2 = 
{
    "word": "Privilege",

    
    "pronunciation": {
        "US":"NA",
        "UK":"NA"
    },
    

    "defs": {

        "v": {
            "T": [
                {
                "content": "to give an advantage to one person or group of people and not to other",
                "examples": [],
                }
            ]
        },

        "n": {
            "C-U": [
                {
                "content": "an advantage that only one person or group of people has, usually because of their position or because they are rich",
                "examples": [],
                }
            ]
        }

    }

};


const DEF_DIV_TEMP = 
`
<div class="def-div">

    <h1 class="word"></h1>
    <p class="label"></p>

    <ul class="pronunc-list">
        <li class="UK"></li>
        <li class="US"></li>
    </ul>

    <h3 class="word_class"></h3>

    <div class="meaning-div"></div>

</div>
`;

const MEAN_TEMP = 
`
    <div class="meaning">
        <p class="level"></p>
        <p class="content"></p>
        <ul class="example-list"></ul>
        
        <div class="note-div"></div>
    </div>

`

async function appendDef(Word, wordClass, classType){
    let def = undefined;
    if (classType===undefined){
        def = Word["defs"][wordClass];
    }
    else{
        def = Word["defs"][wordClass][classType];
    }

    if (def===undefined){
        console.log("!!!");
        return;
    }

    let newDef = document.createElement("div");
    newDef.innerHTML = DEF_DIV_TEMP;
    innerDef = newDef.firstElementChild;

    innerDef.querySelector(".word").textContent = Word["word"];
    innerDef.querySelector(".label").textContent = Word["label"];
    
    const pronunciationList = innerDef.querySelector(".pronunc-list");
    pronunciationList.querySelector(".US").textContent = `US: ${Word["pronunciation"]["US"]}`;
    pronunciationList.querySelector(".UK").textContent = `UK: ${Word["pronunciation"]["UK"]}`;

    const meanDiv = innerDef.querySelector(".meaning-div");

    for (const mean of def){
        let newMean = document.createElement("div");
        newMean.innerHTML = MEAN_TEMP;
        innerMean = newMean.firstElementChild;

        innerMean.querySelector(".level").classList.add(mean["level"]);
        
        innerMean.querySelector(".content").textContent = mean["content"];

        const ul = innerMean.querySelector(".example-list");
        for (example of mean["examples"]){

            const li = document.createElement("li");
            li.textContent = example;
            ul.appendChild(li);
        }
        meanDiv.appendChild(newMean);
    }

    document.body.appendChild(newDef);
};


async function process(Word){
    appendDef(Word, "adj", null);
    appendDef(Word, "v", "T");
    appendDef(Word, "n", "C-U");
}


process(word);
// process(word2);




