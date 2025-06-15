document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "241. Organitele citoplasmatice specializate în realizarea fotosintezei sunt:",
            choices: [
                "mitocondriile",
                "cloroplastele",
                "stomatele"
            ],
            correctAnswers: ["cloroplastele"]
        },
        {
            question: "242. Prin procesul de fotosinteză plantele:",
            choices: [
                "au capacitatea de a sintetiza substanţe organice proprii din substanţe anorganice",
                "au capacitatea de a sintetiza substanţe anorganice din substanţe organice",
                "utilizează în nutriţie substanţele organice din organismele vii"
            ],
            correctAnswers: ["au capacitatea de a sintetiza substanţe organice proprii din substanţe anorganice"]
        },
        {
            question: "243. Organisme saprofite sunt:",
            choices: [
                "Penicillium glaucum",
                "Pinguicula vulgaris",
                "Mycoderma aceti"
            ],
            correctAnswers: ["Penicillium glaucum", "Mycoderma aceti"]
        },
        {
            question: "244. Reacţiile caracteristice fazei de lumină a fotosintezei se desfăşoară în:",
            choices: [
                "grana cloroplastelor",
                "stroma cloroplastelor",
                "membrana cloroplastelor"
            ],
            correctAnswers: ["grana cloroplastelor"]
        },
        {
            question: "245. Reacţiile caracteristice fazei de întuneric a fotosintezei se desfăşoară în:",
            choices: [
                "cristele mitocondriale",
                "stroma cloroplastelor",
                "ribozomi"
            ],
            correctAnswers: ["stroma cloroplastelor"]
        },
        {
            question: "246. În faza de lumină a fotosintezei are loc:",
            choices: [
                "transformarea energiei luminii solare în energie chimică",
                "fixarea CO2 pe o substanţă acceptoare",
                "sinteza substanţelor organice primare"
            ],
            correctAnswers: ["transformarea energiei luminii solare în energie chimică"]
        },
        {
            question: "247. Identificaţi răspunsurile corecte referitoare la fotosinteză:",
            choices: [
                "are loc în toate organele verzi ale plantelor",
                "organul specializat în fotosinteză este frunza",
                "constă în degradarea substanţelor organice"
            ],
            correctAnswers: ["are loc în toate organele verzi ale plantelor", "organul specializat în fotosinteză este frunza"]
        },
        {
            question: "248. Faza de întuneric a fotosintezei constă în:",
            choices: [
                "fixarea dioxidului de carbon pe o substanţă acceptoare",
                "sinteza substanţelor organice",
                "transformarea energiei luminoase în energie chimică"
            ],
            correctAnswers: ["fixarea dioxidului de carbon pe o substanţă acceptoare", "sinteza substanţelor organice"]
        },
        {
            question: "249. Fotosinteza este principalul proces prin care:",
            choices: [
                "se produce oxigen în natură",
                "se formează din apă şi săruri minerale în prezenţa luminii substanţe anorganice",
                "se menţine constantă compoziţia atmosferei"
            ],
            correctAnswers: ["se produce oxigen în natură", "se menţine constantă compoziţia atmosferei"]
        },
        {
            question: "250. Factorii interni care influenţează fotosinteza sunt reprezentaţi de:",
            choices: [
                "intensitatea luminii",
                "cantitatea de pigmenţi asimilatori",
                "structura frunzei"
            ],
            correctAnswers: ["cantitatea de pigmenţi asimilatori", "structura frunzei"]
        },
        {
            question: "251. La plantele heliofile fotosinteza începe la o intensitate de:",
            choices: [
                "8000 - 10000 lucşi",
                "80 - 100 lucşi",
                "8 - 10 lucşi"
            ],
            correctAnswers: ["80 - 100 lucşi"]
        },
        {
            question: "252. În urma procesului de fotosinteză se formează:",
            choices: [
                "substanţe organice",
                "substanţe anorganice",
                "apă şi săruri minerale"
            ],
            correctAnswers: ["substanţe organice"]
        },
        {
            question: "253. Organismele chemosintetizante sunt reprezentate de:",
            choices: [
                "bacterii sulfuroase",
                "bacterii nitrificatoare",
                "ciuperci patogene"
            ],
            correctAnswers: ["bacterii sulfuroase", "bacterii nitrificatoare"]
        },
        {
            question: "254. Xantofilele sunt:",
            choices: [
                "derivaţi ai carotenului care posedă grupări OH",
                "compuşi porfirinici de culoare galbenă",
                "pigmenţi ficobilinici galbeni"
            ],
            correctAnswers: ["derivaţi ai carotenului care posedă grupări OH"]
        },
        {
            question: "255. În centrul moleculei de clorofilă se află:",
            choices: [
                "un atom de Fe",
                "un atom de Mg",
                "un atom de Mn"
            ],
            correctAnswers: ["un atom de Mg"]
        },
        {
            question: "256. ß - carotenul este principalul caroten al:",
            choices: [
                "plantelor",
                "algelor roşii",
                "algelor brune"
            ],
            correctAnswers: ["plantelor"]
        },
        {
            question: "257. La plantele de tip C3 acceptorul primar al CO2 este:",
            choices: [
                "acidul fosfoenolpiruvic",
                "acidul fosfogliceric",
                "ribulozo-1,5-difosfatul"
            ],
            correctAnswers: ["ribulozo-1,5-difosfatul"]
        },
        {
            question: "258. Teaca fasciculară asimilatoare se întâlneşte la:",
            choices: [
                "plantele de tip C3",
                "plantele de tip C4",
                "plantele de tip CAM"
            ],
            correctAnswers: ["plantele de tip C4"]
        },
        {
            question: "259. Reacţiile caracteristice fotorespiraţiei se desfăşoară în:",
            choices: [
                "cloroplaste, peroxizomi, mitocondrii",
                "dictiozomi",
                "citoplasmă"
            ],
            correctAnswers: ["cloroplaste, peroxizomi, mitocondrii"]
        },
        {
            question: "260. Punctul de compensaţie a luminii este:",
            choices: [
                "intensitatea luminii la care fotosinteza este maximă",
                "intensitatea luminii la care fotosinteza este egală cu respiraţia",
                "lungimea de undă a luminii la care fotosinteza este maximă"
            ],
            correctAnswers: ["intensitatea luminii la care fotosinteza este egală cu respiraţia"]
        },
        {
            question: "261. Fotoliza apei are loc în:",
            choices: [
                "faza de întuneric a fotosintezei",
                "peroxizomi",
                "faza de lumină a fotosintezei"
            ],
            correctAnswers: ["faza de lumină a fotosintezei"]
        },
        {
            question: "262. Energia degajată în respiraţie este utilizată pentru:",
            choices: [
                "schimburi active cu mediul",
                "absorbţia sărurilor minerale",
                "pătrunderea CO2 în plantă"
            ],
            correctAnswers: ["schimburi active cu mediul", "absorbţia sărurilor minerale"]
        },
        {
            question: "263. Factorii interni care influenţează respiraţia sunt reprezentaţi de:",
            choices: [
                "vârsta plantelor",
                "concentraţia de CO2 din aer",
                "temperatura mediului"
            ],
            correctAnswers: ["vârsta plantelor"]
        },
        {
            question: "264. Factorii externi care influenţează respiraţia sunt reprezentaţi de:",
            choices: [
                "temperatura mediului",
                "concentraţia de O2 din aer",
                "organul şi ţesutul vegetal"
            ],
            correctAnswers: ["temperatura mediului", "concentraţia de O2 din aer"]
        },
        {
            question: "265. În urma procesului de glicoliză se formează:",
            choices: [
                "două molecule de acid piruvic",
                "apă, CO2 şi energie",
                "două molecule de acid malic"
            ],
            correctAnswers: ["două molecule de acid piruvic"]
        }
    ];

    initQuiz(quizData);
});