document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "521. Florile femeieşti de la pin, sunt grupate în inflorescenţe numite conuri care sunt mari. O asemenea inflorescenţă este formată din:",
            choices: [
                "a) un ax central pe care sunt dispuse în spirală macrosporofile (carpele) purtătoare de saci polenici",
                "b) un ax central pe care sunt dispuse în spirală macrosporofile (carpele), aşezate la subsuoara câte unui solz steril, care poartă pe faţa superioară câte doi macrosporangi (ovule)",
                "c) un ax central pe care sunt dispuse carpele care au pe faţa inferioară câte două ovule"
            ],
            correctAnswers: ["b) un ax central pe care sunt dispuse în spirală macrosporofile (carpele), aşezate la subsuoara câte unui solz steril, care poartă pe faţa superioară câte doi macrosporangi (ovule)"]
        },
        {
            question: "522. Ovulul de la pin are următoarea structură:",
            choices: [
                "a) integument, nucelă, sac embrionar",
                "b) integument, nucelă şi două arhegoane",
                "c) integument, nucelă, endosperm primar în care sunt împlântate două arhegoane care au în interior câte o oosferă"
            ],
            correctAnswers: ["c) integument, nucelă, endosperm primar în care sunt împlântate două arhegoane care au în interior câte o oosferă"]
        },
        {
            question: "523. Polenizare la Gymnospermae este:",
            choices: ["a) anemofilă", "b) entomofilă", "c) hidrofilă"],
            correctAnswers: ["a) anemofilă"]
        },
        {
            question: "524. Fecundaţia la Gymnospermae este:",
            choices: ["a) dublă", "b) simplă", "c) simplă şi dublă"],
            correctAnswers: ["b) simplă"]
        },
        {
            question: "525. Elementele cu rol de înmulţire ale florii Angiospermelor sunt:",
            choices: ["a) caliciul şi staminele", "b) corola şi carpelele", "c) staminele şi carpelele"],
            correctAnswers: ["c) staminele şi carpelele"]
        },
        {
            question: "526. Stamina este formată din:",
            choices: ["a) peduncul, conectiv şi anteră", "b) filament, conectiv şi anteră", "c) filament, conectiv şi saci polenici"],
            correctAnswers: ["b) filament, conectiv şi anteră"]
        },
        {
            question: "527. După raportul dintre stamine, androceul poate fi:",
            choices: ["a) gamostemon sau concrescut", "b) dialistemon sau liber", "c) dialistemon sau gamostemon"],
            correctAnswers: ["c) dialistemon sau gamostemon"]
        },
        {
            question: "528. Ca structură antera poate prezenta:",
            choices: [
                "a) un şanţ median, două şanţuri laterale, conectiv, epidermă, strat mecanic, strat tranzitoriu şi strat tapet",
                "b) un şanţ median, două şanţuri laterale, conectiv, epidermă, strat tranzitoriu şi strat tapet",
                "c) un şanţ median, două şanţuri laterale, conectiv, epidermă, strat mecanic"
            ],
            correctAnswers: ["a) un şanţ median, două şanţuri laterale, conectiv, epidermă, strat mecanic, strat tranzitoriu şi strat tapet"]
        },
        {
            question: "529. Grăunciorul de polen la Angiospermae are următoarea structură:",
            choices: [
                "a) exină groasă prevăzută cu pori, intină subţire prevăzută cu îngroşări la nivelul porilor exinei, celulă vegetativă şi celulă generativă",
                "b) exină, intină, saci cu aer, celulă vegetativă şi celulă generativă",
                "c) exină, intină, celule protaliene, celulă vegetativă şi celulă generativă"
            ],
            correctAnswers: ["a) exină groasă prevăzută cu pori, intină subţire prevăzută cu îngroşări la nivelul porilor exinei, celulă vegetativă şi celulă generativă"]
        },
        {
            question: "530. Gineceul este format din una sau mai multe carpele care prezintă trei părţi:",
            choices: ["a) ovar, stil şi stigmat", "b) ovar, ovul şi stigmat", "c) ovule, stil şi stigmat"],
            correctAnswers: ["a) ovar, stil şi stigmat"]
        },
        {
            question: "531. Peretele ovarului este alcătuit din:",
            choices: [
                "a) epidermă externă, mezofil, epidermă internă",
                "b) epidermă externă unistratificată, mezofil pluristratificat în care sunt dispuse fascicule conducătoare libero - lemnoase mediane, laterale, placentare şi epidermă internă unistratificată",
                "c) epidermă externă, mezofil unistratificat cu fascicule conducătoare"
            ],
            correctAnswers: ["b) epidermă externă unistratificată, mezofil pluristratificat în care sunt dispuse fascicule conducătoare libero - lemnoase mediane, laterale, placentare şi epidermă internă unistratificată"]
        },
        {
            question: "532. Gineceul policarpelar sincarp poate fi:",
            choices: [
                "a) eusincarp, paracarp şi lisicarp",
                "b) apocarpoid, lisicarp şi cenocarp",
                "c) paracarp, ortotrop şi lisicarp"
            ],
            correctAnswers: ["a) eusincarp, paracarp şi lisicarp"]
        },
        {
            question: "533. Ovulul la Angiospermae este format din:",
            choices: [
                "a) funicul, integumente, chalază",
                "b) funicul, hil, integumente, nucelă",
                "c) funicul cu hil şi chalază şi din corpul ovulului alcătuit din integument extern şi intern care lasă în partea superioară un micropil, nucelă şi sacul embrionar cu cele şapte celule"
            ],
            correctAnswers: ["c) funicul cu hil şi chalază şi din corpul ovulului alcătuit din integument extern şi intern care lasă în partea superioară un micropil, nucelă şi sacul embrionar cu cele şapte celule"]
        },
        {
            question: "534. Tipuri de ovule la Angiospermae:",
            choices: [
                "a) ortotrop, anatrop, campilotrop",
                "b) ortotrop, anatrop, apotrop",
                "c) epitrop, anatrop, campilotrop"
            ],
            correctAnswers: ["a) ortotrop, anatrop, campilotrop"]
        },
        {
            question: "535. Formarea sacului embrionar se numeşte:",
            choices: ["a) macrosporogeneză", "b) microsporogeneză", "c) macrogametogeneză"],
            correctAnswers: ["a) macrosporogeneză"]
        },
        {
            question: "536. În sacul embrionar se găsesc următoarele celule:",
            choices: [
                "a) oosfera, două antipode, două sinergide",
                "b) oosfera, două sinergide, trei antipode",
                "c) oosfera, două sinergide, nucleul secundar al sacului embrionar, trei antipode"
            ],
            correctAnswers: ["c) oosfera, două sinergide, nucleul secundar al sacului embrionar, trei antipode"]
        },
        {
            question: "537. Factorii polenizării încrucişate sunt:",
            choices: [
                "a) vântul pentru plantele anemofile, apa pentru plantele hidrofile",
                "b) vântul pentru plantele anemofile, animalele pentru plantele zoofile, apa pentru plantele hidrofile",
                "c) vântul pentru plantele anemofile, păsările pentru plantele ornitofile, insectele pentru plantele entomofile"
            ],
            correctAnswers: ["b) vântul pentru plantele anemofile, animalele pentru plantele zoofile, apa pentru plantele hidrofile"]
        },
        {
            question: "538. Fecundaţia la Angiospermae este dublă deoarece:",
            choices: [
                "a) gameţii bărbăteşti se unesc cu oosfera şi nucleul secundar al sacului embrionar",
                "b) gameţii bărbăteşti se unesc cu oosfera şi o sinergidă",
                "c) gameţii bărbăteşti se unesc cu oosfera şi o antipodă"
            ],
            correctAnswers: ["a) gameţii bărbăteşti se unesc cu oosfera şi nucleul secundar al sacului embrionar"]
        },
        {
            question: "539. Ph. Porifera cuprinde:",
            choices: ["a) bureții de apă", "b) meduzele", "c) aricii de mare"],
            correctAnswers: ["a) bureții de apă"]
        },
        {
            question: "540. Pinacocitele sunt celule întâlnite în:",
            choices: ["a) coșulețele vibratile la spongieri", "b) mezodermul embrionar", "c) stratul extern dermic al spongierilor"],
            correctAnswers: ["c) stratul extern dermic al spongierilor"]
        },
        {
            question: "541. Fenomenul de inversiune a suprafețelor și a foițelor embrionare se întâlnește la:",
            choices: ["a) spongieri", "b) moluște", "c) artropode"],
            correctAnswers: ["a) spongieri"]
        },
        {
            question: "542. Cavitatea gastrică la scifopolip este:",
            choices: ["a) simplă, necompartimentată", "b) compartimentată în 4 loje", "c) compartimentată în 8 loje"],
            correctAnswers: ["b) compartimentată în 4 loje"]
        },
        {
            question: "543. Haptorii sunt formațiuni de fixare de gazdă întâlnite la:",
            choices: ["a) Triclade", "b) Monogenoidea", "c) Cestoda"],
            correctAnswers: ["b) Monogenoidea"]
        },
        {
            question: "544. Tubul digestiv la cestode se caracterizează prin:",
            choices: ["a) are glande digestive complexe", "b) orificiul bucal este separat de cel anal", "c) tubul digestiv lipsește"],
            correctAnswers: ["c) tubul digestiv lipsește"]
        },
        {
            question: "545. Metameria unor organe (mușchi retractori ai piciorului, branhii, nefridii) se întâlnește la moluștele:",
            choices: ["a) Monoplacophora", "b) Polyplacophora", "c) Scaphopoda"],
            correctAnswers: ["a) Monoplacophora"]
        },
        {
            question: "546. Chiton tuberculatum se încadrează sistematic în:",
            choices: ["a) Gasteropoda", "b) Polyplacophora", "c) Cephalopoda"],
            correctAnswers: ["b) Polyplacophora"]
        },
        {
            question: "547. Gastrotricha se caracterizează prin:",
            choices: ["a) prezența de benzi ciliare ventrale", "b) sunt nevertebrate de talie medie și mare, de ordinul zecilor de cm", "c) au schelet calcaros bine dezvoltat"],
            correctAnswers: ["a) prezența de benzi ciliare ventrale"]
        },
        {
            question: "548. La Nematoda, sistemul excretor este:",
            choices: ["a) protonefridian", "b) metanefridian", "c) tubular sau glandular (renete glandulare)"],
            correctAnswers: ["c) tubular sau glandular (renete glandulare)"]
        },
        {
            question: "549. Lophophorul este:",
            choices: ["a) un pliu al peretelui corpului din jurul gurii", "b) un țesut cu rol excretor din jurul intestinului", "c) un mugure de rezistență ce se formează în condiții nefavorabile"],
            correctAnswers: ["a) un pliu al peretelui corpului din jurul gurii"]
        },
        {
            question: "550. Corpul este acoperit de o cochilie bivalvă la:",
            choices: ["a) Brachiopoda", "b) Bivalvia", "c) Brachiopoda și Bivalvia"],
            correctAnswers: ["c) Brachiopoda și Bivalvia"]
        }
    ];

    initQuiz(quizData);
});