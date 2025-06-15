document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "321. Materialul genetic interfazic constituie:",
            choices: [
                "cromozomii",
                "cromatina",
                "genele"
            ],
            correctAnswers: ["cromatina"]
        },
        {
            question: "322. La organismele diploide genele sunt:",
            choices: [
                "sub formă de pereche",
                "sub formă simplă",
                "sub ambele forme"
            ],
            correctAnswers: ["sub formă de pereche"]
        },
        {
            question: "323. Genele situate pe cromozomii sexuali se numesc:",
            choices: [
                "gene autozomale",
                "gene gonozomale",
                "gene recesive"
            ],
            correctAnswers: ["gene gonozomale"]
        },
        {
            question: "324. Genele recesive sunt gene care se manifestă fenotipic:",
            choices: [
                "doar în cazul unui genotip heterozigot",
                "doar în cazul unui genotip homozigot",
                "în ambele cazuri"
            ],
            correctAnswers: ["doar în cazul unui genotip homozigot"]
        },
        {
            question: "325. O genă dominantă se manifestă fenotipic în cazul unui genotip:",
            choices: [
                "heterozigot",
                "homozigot",
                "în niciun caz"
            ],
            correctAnswers: ["heterozigot", "homozigot"]
        },
        {
            question: "326. Termenul de haplotip defineşte:",
            choices: [
                "un grup de gene care se transmit împreună",
                "genele alele",
                "genele gonozomale"
            ],
            correctAnswers: ["un grup de gene care se transmit împreună"]
        },
        {
            question: "327. Fenomenul prin care genele vecine, nealele nu se separă în meioză şi se transmit împreună la descendenţi se numeşte:",
            choices: [
                "crossing-over",
                "linkage",
                "înlnţuire genetică"
            ],
            correctAnswers: ["linkage", "înlnţuire genetică"]
        },
        {
            question: "328. Genele care se manifestă fenotipic la heterozigoţi în acelaşi timp se numesc:",
            choices: [
                "alele",
                "codominante",
                "recesive"
            ],
            correctAnswers: ["codominante"]
        },
        {
            question: "329. O modificare în structura materialului genetic al unui individ se numeşte:",
            choices: [
                "migraţie",
                "recombinare",
                "mutaţie"
            ],
            correctAnswers: ["mutaţie"]
        },
        {
            question: "330. Amestecul zestrei genetice parentale ce va fi transmis în descendenţă se realizează prin:",
            choices: [
                "recombinare",
                "mutaţii",
                "migraţie"
            ],
            correctAnswers: ["recombinare"]
        },
        {
            question: "331. Celulele haploide sunt:",
            choices: [
                "celulele somatice",
                "ovocitul",
                "spermatozoidul"
            ],
            correctAnswers: ["ovocitul", "spermatozoidul"]
        },
        {
            question: "332. Celulele somatice sunt:",
            choices: [
                "haploide",
                "diploide",
                "aneuploide"
            ],
            correctAnswers: ["diploide"]
        },
        {
            question: "333. Sindromul Down reprezintă:",
            choices: [
                "trisomia 13",
                "trisomia 18",
                "trisomia 21"
            ],
            correctAnswers: ["trisomia 21"]
        },
        {
            question: "334. În cazul sindromului Down cariotipul poate fi:",
            choices: [
                "47XX",
                "47XY",
                "47XXY"
            ],
            correctAnswers: ["47XX", "47XY"]
        },
        {
            question: "335. Pentru expresia fenotipică a sindromului Down este responsabilă:",
            choices: [
                "porţiunea distală a braţului lung (q) al cromozomului 21",
                "braţul scurt (p) al cromozomului 21",
                "ambele braţe"
            ],
            correctAnswers: ["porţiunea distală a braţului lung (q) al cromozomului 21"]
        },
        {
            question: "336. În relaţie cu incidenţa sindromului Down este importantă:",
            choices: [
                "vârsta tatălui",
                "vârsta mamei",
                "ambele"
            ],
            correctAnswers: ["vârsta mamei"]
        },
        {
            question: "337. Sindromul Down se caracterizează prin:",
            choices: [
                "retard mintal",
                "malformaţii cardiace",
                "lipsa membrelor superioare sau inferioare"
            ],
            correctAnswers: ["retard mintal", "malformaţii cardiace"]
        },
        {
            question: "338. Amniocenteza este indicată în următoarele situaţii:",
            choices: [
                "la orice gravidă",
                "avorturi recurente de trimestrul I în antecendente",
                "naşterea unor feţi cu malformaţii"
            ],
            correctAnswers: ["avorturi recurente de trimestrul I în antecendente", "naşterea unor feţi cu malformaţii"]
        },
        {
            question: "339. Efectuarea cariotipului părinţilor este impusă de:",
            choices: [
                "naşterea unor feţi cu malformaţii",
                "naşterea unor feţi morţi sau cu retard mintal",
                "este indicată de la prima sarcină"
            ],
            correctAnswers: ["naşterea unor feţi cu malformaţii", "naşterea unor feţi morţi sau cu retard mintal"]
        },
        {
            question: "340. Sindromul Turner este asociat cu genotipul:",
            choices: [
                "46XY",
                "45XO",
                "47XYY"
            ],
            correctAnswers: ["45XO"]
        },
        {
            question: "341. Sindromul Klinefelter este asociat cu genotip:",
            choices: [
                "45XO",
                "47XY",
                "47XXY"
            ],
            correctAnswers: ["47XXY"]
        },
        {
            question: "342. Sindromul Klinefelter se caracterizează prin:",
            choices: [
                "creşterea numărului de cromozomi X",
                "creşterea numărului de cromozomi Y",
                "retard mintal"
            ],
            correctAnswers: ["creşterea numărului de cromozomi X", "retard mintal"]
        },
        {
            question: "343. Aspectele fizice majore ale sindromului Klinefelter sunt:",
            choices: [
                "retard mintal",
                "statură mică",
                "nedezvoltarea organelor sexuale masculine"
            ],
            correctAnswers: ["retard mintal", "nedezvoltarea organelor sexuale masculine"]
        },
        {
            question: "344. Incidenţa anomaliilor cromozomiale în avorturile spontane în primul trimestru de sarcină ajunge la:",
            choices: [
                "10%",
                "60%",
                "95%"
            ],
            correctAnswers: ["60%"]
        },
        {
            question: "345. În cazul avorturilor cu aberaţii cromozomiale este indicat la sarcinile următoare:",
            choices: [
                "consultul genetic",
                "monitorizarea prenatală",
                "ambele"
            ],
            correctAnswers: ["ambele"]
        },
        {
            question: "346. Anomaliile cromozomilor sexuali sunt mai frecvent asociate cu:",
            choices: [
                "creşterea staturală",
                "ambiguitatea fenotipică a organelor genitale",
                "dezvoltarea neuropsihică"
            ],
            correctAnswers: ["ambiguitatea fenotipică a organelor genitale"]
        },
        {
            question: "347. Retardul în dezvoltarea organismului:",
            choices: [
                "indică efectuarea cariotipului",
                "reflectă anomalii autozomale",
                "reflectă anomalii gonozomale"
            ],
            correctAnswers: ["indică efectuarea cariotipului", "reflectă anomalii autozomale"]
        },
        {
            question: "348. În cadrul consultului genetic prenatal investigaţia va fi extinsă până la rudele de:",
            choices: [
                "gradul I",
                "gradul II",
                "gradul III"
            ],
            correctAnswers: ["gradul III"]
        },
        {
            question: "349. Istoricul genetic ia în considerare:",
            choices: [
                "originea etnică",
                "vârsta tatălui peste 50 de ani",
                "consumul de contraceptive în antecedente"
            ],
            correctAnswers: ["originea etnică", "vârsta tatălui peste 50 de ani"]
        },
        {
            question: "350. Cantitatea de lichid amniotic necesar a fi recoltată prin amniocenteză este de:",
            choices: [
                "100 ml",
                "20-30 ml",
                "5 ml"
            ],
            correctAnswers: ["20-30 ml"]
        }
    ];

    initQuiz(quizData);
});