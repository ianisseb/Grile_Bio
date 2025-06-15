document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "291. Albinismul are o transmitere:",
            choices: [
                "autosomal recesivă",
                "autosomal dominantă",
                "legată de cromozomul x"
            ],
            correctAnswers: ["autosomal recesivă"]
        },
        {
            question: "292. Diabetul zaharat este determinat de o genă:",
            choices: [
                "autosomal dominantă",
                "autosomal recesivă",
                "heterosomală"
            ],
            correctAnswers: ["autosomal recesivă"]
        },
        {
            question: "293. Hemofilia este o maladie:",
            choices: [
                "ereditară autosomală recesivă",
                "ereditară heterosomală",
                "care afectează doar sexul masculin"
            ],
            correctAnswers: ["ereditară heterosomală", "care afectează doar sexul masculin"]
        },
        {
            question: "294. Cromatina sexuală este prezentă în nucleul celular al indivizilor de sex:",
            choices: [
                "feminin",
                "masculin",
                "ambele sexe"
            ],
            correctAnswers: ["feminin"]
        },
        {
            question: "295. Sindromul Klinfelter se caracterizează prin cariotip:",
            choices: [
                "47XXY",
                "49XXXXY",
                "47XY"
            ],
            correctAnswers: ["47XXY", "49XXXXY"]
        },
        {
            question: "296. Amniocenteza presupune studiul:",
            choices: [
                "celulelor fetale din lichidul amniotic",
                "sângelui din cordonul ombilical",
                "sângelui matern"
            ],
            correctAnswers: ["celulelor fetale din lichidul amniotic"]
        },
        {
            question: "297. Amniocenteza se poate practica:",
            choices: [
                "din primul trimestru de sarcină",
                "după săptămâna a 16-a de gestaţie",
                "obligatoriu doar în ultimele 3 luni de sarcină"
            ],
            correctAnswers: ["după săptămâna a 16-a de gestaţie"]
        },
        {
            question: "298. Malformaţiile de tub neural pot fi prevenite prin administrarea prenatală de:",
            choices: [
                "vitamina C",
                "calciu şi magneziu",
                "acid folic şi polivitamine"
            ],
            correctAnswers: ["acid folic şi polivitamine"]
        },
        {
            question: "299. Vectorii pentru transferul de gene sunt:",
            choices: [
                "virusurile",
                "glucoza",
                "plasmidele"
            ],
            correctAnswers: ["virusurile", "plasmidele"]
        },
        {
            question: "300. Celulele mamiferelor se divid în cultură la un interval de:",
            choices: [
                "60 minute",
                "2 ore",
                "aproape 24 ore"
            ],
            correctAnswers: ["aproape 24 ore"]
        },
        {
            question: "301. Pentru creşterea optimă culturile de celule trebuie ţinute la:",
            choices: [
                "peste 38°C",
                "37°C",
                "35°C"
            ],
            correctAnswers: ["37°C"]
        },
        {
            question: "302. Ansamblul secvenţelor de ADN ale unei specii/individ formează:",
            choices: [
                "cariotipul",
                "genomul",
                "acidul ribonucleic"
            ],
            correctAnswers: ["genomul"]
        },
        {
            question: "303. Componentele genomului uman sunt:",
            choices: [
                "genomul nuclear",
                "lizozomal",
                "mitocondrial"
            ],
            correctAnswers: ["genomul nuclear", "mitocondrial"]
        },
        {
            question: "304. Cantitatea ADN nuclear:",
            choices: [
                "este proporţională cu gradul de evoluţie al speciei",
                "nu este proporţională",
                "la salamandră este de 50 de ori mai mare decât la om"
            ],
            correctAnswers: ["nu este proporţională", "la salamandră este de 50 de ori mai mare decât la om"]
        },
        {
            question: "305. Mărimea genomului uman este de:",
            choices: [
                "4.000 Kb",
                "760 Kb",
                "3,2 Gb"
            ],
            correctAnswers: ["3,2 Gb"]
        },
        {
            question: "306. Fondul de gene structurale operatoare şi reglatoare este asigurat de:",
            choices: [
                "ADN nerepetitiv",
                "ADN moderat repetitiv",
                "ADN înalt repetitiv"
            ],
            correctAnswers: ["ADN nerepetitiv"]
        },
        {
            question: "307. ADN repetitiv:",
            choices: [
                "creşte odată cu creşterea cantităţii ADN nuclear",
                "este mai mare la speciile evoluate",
                "nr. secvenţelor complementare scade la speciile înrudite"
            ],
            correctAnswers: ["creşte odată cu creşterea cantităţii ADN nuclear", "este mai mare la speciile evoluate"]
        },
        {
            question: "308. ADN mitocondrial are structură:",
            choices: [
                "dublu helix",
                "helix simplu",
                "inelară bicatenară"
            ],
            correctAnswers: ["inelară bicatenară"]
        },
        {
            question: "309. Cea mai mică cantitate de ADN se găseşte la:",
            choices: [
                "nevertebrate",
                "virusuri",
                "plasmide"
            ],
            correctAnswers: ["virusuri", "plasmide"]
        },
        {
            question: "310. ADN reprezintă materialul genetic al:",
            choices: [
                "celulelor eucariote",
                "celulelor procariote",
                "al ambelor"
            ],
            correctAnswers: ["al ambelor"]
        },
        {
            question: "311. Virusurile au:",
            choices: [
                "doar ADN",
                "doar ARN",
                "ADN şi ARN"
            ],
            correctAnswers: ["doar ADN", "doar ARN"]
        },
        {
            question: "312. Particulele virale conţin:",
            choices: [
                "ambii acizi nucleici ARN+ADN",
                "un singur acid nucleic ADN/ARN",
                "nu conţin acizi nucleici"
            ],
            correctAnswers: ["un singur acid nucleic ADN/ARN"]
        },
        {
            question: "313. Virusurile care conţin ARN se numesc:",
            choices: [
                "dezoxiribovirusuri",
                "ribovirusuri",
                "adenovirusuri"
            ],
            correctAnswers: ["ribovirusuri"]
        },
        {
            question: "314. Următoarele virusuri conţin ADN:",
            choices: [
                "v. herpetic",
                "v. gripal",
                "v. papiloma"
            ],
            correctAnswers: ["v. herpetic", "v. papiloma"]
        },
        {
            question: "315. Următoarele virusuri conţin ARN:",
            choices: [
                "v. gripal",
                "HIV",
                "adenovirusurile"
            ],
            correctAnswers: ["v. gripal", "HIV"]
        },
        {
            question: "316. Unitatea structurală a acizilor nucleici este:",
            choices: [
                "cromozomul",
                "gena",
                "nucleotidul"
            ],
            correctAnswers: ["nucleotidul"]
        },
        {
            question: "317. ADN circular se găseşte în:",
            choices: [
                "virusuri",
                "procariote",
                "nucleul celulelor umane"
            ],
            correctAnswers: ["virusuri", "procariote"]
        },
        {
            question: "318. O celulă eucariotă are:",
            choices: [
                "mai mult ADN",
                "de 10 ori mai mult ARN",
                "ADN şi ARN în cantităţi egale"
            ],
            correctAnswers: ["de 10 ori mai mult ARN"]
        },
        {
            question: "319. ARN mesager uman are structură:",
            choices: [
                "dublu helix",
                "helix simplu monocatenar",
                "circulară bicatenară"
            ],
            correctAnswers: ["helix simplu monocatenar"]
        },
        {
            question: "320. Majoritatea ARN este reprezentată de:",
            choices: [
                "ARN mesager",
                "ARN de transfer",
                "ARN ribozomal"
            ],
            correctAnswers: ["ARN ribozomal"]
        }
    ];

    initQuiz(quizData);
});