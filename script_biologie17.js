document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "551. Echinodermatele se caracterizează prin:",
            choices: ["a) au capul bine individualizat", "b) au simetrie pentaradiară", "c) au mezoglee bine dezvoltată"],
            correctAnswers: ["b) au simetrie pentaradiară"]
        },
        {
            question: "552. Spongilla lacustris este:",
            choices: ["a) un spongier de apă dulce", "b) un spongier marin", "c) un ctenofor abundent în Marea Neagră"],
            correctAnswers: ["a) un spongier de apă dulce"]
        },
        {
            question: "553. Aurelia aurita se încadrează sistematic în:",
            choices: ["a) Cnidaria, Hydrozoa, Siphonophora", "b) Cnidaria, Scyphozoa, Semeostomeae", "c) Cnidaria, Anthozoa, Hexacorallia"],
            correctAnswers: ["b) Cnidaria, Scyphozoa, Semeostomeae"]
        },
        {
            question: "554. Dendrocoelum lacteum se încadrează sistematic în:",
            choices: ["a) Annelida, Polychaeta", "b) Platyhelminthes, Turbellaria", "c) Platyhelminthes, Trematoda"],
            correctAnswers: ["b) Platyhelminthes, Turbellaria"]
        },
        {
            question: "555. Mytilus galloprovincialis se încadrează sistematic în:",
            choices: ["a) Gasteropoda", "b) Cephalopoda", "c) Lamellibranchiata"],
            correctAnswers: ["c) Lamellibranchiata"]
        },
        {
            question: "556. La Anodonta cygnea, dentiţia este de tip:",
            choices: ["a) izodont", "b) heterodont", "c) dentiţia lipseşte"],
            correctAnswers: ["c) dentiţia lipseşte"]
        },
        {
            question: "557. Lumbricus terrestris se numește popular:",
            choices: ["a) limbric", "b) râmă", "c) lipitoare"],
            correctAnswers: ["b) râmă"]
        },
        {
            question: "558. Fasciola hepatica este:",
            choices: ["a) un vierme plat liber", "b) un vierme cilindric parazit la ovine", "c) un vierme plat parazit"],
            correctAnswers: ["c) un vierme plat parazit"]
        },
        {
            question: "559. Peştii au:",
            choices: ["a) solzi epidermici", "b) inimă bicamerală", "c) membre perechi de tip pterigiu"],
            correctAnswers: ["b) inimă bicamerală", "c) membre perechi de tip pterigiu"]
        },
        {
            question: "560. Peşti cartilaginoşi sunt:",
            choices: [
                "a) rândunica de mare (Trigla lucerna), pisica de mare (Dasyatis pastinaca)",
                "b) vulpea de mare (Raja clavata), chimera (Chimaera monstruosa)",
                "c) viza (Acipenser nudiventris), ştiuca osoasă (Lepisosteus oseus)"
            ],
            correctAnswers: ["b) vulpea de mare (Raja clavata), chimera (Chimaera monstruosa)"]
        },
        {
            question: "561. În ord. Cypriniformes intră:",
            choices: ["a) mreana (Barbus barbus)", "b) plătică (Abramis brama)", "c) ştiuca (Esox lucius)"],
            correctAnswers: ["a) mreana (Barbus barbus)", "b) plătică (Abramis brama)"]
        },
        {
            question: "562. Branhiile de tip tabulat se găsesc la:",
            choices: ["a) limba de mare (Solea lascaris)", "b) scorpia de mare (Scorpaena porcus)", "c) vulpea de mare (Raja clavata)"],
            correctAnswers: ["c) vulpea de mare (Raja clavata)"]
        },
        {
            question: "563. Respiră prin plămâni:",
            choices: ["a) dipnoii", "b) ciclostomii", "c) ciprinidele"],
            correctAnswers: ["a) dipnoii"]
        },
        {
            question: "564. Dinţii lipsesc la:",
            choices: ["a) sturioni", "b) tritoni", "c) chelonieni"],
            correctAnswers: ["a) sturioni", "b) tritoni"]
        },
        {
            question: "565. Amfibienii:",
            choices: ["a) sunt legaţi de mediul acvatic", "b) au respiraţie exclusiv pulmonară", "c) au cutie toracică"],
            correctAnswers: ["a) sunt legaţi de mediul acvatic"]
        },
        {
            question: "566. Tritonul este:",
            choices: ["a) lacertilian", "b) urodel", "c) rhincocefal"],
            correctAnswers: ["b) urodel"]
        },
        {
            question: "567. Reptilele au:",
            choices: ["a) tegumentul umed şi bogat vascularizat", "b) amnios şi alantoidă", "c) fecundaţie externă"],
            correctAnswers: ["b) amnios şi alantoidă"]
        },
        {
            question: "568. Din chelonieni face parte:",
            choices: ["a) guşterul (Lacerta viridis)", "b) caimanul (Caiman latirostris)", "c) caretul (Eretmochelis imbricata)"],
            correctAnswers: ["c) caretul (Eretmochelis imbricata)"]
        },
        {
            question: "569. La crocodili apare:",
            choices: ["a) inima tetracamerală", "b) bolta palatină secundară", "c) stomac tricameral"],
            correctAnswers: ["a) inima tetracamerală", "b) bolta palatină secundară"]
        },
        {
            question: "570. Glande cu venin au următoarele grupe de reptile:",
            choices: ["a) helodermatide", "b) boide", "c) viperide"],
            correctAnswers: ["a) helodermatide", "c) viperide"]
        },
        {
            question: "571. Elementele chiridiului în ordine sunt:",
            choices: ["a) zeugopod, stilopod, autopod", "b) stilopod, zeugopod, autopod", "c) stilopod, autopod, zeugopod"],
            correctAnswers: ["b) stilopod, zeugopod, autopod"]
        },
        {
            question: "572. Ciocănitorile se încadrează în:",
            choices: ["a) Ord. Coraciiformes", "b) Ord. Piciformes", "c) Ord. Apodiformes"],
            correctAnswers: ["b) Ord. Piciformes"]
        },
        {
            question: "573. Lopătarul (Platalea leucorodia) este:",
            choices: ["a) specie acvatică", "b) specie de pădure şi tufişuri", "c) Monument al Naturii"],
            correctAnswers: ["a) specie acvatică", "c) Monument al Naturii"]
        },
        {
            question: "574. Din ordinul Passeriformes fac parte:",
            choices: [
                "a) pupăza (Upupa epops), rândunica (Hirundo rustica), porumbelul domestic (Columba livia domestica)",
                "b) vrabia de câmp (Passer montanus), dumbrăveanca (Coracias garrulus), mierla (Turdus merula)",
                "c) corbul (Corvus corax), sticletele (Carduelis carduelis), ciocârlia (Alauda arvensis)"
            ],
            correctAnswers: ["c) corbul (Corvus corax), sticletele (Carduelis carduelis), ciocârlia (Alauda arvensis)"]
        },
        {
            question: "575. Plămânii sunt de tip parenchimatos tubular la:",
            choices: ["a) şopârle", "b) tritoni", "c) struţi"],
            correctAnswers: ["c) struţi"]
        },
        {
            question: "576. Organul fonator la păsări este:",
            choices: ["a) laringele", "b) sirinxul", "c) laringele şi sirinxul"],
            correctAnswers: ["b) sirinxul"]
        },
        {
            question: "577. Cârja aortică este îndreptată spre dreapta la:",
            choices: ["a) păsări", "b) reptile", "c) amfibieni"],
            correctAnswers: ["a) păsări"]
        },
        {
            question: "578. Circulaţia este închisă, dublă, incompletă la:",
            choices: ["a) şopârle", "b) teleostei", "c) stârci"],
            correctAnswers: ["a) şopârle"]
        },
        {
            question: "579. Canalul Wolff este conduct uro-spermatic la:",
            choices: ["a) sturioni", "b) urodele", "c) crocodili"],
            correctAnswers: ["a) sturioni", "b) urodele"]
        },
        {
            question: "580. Femela de cuc (Cuculus canorus)",
            choices: ["a) cloceşte până în 10 ouă", "b) cloceşte 8-18 ouă", "c) nu cloceşte niciun ou"],
            correctAnswers: ["c) nu cloceşte niciun ou"]
        },
        {
            question: "581. La monotreme circulaţia este:",
            choices: ["a) închisă, simplă, completă", "b) închisă, dublă, completă", "c) închisă, dublă incompletă"],
            correctAnswers: ["a) închisă, simplă, completă", "b) închisă, dublă, completă"]
        },
        {
            question: "582. Din ventriculul drept la mamifere pleacă sânge încărcat cu:",
            choices: ["a) CO2 prin cârja aortică stângă", "b) CO2 prin venele cave", "c) CO2 prin artera pulmonară"],
            correctAnswers: ["c) CO2 prin artera pulmonară"]
        },
        {
            question: "583. Aparţin pinipedelor:",
            choices: ["a) delfinii", "b) dugongii", "c) otariile"],
            correctAnswers: ["c) otariile"]
        },
        {
            question: "584. Chiropterele:",
            choices: ["a) planează de la un arbore la altul", "b) recepţionează sunetele cu tragus", "c) hibernează"],
            correctAnswers: ["b) recepţionează sunetele cu tragus", "c) hibernează"]
        },
        {
            question: "585. Cârtiţa (Talpa europaea):",
            choices: ["a) se deplasează prin târâre", "b) este un mamifer subteran", "c) nu are ochi"],
            correctAnswers: ["b) este un mamifer subteran"]
        },
        {
            question: "586. Mamifere digitigrade sunt:",
            choices: ["a) hienidele", "b) ursidele", "c) tapiridele"],
            correctAnswers: ["a) hienidele"]
        },
        {
            question: "587. Mamifere paracopitate sunt:",
            choices: ["a) rinocerotidele", "b) proboscidienii", "c) cervidele"],
            correctAnswers: ["b) proboscidienii"]
        },
        {
            question: "588. Proboscidienii (elefanţii) au regim de hrană:",
            choices: ["a) vegetarian", "b) carnivor", "c) vegetarian şi carnivor"],
            correctAnswers: ["a) vegetarian"]
        },
        {
            question: "589. Fildeşii elefanţilor sunt daţi de:",
            choices: ["a) incisivi", "b) canini", "c) măsele"],
            correctAnswers: ["a) incisivi"]
        },
        {
            question: "590. Ferigile sunt plante:",
            choices: ["a) haplobionte", "b) diplobionte", "c) haplo-diplobionte"],
            correctAnswers: ["b) diplobionte"]
        },
        {
            question: "591. La ferigi întâlnim:",
            choices: ["a) trofofile", "b) sporofile", "c) atât trofofile cât şi sporofile"],
            correctAnswers: ["c) atât trofofile cât şi sporofile"]
        },
        {
            question: "592. La Polypodium vulgare avem:",
            choices: ["a) trofofile", "b) trofo-sporofile", "c) sporofile"],
            correctAnswers: ["b) trofo-sporofile"]
        },
        {
            question: "593. La Equisetum telmateia întâlnim:",
            choices: ["a) tulpini aeriene", "b) atât tulpini aeriene cât şi subterane", "c) numai tulpini aeriene"],
            correctAnswers: ["b) atât tulpini aeriene cât şi subterane"]
        },
        {
            question: "594. Speciile de Lycopodium sunt prezente:",
            choices: ["a) numai la câmpie", "b) numai la munte", "c) atât la câmpie cât şi la munte"],
            correctAnswers: ["b) numai la munte"]
        },
        {
            question: "595. Spermatofitele sunt:",
            choices: ["a) plante fără flori", "b) plante cu flori şi seminţe", "c) plante lemnoase, frutescente şi ierboase"],
            correctAnswers: ["b) plante cu flori şi seminţe", "c) plante lemnoase, frutescente şi ierboase"]
        },
        {
            question: "596. Coniferele sunt:",
            choices: ["a) plante cu flori şi seminţe", "b) plante cu fructe", "c) plante vasculare"],
            correctAnswers: ["a) plante cu flori şi seminţe", "c) plante vasculare"]
        },
        {
            question: "597. Gimnospermele au reprezentanţi cu:",
            choices: ["a) frunze caduce", "b) frunze sempervirescente", "c) atât cu frunze caduce cât şi cu frunze sempervirescente"],
            correctAnswers: ["c) atât cu frunze caduce cât şi cu frunze sempervirescente"]
        },
        {
            question: "598. Dubla fecundaţie este caracteristică:",
            choices: ["a) gimnospermelor (pinofitinelor)", "b) angiospermelor (magnoliofitinelor)", "c) ambelor grupe de organisme"],
            correctAnswers: ["b) angiospermelor (magnoliofitinelor)"]
        },
        {
            question: "599. Angiospermele au:",
            choices: ["a) sămânţa liberă", "b) un corm tipic", "c) fruct şi sămânţă"],
            correctAnswers: ["b) un corm tipic", "c) fruct şi sămânţă"]
        }
    ];

    initQuiz(quizData);
});