document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "431. Dendritele sunt prelungiri neuronale:",
            choices: [
                "a) unice",
                "b) ramificate",
                "c) care conduc influxul nervos centripet"
            ],
            correctAnswers: ["b) ramificate", "c) care conduc influxul nervos centripet"]
        },
        {
            question: "432. Lipofuscina reprezintă:",
            choices: [
                "a) un pigment de uzură prezent în neuroni",
                "b) un material rezidual care se acumulează odată cu vârsta",
                "c) un pigment prezent în celulele adipoase"
            ],
            correctAnswers: ["a) un pigment de uzură prezent în neuroni", "b) un material rezidual care se acumulează odată cu vârsta"]
        },
        {
            question: "433. Celula vegetală este:",
            choices: [
                "a) unitatea structurală a plantelor",
                "b) unitatea funcţională a plantelor",
                "c) unitatea biologică structurală şi funcţională a tuturor plantelor"
            ],
            correctAnswers: ["c) unitatea biologică structurală şi funcţională a tuturor plantelor"]
        },
        {
            question: "434. Celulele parenchimatice au mărimea cuprinsă între:",
            choices: [
                "a) 10 - 50 micrometri",
                "b) 50 - 100 micrometri",
                "c) 10 - 100 micrometri"
            ],
            correctAnswers: ["c) 10 - 100 micrometri"]
        },
        {
            question: "435. Substanţele organice din protoplasmă sunt:",
            choices: [
                "a) protide, lipide, glucide",
                "b) protide, lipide, glucide, vitamine şi fitohormoni",
                "c) lipide, glucide, vitamine şi fitohormoni"
            ],
            correctAnswers: ["b) protide, lipide, glucide, vitamine şi fitohormoni"]
        },
        {
            question: "436. Proprietăţile fiziologice ale protoplasmei sunt:",
            choices: [
                "a) semipermeabilitatea şi absorbţia apei",
                "b) mişcarea şi conducerea substanţelor organice",
                "c) semipermeabilitatea, excitabilitatea şi mişcarea",
                "d) excitabilitatea, mişcarea şi conducerea sevei"
            ],
            correctAnswers: ["c) semipermeabilitatea, excitabilitatea şi mişcarea"]
        },
        {
            question: "437. Reticulul endoplasmatic reprezintă:",
            choices: [
                "a) aparatul circulator al plantei",
                "b) aparatul circulator intracelular",
                "c) conduce seva brută"
            ],
            correctAnswers: ["b) aparatul circulator intracelular"]
        },
        {
            question: "438. Reticulul endoplasmatic este format din:",
            choices: [
                "a) canalicule, vezicule şi cisterne ultramicroscopice",
                "b) canalicule, vezicule şi microtubuli",
                "c) vezicule, cisterne şi cuantozomi"
            ],
            correctAnswers: ["a) canalicule, vezicule şi cisterne ultramicroscopice"]
        },
        {
            question: "439. Dictiozomul este:",
            choices: [
                "a) o formaţiune lamelară cu aspect de cisterne suprapuse",
                "b) o formaţiune lamelară cu aspect de cisterne suprapuse unite prin partea lor centrală",
                "c) o formaţiune lamelară cu aspect de cisterne suprapuse unite prin partea lor centrală, iar marginile rămân libere"
            ],
            correctAnswers: ["c) o formaţiune lamelară cu aspect de cisterne suprapuse unite prin partea lor centrală, iar marginile rămân libere"]
        },
        {
            question: "440. Mitocondria este formată din:",
            choices: [
                "a) membrană dublă şi matrix",
                "b) membrană, stromă şi oxizomi",
                "c) membrană dublă, matrix şi sistemul de criste sau tubuli pe care se găsesc oxizomi"
            ],
            correctAnswers: ["c) membrană dublă, matrix şi sistemul de criste sau tubuli pe care se găsesc oxizomi"]
        },
        {
            question: "441. Ribozomii se găsesc în:",
            choices: [
                "a) citoplasmă, nucleu, condriozomi şi plastide",
                "b) citoplasmă, nucleu şi plastide",
                "c) nucleu, condriozomi şi plastide"
            ],
            correctAnswers: ["a) citoplasmă, nucleu, condriozomi şi plastide"]
        },
        {
            question: "442. Ribozomii au rol în:",
            choices: [
                "a) sinteza glucidelor şi lipidelor",
                "b) sinteza proteinelor",
                "c) sinteza proteinelor şi lipidelor"
            ],
            correctAnswers: ["b) sinteza proteinelor"]
        },
        {
            question: "443. Plastidele se transformă în următoarea succesiune:",
            choices: [
                "a) proplastide-leucoplaste-cloroplaste-cromoplaste",
                "b) proplastide-leucoplaste-cromoplaste-cloroplaste",
                "c) proplastide-cloroplaste-cromoplaste-leucoplaste"
            ],
            correctAnswers: ["a) proplastide-leucoplaste-cloroplaste-cromoplaste"]
        },
        {
            question: "444. Leucoplastele după natura substanţelor depozitate se pot afla sub formă de:",
            choices: [
                "a) amiloplaste, elaioplaste, cromoplaste",
                "b) amiloplaste, elaioplaste, proteoplaste",
                "c) amiloplaste, rodoplaste, cloroplaste"
            ],
            correctAnswers: ["b) amiloplaste, elaioplaste, proteoplaste"]
        },
        {
            question: "445. Cloroplastele prezintă:",
            choices: [
                "a) membrană dublă, stromă şi tilacoide",
                "b) membrană dublă, stromă, stromatilacoide, granatilacoide şi cuantozomi",
                "c) membrană, stromă şi cromatină"
            ],
            correctAnswers: ["a) membrană dublă, stromă şi tilacoide", "b) membrană dublă, stromă, stromatilacoide, granatilacoide şi cuantozomi"]
        },
        {
            question: "446. Cromoplastele conţin:",
            choices: [
                "a) pigmenţi verzi şi galbeni",
                "b) verzi, portocalii şi antocianici",
                "c) galbeni, bruni, roşii şi portocalii din grupa carotenoizilor"
            ],
            correctAnswers: ["c) galbeni, bruni, roşii şi portocalii din grupa carotenoizilor"]
        },
        {
            question: "447. Formarea sferozomilor începe cu:",
            choices: [
                "a) acumularea de substanţe osmeofile în porţiunile terminale ale reticulului endoplasmatic",
                "b) acumularea de substanţe în veziculele golgiene",
                "c) acumularea de substanţe tanante în presferozomi"
            ],
            correctAnswers: ["a) acumularea de substanţe osmeofile în porţiunile terminale ale reticulului endoplasmatic"]
        },
        {
            question: "448. Lizozomii conţin:",
            choices: [
                "a) enzime hidrolitice producând liza unor structuri subcelulare",
                "b) enzimele ciclului Krebs",
                "c) enzimele ciclului glioxilic"
            ],
            correctAnswers: ["a) enzime hidrolitice producând liza unor structuri subcelulare"]
        },
        {
            question: "449. Peroxizomii conţin:",
            choices: [
                "a) peroxidază şi catalază şi au rol în respiraţia celulară",
                "b) peroxidază şi amilază",
                "c) peroxidază şi celulază"
            ],
            correctAnswers: ["a) peroxidază şi catalază şi au rol în respiraţia celulară"]
        },
        {
            question: "450. Microtubulii participă la:",
            choices: [
                "a) transportul veziculelor golgiene",
                "b) formarea structurilor fusoriale cu rol în transportul cromozomilor la polii celulelor",
                "c) transportul microfibrilelor de celuloză la epidermă"
            ],
            correctAnswers: ["a) transportul veziculelor golgiene", "b) formarea structurilor fusoriale cu rol în transportul cromozomilor la polii celulelor"]
        },
        {
            question: "451. Cilii şi flagelii în secţiune transversală prezintă:",
            choices: [
                "a) 9 microtubuli periferici şi 2 microtubuli centrali",
                "b) 9 microtubuli periferici şi 2 perechi de microtubuli centrali",
                "c) 9 perechi de microtubuli periferici şi 2 microtubuli simpli centrali"
            ],
            correctAnswers: ["c) 9 perechi de microtubuli periferici şi 2 microtubuli simpli centrali"]
        },
        {
            question: "452. Centrul celular este alcătuit din:",
            choices: [
                "a) 2 centrioli, centrosferă şi astrosferă",
                "b) centriol, centrozom, centrosferă şi microcentru",
                "c) centriol, centrozom, centrosferă şi astrosferă"
            ],
            correctAnswers: ["c) centriol, centrozom, centrosferă şi astrosferă"]
        },
        {
            question: "453. După rolul fiziologic vacuolele pot fi:",
            choices: [
                "a) digestive, gazoase şi propriu-zise",
                "b) aleuronale, digestive, gazoase şi propriu-zise",
                "c) aleuronale, gazoase şi propriu-zise"
            ],
            correctAnswers: ["b) aleuronale, digestive, gazoase şi propriu-zise"]
        },
        {
            question: "454. Ca structură vacuola propriu-zisă prezintă:",
            choices: [
                "a) tonoplast şi suc celular",
                "b) tonoplast şi citoplasmă",
                "c) plasmalemă şi suc celular"
            ],
            correctAnswers: ["a) tonoplast şi suc celular"]
        },
        {
            question: "455. Tonoplastul este:",
            choices: [
                "a) membrană de tip elementar",
                "b) membrană trilaminată şi conţine proteine şi lipide",
                "c) membrană trilaminată şi conţine celuloză şi lignină"
            ],
            correctAnswers: ["a) membrană de tip elementar", "b) membrană trilaminată şi conţine proteine şi lipide"]
        },
        {
            question: "456. Sucul celular prin compoziţia sa are rol în:",
            choices: [
                "a) plasmoliza celulară",
                "b) turgescenţa celulară",
                "c) liza celulelor"
            ],
            correctAnswers: ["a) plasmoliza celulară", "b) turgescenţa celulară"]
        },
        {
            question: "457. Incluziunile ergastice de natură anorganică sunt reprezentate prin:",
            choices: [
                "a) apă şi săruri minerale",
                "b) sulfat de calciu, carbonat de calciu, dioxid de siliciu",
                "c) sulfat de calciu, carbonat de calciu, dioxid de siliciu şi oxalat de calciu"
            ],
            correctAnswers: ["b) sulfat de calciu, carbonat de calciu, dioxid de siliciu"]
        },
        {
            question: "458. Grăunciorul de amidon se formează în:",
            choices: [
                "a) amiloplaste",
                "b) leucoplaste",
                "c) cromoplaste"
            ],
            correctAnswers: ["a) amiloplaste", "b) leucoplaste"]
        },
        {
            question: "459. Glicogenul este substanţa de rezervă a:",
            choices: [
                "a) bacteriilor şi ferigilor",
                "b) ciupercilor, muşchilor şi mixomicetelor",
                "c) bacteriilor, cianobacteriilor, ciupercilor şi mixomicetelor"
            ],
            correctAnswers: ["c) bacteriilor, cianobacteriilor, ciupercilor şi mixomicetelor"]
        },
        {
            question: "460. Aleurona este o substanţă de natură:",
            choices: [
                "a) proteică",
                "b) lipidică",
                "c) protidică",
                "d) glucidică"
            ],
            correctAnswers: ["a) proteică", "c) protidică"]
        }
    ];

    initQuiz(quizData);
});