document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "266. În cazul unui substrat respirator reprezentat de acizii organici Qr este:",
            choices: [
                "subunitar",
                "supraunitar",
                "egal cu 1"
            ],
            correctAnswers: ["supraunitar"]
        },
        {
            question: "267. Ciclul Krebs este:",
            choices: [
                "faza specifică respiraţiei aerobe",
                "faza anaerobă a respiraţiei",
                "comun respiraţiei aerobe şi anaerobe"
            ],
            correctAnswers: ["faza specifică respiraţiei aerobe"]
        },
        {
            question: "268. Cea mai mare cantitate de energie rezultă în urma:",
            choices: [
                "glicolizei",
                "(3 - oxidării",
                "ciclului Krebs"
            ],
            correctAnswers: ["ciclului Krebs"]
        },
        {
            question: "269. Substratul respirator este reprezentat predominant de:",
            choices: [
                "hidraţi de carbon",
                "proteine",
                "acizi organici"
            ],
            correctAnswers: ["hidraţi de carbon"]
        },
        {
            question: "270. Prin hidroliza amidonului rezultă:",
            choices: [
                "aminoacizi",
                "acetil-CoA",
                "glucoză"
            ],
            correctAnswers: ["glucoză"]
        },
        {
            question: "271. ß - oxidarea este caracteristică degradării:",
            choices: [
                "proteinelor",
                "acizilor graşi",
                "glicerolului"
            ],
            correctAnswers: ["acizilor graşi"]
        },
        {
            question: "272. Ţesuturile vegetale tinere respiră:",
            choices: [
                "mai slab decât cele mature",
                "mai intens decât cele mature",
                "cu aceeaşi intensitate ca şi ţesuturile mature"
            ],
            correctAnswers: ["mai intens decât cele mature"]
        },
        {
            question: "273. Respiraţia este mai intensă la:",
            choices: [
                "flori",
                "frunze",
                "rădăcini"
            ],
            correctAnswers: ["flori"]
        },
        {
            question: "274. Seminţele oleaginoase au respiraţia:",
            choices: [
                "mai intensă decât cele amidonoase",
                "mai redusă decât cele amidonoase",
                "reducă datorită conţinutului scăzut de apă"
            ],
            correctAnswers: ["mai redusă decât cele amidonoase", "reducă datorită conţinutului scăzut de apă"]
        },
        {
            question: "275. Ciclul Krebs se desfăşoară în:",
            choices: [
                "cloroplaste",
                "mitocondrii",
                "citoplasmă"
            ],
            correctAnswers: ["mitocondrii"]
        },
        {
            question: "276. Glicoliza se desfăşoară în:",
            choices: [
                "citoplasmă",
                "cloroplaste",
                "membrana apectocelulozică"
            ],
            correctAnswers: ["citoplasmă"]
        },
        {
            question: "277. În urma fermentaţiei acetice alcoolul etilic se transformă:",
            choices: [
                "aerob în acid propionic",
                "anaerob în acid citric",
                "în acid acetic"
            ],
            correctAnswers: ["în acid acetic"]
        },
        {
            question: "278. Fermentaţia alcoolică are aplicaţii în:",
            choices: [
                "panificaţie",
                "prepararea caşcavalului",
                "fabricarea băuturilor alcoolice"
            ],
            correctAnswers: ["panificaţie", "fabricarea băuturilor alcoolice"]
        },
        {
            question: "279. În ciclul Krebs acidul piruvic este degradat până la:",
            choices: [
                "aminoacizi, H2O şi energie",
                "CO2, H2O şi energie",
                "substanţe organice primare"
            ],
            correctAnswers: ["CO2, H2O şi energie"]
        },
        {
            question: "280. În fermentaţia lactică acidul piruvic este redus în:",
            choices: [
                "glicerol şi glucoză",
                "acid lactic",
                "lactat de calciu şi glucoză"
            ],
            correctAnswers: ["acid lactic"]
        },
        {
            question: "281. Acidul citric apare ca intermediar în:",
            choices: [
                "glicoliză",
                "ciclul pentozo - fosfaţilor",
                "ciclul Krebs"
            ],
            correctAnswers: ["ciclul Krebs"]
        },
        {
            question: "282. În procesul de respiraţie lipidele sunt descompuse în:",
            choices: [
                "aminoacizi",
                "glicerină şi acizi graşi",
                "lipaze"
            ],
            correctAnswers: ["glicerină şi acizi graşi"]
        },
        {
            question: "283. Randamentul energetic al respiraţiei aerobe:",
            choices: [
                "depinde de natura substratului utilizat",
                "nu depinde de natura substratului utilizat",
                "este mai mic decât cel al respiraţiei anaerobe"
            ],
            correctAnswers: ["depinde de natura substratului utilizat"]
        },
        {
            question: "284. Acumularea CO2 în interiorul ţesuturilor determină:",
            choices: [
                "intensificarea respiraţiei",
                "intensificarea ciclului Krebs",
                "reducerea respiraţiei"
            ],
            correctAnswers: ["reducerea respiraţiei"]
        },
        {
            question: "285. Bacteria Clostridium pasteurianum produce:",
            choices: [
                "fermentaţia lactică",
                "fermentaţia butirică",
                "fermentaţia acetică"
            ],
            correctAnswers: ["fermentaţia butirică"]
        },
        {
            question: "286. În respiraţia anaerobă:",
            choices: [
                "are loc oxidarea unor substanţe anorganice",
                "se obţine aceeaşi cantitate de energie ca şi în respiraţia aerobă",
                "se obţine o cantitate mai mică de energie decât în respiraţia aerobă"
            ],
            correctAnswers: ["se obţine o cantitate mai mică de energie decât în respiraţia aerobă"]
        },
        {
            question: "287. Gemenii monozigoţi la om provin prin:",
            choices: [
                "fecundarea a 2 ovule de către acelaşi spermatozoid",
                "segmentarea unui ou zigot după fecundaţie",
                "fecundarea a 2 ovule de către 2 spermatozoizi"
            ],
            correctAnswers: ["segmentarea unui ou zigot după fecundaţie"]
        },
        {
            question: "288. Gemenii dizigoţi la om provin din:",
            choices: [
                "fecundarea a 2 ovule de către 2 spermatozoizi",
                "fecundarea unui ovul de către 2 spermatozoizi",
                "segmentarea ulterioară a ovulului fecundat"
            ],
            correctAnswers: ["fecundarea a 2 ovule de către 2 spermatozoizi"]
        },
        {
            question: "289. Gemenii monozigoţi au:",
            choices: [
                "sex diferit",
                "obligatoriu acelaşi sex",
                "unul poate prezenta anomalii ale cromozomilor sexuali"
            ],
            correctAnswers: ["obligatoriu acelaşi sex", "unul poate prezenta anomalii ale cromozomilor sexuali"]
        },
        {
            question: "290. Anemia falciformă are o transmitere:",
            choices: [
                "autosomal recesivă",
                "autosomal dominantă",
                "legată de cromozomul x"
            ],
            correctAnswers: ["autosomal recesivă"]
        }
    ];

    initQuiz(quizData);
});