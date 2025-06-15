document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "490. Meristemele primare sunt:",
            choices: [
                "a) protoderma, procambiul şi felogenul",
                "b) protoderma, meristemul fundamental şi cambiu",
                "c) protoderma, procambiul şi meristemul fundamental"
            ],
            correctAnswers: ["c) protoderma, procambiul şi meristemul fundamental"]
        },
        {
            question: "491. Cambiul prin activitatea sa generează:",
            choices: [
                "a) lemn secundar, liber secundar şi suber",
                "b) liber secundar, lemn secundar şi măduvă",
                "c) liber secundar, lemn secundar şi raze medulare secundare"
            ],
            correctAnswers: ["c) liber secundar, lemn secundar şi raze medulare secundare"]
        },
        {
            question: "492. Felogenul prin activitatea sa generează:",
            choices: [
                "a) suber şi feloderm",
                "b) suber, feloid şi feloderm",
                "c) suber, feloderm şi raze medulare"
            ],
            correctAnswers: ["b) suber, feloid şi feloderm"]
        },
        {
            question: "493. Epiderma poate fi:",
            choices: [
                "a) unistratificată",
                "b) pluristratificată",
                "c) unistratificată sau pluristratificată"
            ],
            correctAnswers: ["c) unistratificată sau pluristratificată"]
        },
        {
            question: "494. Stomatele, după forma celulelor alcătuitoare, pot fi de următoarele tipuri:",
            choices: [
                "a) Amarilidaceu, Gramineu, Mnium",
                "b) Amarilidaceu, Gramineu, Anizocitic",
                "c) Amarilidaceu, Gramineu, Mnium (Pteridofitic), Gimnospermic"
            ],
            correctAnswers: ["c) Amarilidaceu, Gramineu, Mnium (Pteridofitic), Gimnospermic"]
        },
        {
            question: "495. Perii protectori (tectori) pot fi:",
            choices: [
                "a) unicelulari sau pluricelulari vii",
                "b) unicelulari sau pluricelulari morţi",
                "c) unicelulari sau pluricelulari, vii sau morţi"
            ],
            correctAnswers: ["c) unicelulari sau pluricelulari, vii sau morţi"]
        },
        {
            question: "496. Exoderma poate fi:",
            choices: [
                "a) unistratificată",
                "b) unistratificată sau pluristratificată",
                "c) pluristratificată"
            ],
            correctAnswers: ["b) unistratificată sau pluristratificată"]
        },
        {
            question: "497. Endoderma protejează:",
            choices: ["a) rădăcina", "b) scoarţa", "c) cilindrul central"],
            correctAnswers: ["c) cilindrul central"]
        },
        {
            question: "498. Ţesutul suberos protejează:",
            choices: [
                "a) rădăcina",
                "b) rădăcina, tulpina şi ramurile acestora cu creştere secundară",
                "c) tulpina şi ramurile sale"
            ],
            correctAnswers: ["b) rădăcina, tulpina şi ramurile acestora cu creştere secundară"]
        },
        {
            question: "499. Parenchimurile absorbante au rolul de a absorbi:",
            choices: [
                "a) apa cu sărurile minerale",
                "b) seva brută şi elaborată",
                "c) apa cu sărurile minerale din sol şi din precipitaţii şi substanţele organice din endosperm"
            ],
            correctAnswers: ["c) apa cu sărurile minerale din sol şi din precipitaţii şi substanţele organice din endosperm"]
        },
        {
            question: "500. Parenchimul asimilator se întâlneşte în:",
            choices: ["a) frunză", "b) tulpini", "c) rădăcină", "d) toate organele verzi ale plantei"],
            correctAnswers: ["d) toate organele verzi ale plantei"]
        },
        {
            question: "501. Celulele parenchimului acvifer conţin:",
            choices: ["a) substanţe organice", "b) săruri minerale", "c) vacuolă mare cu suc celular bogat în coloizi hidrofili"],
            correctAnswers: ["c) vacuolă mare cu suc celular bogat în coloizi hidrofili"]
        },
        {
            question: "502. Parenchimul aerifer se găseşte la plantele:",
            choices: ["a) hidrofile şi higrofile", "b) mezofile", "c) xerofile"],
            correctAnswers: ["a) hidrofile şi higrofile"]
        },
        {
            question: "503. Traheidele sunt vase lemnoase imperfecte pentru că:",
            choices: [
                "a) au pereţii celulozici",
                "b) conţin citoplasmă puţină",
                "c) sunt fusiforme şi au toţi pereţii lignificaţi"
            ],
            correctAnswers: ["c) sunt fusiforme şi au toţi pereţii lignificaţi"]
        },
        {
            question: "504. Traheele sunt vase perfecte deoarece:",
            choices: [
                "a) nu au pereţi laterali",
                "b) sunt moarte",
                "c) pereţii transversali dintre celule s-au resorbit"
            ],
            correctAnswers: ["c) pereţii transversali dintre celule s-au resorbit"]
        },
        {
            question: "505. Vasele lemnoase sunt reprezentate prin:",
            choices: ["a) traheide şi trahei", "b) traheide şi parenchim lemnos", "c) trahei şi fibre lemnoase"],
            correctAnswers: ["a) traheide şi trahei"]
        },
        {
            question: "506. Tuburile ciuruite conduc:",
            choices: ["a) seva brută", "b) seva elaborată", "c) seva brută şi elaborată"],
            correctAnswers: ["b) seva elaborată"]
        },
        {
            question: "507. Vasele liberiene se numesc tuburi ciuruite pentru că:",
            choices: [
                "a) prezintă plăci ciuruite simple sau multiple pe pereţii transversali",
                "b) sunt vii",
                "c) au plăci ciuruite pe pereţii laterali"
            ],
            correctAnswers: ["a) prezintă plăci ciuruite simple sau multiple pe pereţii transversali"]
        },
        {
            question: "508. Colenchimul este un ţesut mecanic:",
            choices: ["a) dispus superficial şi viu", "b) dispus în scoarţa internă", "c) viu şi dispus în cilindrul central"],
            correctAnswers: ["a) dispus superficial şi viu"]
        },
        {
            question: "509. Colenchimul este de tip angular şi tabelar:",
            choices: [
                "a) cel angular are pereţii tangenţiali îngroşaţi cu lignină",
                "b) cel tabelar are pereţii îngroşaţi la unghiuri cu celuloză",
                "c) cel angular are pereţii celulari îngroşaţi la unghiuri cu celuloză şi cel tabelar are pereţii tangenţiali îngroşaţi cu celuloză"
            ],
            correctAnswers: ["c) cel angular are pereţii celulari îngroşaţi la unghiuri cu celuloză şi cel tabelar are pereţii tangenţiali îngroşaţi cu celuloză"]
        },
        {
            question: "510. Sclerenchimul este:",
            choices: [
                "a) un ţesut mort alcătuit din celule care au pereţii uniform lignificaţi",
                "b) un ţesut mort alcătuit din celule cu pereţii îngroşaţi uniform cu celuloză",
                "c) un ţesut mort alcătuit din celule cu pereţii îngroşaţi neuniform cu lignină"
            ],
            correctAnswers: ["a) un ţesut mort alcătuit din celule care au pereţii uniform lignificaţi"]
        },
        {
            question: "511. Papilele secretoare se întâlnesc pe:",
            choices: ["a) frunze", "b) sepale", "c) petale şi ramurile tinere ale unor arbori"],
            correctAnswers: ["c) petale şi ramurile tinere ale unor arbori"]
        },
        {
            question: "512. Perii secretori sunt formaţiuni epidermice:",
            choices: ["a) unicelulare sau pluricelulare", "b) unicelulare", "c) pluricelulare ramificate"],
            correctAnswers: ["a) unicelulare sau pluricelulare"]
        },
        {
            question: "513. Nectarinele (nectariile) sunt producţiuni epidermice sau emergenţe şi se găsesc:",
            choices: [
                "a) numai în floare",
                "b) numai pe frunze",
                "c) în floare, pe limbul foliar, pe peţiol şi pe stipele"
            ],
            correctAnswers: ["c) în floare, pe limbul foliar, pe peţiol şi pe stipele"]
        },
        {
            question: "514. Laticiferele sunt celule secretoare ale căror produse:",
            choices: ["a) se depun intracelular", "b) sunt eliminate în spaţiile intercelulare", "c) sunt eliminate în mediul extern"],
            correctAnswers: ["a) se depun intracelular"]
        },
        {
            question: "515. Papilele senzitive sunt localizate:",
            choices: ["a) la baza filamentelor staminale din florile unor plante", "b) la baza stigmatului", "c) la baza gineceului"],
            correctAnswers: ["a) la baza filamentelor staminale din florile unor plante"]
        },
        {
            question: "516. Parenchimurile senzitive sunt localizate la:",
            choices: ["a) baza peţiolului frunzelor", "b) baza limbului foliar", "c) baza inflorescenţelor"],
            correctAnswers: ["a) baza peţiolului frunzelor"]
        },
        {
            question: "517. Ocelele senzitive reprezintă:",
            choices: [
                "a) un sistem de două celule epidermice suprapuse",
                "b) un sistem de două stomate suprapuse",
                "c) un sistem de mai multe celule epidermice suprapuse"
            ],
            correctAnswers: ["a) un sistem de două celule epidermice suprapuse"]
        },
        {
            question: "518. Florile bărbăteşti la pin:",
            choices: [
                "a) au forma unor conuri mici",
                "b) au forma unor conuri mari",
                "c) sunt dispuse în inflorescenţe"
            ],
            correctAnswers: ["a) au forma unor conuri mici", "c) sunt dispuse în inflorescenţe"]
        },
        {
            question: "519. O floare bărbătească de la pin prezintă:",
            choices: [
                "a) un ax pe care sunt prinse microsporofile (stamine)",
                "b) un ax de care sunt prinşi sacii polenici",
                "c) un ax central pe care sunt dispuse în spirală microsporofile (stamine) care au forma unor solzi ce poartă pe faţa inferioară câte doi saci polenici"
            ],
            correctAnswers: ["c) un ax central pe care sunt dispuse în spirală microsporofile (stamine) care au forma unor solzi ce poartă pe faţa inferioară câte doi saci polenici"]
        },
        {
            question: "520. Grăunciorul de polen la pin are următoarea structură:",
            choices: [
                "a) exină, celulă vegetativă, celulă generativă, două celule protaliene",
                "b) exină, intină, celulă vegetativă şi două arhegoane",
                "c) exină, intină între care se găsesc doi saci cu aer, celulă vegetativă, celulă generativă şi două celule protaliene"
            ],
            correctAnswers: ["c) exină, intină între care se găsesc doi saci cu aer, celulă vegetativă, celulă generativă şi două celule protaliene"]
        }
    ];

    initQuiz(quizData);
});