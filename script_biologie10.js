document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "351. Riscul de avort secundar amniocentezei este de maxim:",
            choices: [
                "10%",
                "3-4%",
                "0,5%"
            ],
            correctAnswers: ["0,5%"]
        },
        {
            question: "352. Biopsia vilozităţilor coriale se efectuează:",
            choices: [
                "între 15-17 săptămâni de sarcină",
                "9-12 săptămâni de sarcină",
                "la naştere"
            ],
            correctAnswers: ["9-12 săptămâni de sarcină"]
        },
        {
            question: "353. Calculul specific pentru sindromul Down prin triplul test ia în considerare:",
            choices: [
                "vârsta maternă şi paternă; valorile a-fetoproteinei, 3-HCG şi estriolului",
                "vârsta gestaţională şi vârsta maternă"
            ],
            correctAnswers: ["vârsta maternă şi paternă; valorile a-fetoproteinei, 3-HCG şi estriolului", "vârsta gestaţională şi vârsta maternă"]
        },
        {
            question: "354. Fertilizarea in vitro presupune:",
            choices: [
                "cultivarea în laborator a ovocitelor şi spermatozoizilor",
                "plasarea zigotului în cavitatea uterină",
                "plasarea ovocitelor şi spermatozoizilor direct în trompa uterină"
            ],
            correctAnswers: ["cultivarea în laborator a ovocitelor şi spermatozoizilor", "plasarea zigotului în cavitatea uterină"]
        },
        {
            question: "355. În tehnicile standard de fertilizare in vitro un singur ovocit este incubat cu:",
            choices: [
                "5.000-10.000 spermatozoizi",
                "50.000-100.000 spermatozoizi",
                "5-10 milioane spermatozoizi"
            ],
            correctAnswers: ["50.000-100.000 spermatozoizi"]
        },
        {
            question: "356. În fertilizarea „in vitro\":",
            choices: [
                "rata de malformaţii congenitale este mai mare decât în urma concepţiei naturale",
                "şansele de reuşită sunt de 20-30%",
                "şansele de reuşită sunt de 80%"
            ],
            correctAnswers: ["rata de malformaţii congenitale este mai mare decât în urma concepţiei naturale", "şansele de reuşită sunt de 20-30%"]
        },
        {
            question: "357. Clonarea terapeutică utilizează:",
            choices: [
                "celule stem din măduva osoasă",
                "celule stem embrionare",
                "orice celulă"
            ],
            correctAnswers: ["celule stem din măduva osoasă", "celule stem embrionare"]
        },
        {
            question: "358. Clonarea reproductivă reprezintă o formă de reproducere:",
            choices: [
                "sexuată",
                "asexuată",
                "se poate realiza în ambele forme"
            ],
            correctAnswers: ["asexuată"]
        },
        {
            question: "359. La om terapia genetică este admisă:",
            choices: [
                "pentru modificare constituţiei genetice",
                "doar în scop terapeutic",
                "poate duce la mutaţii sau răspândirea unui vector viral"
            ],
            correctAnswers: ["doar în scop terapeutic", "poate duce la mutaţii sau răspândirea unui vector viral"]
        },
        {
            question: "360. Numărul cromozomilor:",
            choices: [
                "variază de la o specie la alta",
                "variază de la un individ al unei specii la altul",
                "este constant în celulele unui organism"
            ],
            correctAnswers: ["variază de la o specie la alta", "este constant în celulele unui organism"]
        },
        {
            question: "361. Unitatea morfo-funcţională a cromozomului este:",
            choices: [
                "centromerul",
                "cromatida",
                "kinetocorul"
            ],
            correctAnswers: ["cromatida"]
        },
        {
            question: "362. Orientarea cromozomilor în cariotip se realizează:",
            choices: [
                "cu braţul lung „p\" în sus şi braţul scurt „q\" în jos",
                "cu braţul scurt „p\" în sus şi braţul lung „q\" în jos",
                "cu braţul scurt „p\" în jos şi braţul lung „q\" în sus"
            ],
            correctAnswers: ["cu braţul scurt „p\" în sus şi braţul lung „q\" în jos"]
        },
        {
            question: "363. Regiunea centromerică a cromozomului este formată din:",
            choices: [
                "telomere",
                "constricţii secundare",
                "constricţia primară a cromatidelor şi kinetocori"
            ],
            correctAnswers: ["constricţia primară a cromatidelor şi kinetocori"]
        },
        {
            question: "364. Porţiunile distale ale braţelor cromozomiale poartă numele de:",
            choices: [
                "centromer",
                "telomer",
                "kinetocor"
            ],
            correctAnswers: ["telomer"]
        },
        {
            question: "365. Telomeraza este:",
            choices: [
                "o enzimă care intervine în menţinerea lungimii cromozomului",
                "o enzimă implicată în repararea capetelor cromozomiale rupte",
                "o porţiune din telomer"
            ],
            correctAnswers: ["o enzimă care intervine în menţinerea lungimii cromozomului", "o enzimă implicată în repararea capetelor cromozomiale rupte"]
        },
        {
            question: "366. Următorii cromozomi nu sunt prezenţi în cariotipul uman:",
            choices: [
                "submetacentrici",
                "metacentrici",
                "telocentrici"
            ],
            correctAnswers: ["telocentrici"]
        },
        {
            question: "367. La sfârşitul fazei „S\" a ciclului celular, cromozomii umani sunt:",
            choices: [
                "monocromatidici",
                "bicromatidici",
                "despiralizaţi"
            ],
            correctAnswers: ["bicromatidici"]
        },
        {
            question: "368. În aranjarea cromozomilor in cariotip se tine cont de:",
            choices: [
                "lungimea cromozomilor",
                "poziţia centromerului",
                "vârsta pacientului"
            ],
            correctAnswers: ["lungimea cromozomilor", "poziţia centromerului"]
        },
        {
            question: "369. La cromozomii acrocentrici:",
            choices: [
                "braţul p este egal cu braţul q",
                "braţul scurt reprezintă 1/10 din lungime",
                "braţul p este mai scurt decât braţul q"
            ],
            correctAnswers: ["braţul scurt reprezintă 1/10 din lungime", "braţul p este mai scurt decât braţul q"]
        },
        {
            question: "370. Cariotiparea reprezintă:",
            choices: [
                "repartiţia cromozomilor metafazici pe grupe",
                "aranjarea cromozomilor după talie, poziţia centromerului şi lungimea braţelor",
                "ambele variante sunt greşite"
            ],
            correctAnswers: ["repartiţia cromozomilor metafazici pe grupe", "aranjarea cromozomilor după talie, poziţia centromerului şi lungimea braţelor"]
        },
        {
            question: "371. Sfatul genetic este:",
            choices: [
                "un procedeu de informare despre modul de transmitere al unei boli genetice",
                "obligatoriu pentru toate cuplurile tinere",
                "indicat la persoanele peste 60 de ani"
            ],
            correctAnswers: ["un procedeu de informare despre modul de transmitere al unei boli genetice"]
        },
        {
            question: "372. Sfatul genetic este indicat:",
            choices: [
                "în cazul existenţei bolilor genetice în familie",
                "în cazul bolilor metabolice",
                "în bolile virale"
            ],
            correctAnswers: ["în cazul existenţei bolilor genetice în familie", "în cazul bolilor metabolice"]
        },
        {
            question: "373. Obiectivele sfatului genetic sunt:",
            choices: [
                "precizarea diagnosticului clinic",
                "vindecarea pacientului",
                "înţelegerea modului de transmitere a trăsăturii patologice"
            ],
            correctAnswers: ["precizarea diagnosticului clinic", "înţelegerea modului de transmitere a trăsăturii patologice"]
        },
        {
            question: "374. Apendicii perinucleari:",
            choices: [
                "sunt formaţiuni corpusculare ataşate la membrana celulară",
                "sunt formaţiuni corpusculare ataşate la membrana nucleară",
                "se pot evidenţia în leucocitele polimorfonucleare"
            ],
            correctAnswers: ["sunt formaţiuni corpusculare ataşate la membrana nucleară", "se pot evidenţia în leucocitele polimorfonucleare"]
        },
        {
            question: "375. Dispoziţia cromozomilor în placă ecuatorială apare în:",
            choices: [
                "profază",
                "metafază",
                "anafază"
            ],
            correctAnswers: ["metafază"]
        }
    ];

    initQuiz(quizData);
});