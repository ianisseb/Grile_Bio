document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "401. Insulele Langerhans reprezintă:",
            choices: [
                "a) grupări de celule cu funcţie endocrină",
                "b) grupări de celule prezente în interiorul pancreasului",
                "c) grupări de celule prezente în mucoasa intestinală"
            ],
            correctAnswers: ["a) grupări de celule cu funcţie endocrină", "b) grupări de celule prezente în interiorul pancreasului"]
        },
        {
            question: "402. Următoarele celule reprezintă celule conjunctive nediferenţiate:",
            choices: [
                "a) fibroblastul şi fibrocitul",
                "b) celula mezenchimală şi celula reticulară",
                "c) fibroblastul şi mastocitul"
            ],
            correctAnswers: ["b) celula mezenchimală şi celula reticulară"]
        },
        {
            question: "403. Ţesutul conjunctiv embrionar se numeşte:",
            choices: ["a) parenchim", "b) corion", "c) mezenchim"],
            correctAnswers: ["c) mezenchim"]
        },
        {
            question: "404. Fibroblastul este o celulă conjunctivă:",
            choices: ["a) adultă", "b) nediferenţiată", "c) tânără"],
            correctAnswers: ["c) tânără"]
        },
        {
            question: "405. Care dintre următoarele celule sunt celule conjunctive autohtone mature:",
            choices: [
                "a) adipocitul, fibrocitul şi mastocitul",
                "b) celulele pigmentare",
                "c) fibroblastele, plasmocitele şi macrofagele"
            ],
            correctAnswers: ["a) adipocitul, fibrocitul şi mastocitul", "b) celulele pigmentare"]
        },
        {
            question: "406. Varietăţile de fibre conjunctive sunt reprezentate de:",
            choices: ["a) fibrele de colagen şi elastice", "b) fibrele nervoase", "c) fibrele de reticulină"],
            correctAnswers: ["a) fibrele de colagen şi elastice", "c) fibrele de reticulină"]
        },
        {
            question: "407. Fibrele de reticulină se evidenţiază prin:",
            choices: [
                "a) coloraţii histologice obişnuite cu hematoxilină-eozină",
                "b) metode de impregnare argentică",
                "c) prin coloraţie PAS"
            ],
            correctAnswers: ["b) metode de impregnare argentică"]
        },
        {
            question: "408. În structura tendoanelor se găseşte:",
            choices: [
                "a) ţesut conjunctiv dens ordonat",
                "b) ţesut conjunctiv bogat în fibre de colagen",
                "c) ţesut conjunctiv dens neordonat"
            ],
            correctAnswers: ["a) ţesut conjunctiv dens ordonat", "b) ţesut conjunctiv bogat în fibre de colagen"]
        },
        {
            question: "409. Ţesut conjunctiv dens bogat în fibre elastice se găseşte în următoarele structuri:",
            choices: [
                "a) tendoane şi aponevroze",
                "b) stroma pulmonară",
                "c) tunica medie a vaselor mari de la baza cordului"
            ],
            correctAnswers: ["b) stroma pulmonară", "c) tunica medie a vaselor mari de la baza cordului"]
        },
        {
            question: "410. Ţesutul cartilaginos este:",
            choices: [
                "a) o formă particulară de ţesut osos",
                "b) o formă de ţesut conjunctiv",
                "c) format din celule numite condroblaste şi condrocite"
            ],
            correctAnswers: ["b) o formă de ţesut conjunctiv", "c) format din celule numite condroblaste şi condrocite"]
        },
        {
            question: "411. Substanţa fundamentală a ţesutului cartilaginos se numeşte:",
            choices: ["a) condrină", "b) elastină", "c) miozină"],
            correctAnswers: ["a) condrină"]
        },
        {
            question: "412. Celulele osoase sunt reprezentate de:",
            choices: [
                "a) osteoblaste, osteocite şi osteoplaste",
                "b) osteoblaste, osteocite şi osteoclaste",
                "c) osteoblaste şi osteoplaste"
            ],
            correctAnswers: ["b) osteoblaste, osteocite şi osteoclaste"]
        },
        {
            question: "413. Periostul reprezintă:",
            choices: [
                "a) o membrană conjunctivo-vasculară care înveleşte osul",
                "b) o membrană care înveleşte o piesă cartilaginoasă",
                "c) o membrană cu rol trofic şi osteogenic"
            ],
            correctAnswers: ["a) o membrană conjunctivo-vasculară care înveleşte osul", "c) o membrană cu rol trofic şi osteogenic"]
        },
        {
            question: "414. Osteoblastele sunt celule:",
            choices: [
                "a) osoase mature",
                "b) care rezultă din diferenţierea celulelor mezenchimale",
                "c) care rezultă din diferenţierea fibroblastelor"
            ],
            correctAnswers: ["b) care rezultă din diferenţierea celulelor mezenchimale", "c) care rezultă din diferenţierea fibroblastelor"]
        },
        {
            question: "415. Osteclastele reprezintă:",
            choices: [
                "a) celule osoase tinere",
                "b) macrofagele ţesutului osos",
                "c) cavităţile în care sunt situate osteoblastele"
            ],
            correctAnswers: ["b) macrofagele ţesutului osos"]
        },
        {
            question: "416. Componenta organică de bază a ţesutului osos o reprezintă:",
            choices: ["a) colagenul", "b) sărurile minerale", "c) sialoproteinele şi osteocalcina"],
            correctAnswers: ["a) colagenul"]
        },
        {
            question: "417. Ţesutul osos compact are următoarele caracteristici:",
            choices: [
                "a) se găseşte în diafiza oaselor lungi şi corticala oaselor scurte",
                "b) se găseşte în diafiza oaselor lungi şi în oasele late",
                "c) este mai puţin rezistent la forţele mecanice"
            ],
            correctAnswers: ["a) se găseşte în diafiza oaselor lungi şi corticala oaselor scurte"]
        },
        {
            question: "418. Osteonul este:",
            choices: [
                "a) unitatea morfofuncţională a ţesutului osos compact",
                "b) componenta structurală a ţesutului osos trabecular",
                "c) prezintă central un canal Havers"
            ],
            correctAnswers: ["a) unitatea morfofuncţională a ţesutului osos compact", "c) prezintă central un canal Havers"]
        },
        {
            question: "419. Endostul reprezintă:",
            choices: [
                "a) ţesut osos spongios",
                "b) o membrană conjunctivă care tapetează canalul medular",
                "c) o membrană conjunctivă care tapetează areolele osului spongios"
            ],
            correctAnswers: ["b) o membrană conjunctivă care tapetează canalul medular", "c) o membrană conjunctivă care tapetează areolele osului spongios"]
        },
        {
            question: "420. Măduva osoasă a adultului este reprezentată în special de:",
            choices: ["a) măduvă galbenă", "b) măduvă roşie hematogenă", "c) măduvă cenuşie"],
            correctAnswers: ["a) măduvă galbenă"]
        },
        {
            question: "421. Osificarea completă a unor piese osoase se termină în organismul uman:",
            choices: [
                "a) în primele luni după naştere",
                "b) la pubertate",
                "c) la vârsta de 20-24 de ani"
            ],
            correctAnswers: ["c) la vârsta de 20-24 de ani"]
        },
        {
            question: "422. Calusul reprezintă:",
            choices: ["a) un ţesut embrionar", "b) ţesut nervos", "c) ţesut osos nou format într-un focar de fractură"],
            correctAnswers: ["c) ţesut osos nou format într-un focar de fractură"]
        },
        {
            question: "423. Fibra musculară striată este:",
            choices: [
                "a) o formaţiune citoplasmică multinucleată de tip sinciţial",
                "b) o celulă uninucleată",
                "c) prezintă striaţii transversale caracteristice"
            ],
            correctAnswers: ["a) o formaţiune citoplasmică multinucleată de tip sinciţial", "c) prezintă striaţii transversale caracteristice"]
        },
        {
            question: "424. Ţesut muscular neted găsim în următoarele structuri:",
            choices: [
                "a) tunica musculară a tubului digestiv subdiafragmatic",
                "b) muşchii extrinseci ai globului ocular",
                "c) muşchii irisului şi corpului ciliar"
            ],
            correctAnswers: ["a) tunica musculară a tubului digestiv subdiafragmatic", "c) muşchii irisului şi corpului ciliar"]
        },
        {
            question: "425. Sarcomerul reprezintă:",
            choices: [
                "a) unitatea structurală şi funcţională a miofibrilelor din fibrele musculare striate şi cardiace",
                "b) o alternanţă de discuri clare şi întunecate",
                "c) unitatea structurală a miofibrilelor din fibrele musculare netede"
            ],
            correctAnswers: ["a) unitatea structurală şi funcţională a miofibrilelor din fibrele musculare striate şi cardiace", "b) o alternanţă de discuri clare şi întunecate"]
        },
        {
            question: "426. Ţesutul muscular cardiac:",
            choices: [
                "a) este o formă particulară de ţesut muscular striat",
                "b) este format din celule multinucleate",
                "c) prezintă striaţii transversale caracteristice fibrelor musculare striate"
            ],
            correctAnswers: ["a) este o formă particulară de ţesut muscular striat", "c) prezintă striaţii transversale caracteristice fibrelor musculare striate"]
        },
        {
            question: "427. Fibrele musculare striate din structura muşchiului sunt aranjate:",
            choices: [
                "a) paralel între ele şi orientate pe direcţia mişcării",
                "b) paralel între ele şi perpendicular pe direcţia mişcării",
                "c) orientate în toate direcţiile"
            ],
            correctAnswers: ["a) paralel între ele şi orientate pe direcţia mişcării"]
        },
        {
            question: "428. Fibrele musculare striate sunt solidarizate printr-o lamă de ţesut conjunctiv lax numită:",
            choices: ["a) perimisium", "b) endomisium", "c) epimisium"],
            correctAnswers: ["b) endomisium"]
        },
        {
            question: "429. Pericarionul reprezintă:",
            choices: [
                "a) o foiţă conjunctivă care înveleşte un nerv",
                "b) corpul celulei nervoase",
                "c) o teacă conjunctivă care înveleşte un cartilaj"
            ],
            correctAnswers: ["b) corpul celulei nervoase"]
        },
        {
            question: "430. Membrana celulară a pericarionului se numeşte:",
            choices: ["a) axoplasmă", "b) axolemă", "c) neurilemă"],
            correctAnswers: ["c) neurilemă"]
        }
    ];

    initQuiz(quizData);
});