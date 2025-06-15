document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        { 
            question: "51. Lichidul cefalorahidian este în cantitate de:", 
            choices: ["140-300 ml", "500 ml", "1500 ml"], 
            correctAnswers: ["140-300 ml"] 
        },
        { 
            question: "52. Nervii cranieni sunt:", 
            choices: ["12 perechi", "31 de perechi", "8 perechi"], 
            correctAnswers: ["12 perechi"] 
        },
        { 
            question: "53. Care din următorii nervi cranieni sunt pur motori:", 
            choices: ["III şi IV", "III, IV şi VII", "VI, XI şi XII"], 
            correctAnswers: ["III şi IV", "VI, XI şi XII"] 
        },
        { 
            question: "54. Nervul trigemen este un nerv:", 
            choices: ["mixt", "motor", "senzitiv"], 
            correctAnswers: ["mixt"] 
        },
        { 
            question: "55. Nervul trigemen are următoarele ramuri:", 
            choices: ["nervul oftalmic şi maxilar", "nervul mandibular", "nervul olfactiv"], 
            correctAnswers: ["nervul oftalmic şi maxilar", "nervul mandibular"] 
        },
        { 
            question: "56. Organele toracelui şi abdomenului primesc fibre parasimpatice din nervul:", 
            choices: ["glosofaringian", "accesor", "vag"], 
            correctAnswers: ["vag"] 
        },
        { 
            question: "57. Neuronii nucleilor supraoptic şi paraventricular secretă:", 
            choices: ["vasopresină", "oxitocină", "somatotropină"], 
            correctAnswers: ["vasopresină", "oxitocină"] 
        },
        { 
            question: "58. Cerebelul:", 
            choices: ["ocupă fosa posterioară a craniului", "este situat posterior de bulb şi punte", "este format doar din substanță cenuşie"], 
            correctAnswers: ["ocupă fosa posterioară a craniului", "este situat posterior de bulb şi punte"] 
        },
        { 
            question: "59. În şanțul bulbo-pontin îşi au originea aparentă nervii cranieni:", 
            choices: ["VI, VII şi VIII", "III, IV şi VI", "IX, X, XI"], 
            correctAnswers: ["VI, VII şi VIII"] 
        },
        { 
            question: "60. Celulele Purkinje din scoarța cerebeloasă:", 
            choices: ["formează stratul intermediar", "au formă piriformă şi sunt dispuse pe 5-6 rânduri", "axonii lor părăsesc scoarța cerebeloasă"], 
            correctAnswers: ["formează stratul intermediar", "axonii lor părăsesc scoarța cerebeloasă"] 
        },
        { 
            question: "61. Corpul calos este format din substanță:", 
            choices: ["albă", "cenuşie", "ambele"], 
            correctAnswers: ["albă"] 
        },
        { 
            question: "62. Mediatorii sistemului nervos vegetativ simpatic sunt:", 
            choices: ["adrenalina şi acetilcolina", "adrenalina şi noradrenalina", "adrenalina, noradrenalina şi acetilcolina"], 
            correctAnswers: ["adrenalina şi noradrenalina"] 
        },
        { 
            question: "63. Stimularea sistemului nervos vegetativ simpatic determină:", 
            choices: ["midriază", "scăderea frecvenței cardiace", "vasodilatație la nivel cerebral"], 
            correctAnswers: ["midriază", "vasodilatație la nivel cerebral"] 
        },
        { 
            question: "64. Stimularea sistemului nervos vegetativ simpatic produce:", 
            choices: ["scăderea peristaltismului intestinal", "bronhodilatație", "creşte debitul urinar"], 
            correctAnswers: ["scăderea peristaltismului intestinal", "bronhodilatație"] 
        },
        { 
            question: "65. Stimularea sistemului nervos vegetativ parasimpatic determină:", 
            choices: ["mioză", "vasodilatație coronariană", "bronhodilatație"], 
            correctAnswers: ["mioză", "vasodilatație coronariană"] 
        },
        { 
            question: "66. Neuronii granulari se găsesc în:", 
            choices: ["scoarța cerebrală", "scoarța cerebeloasă", "în niciuna"], 
            correctAnswers: ["scoarța cerebrală", "scoarța cerebeloasă"] 
        },
        { 
            question: "67. În cordoanele posterioare medulare se află:", 
            choices: ["fasciculele gracilis şi cuneatus", "fascicule de asociație", "fascicule piramidale"], 
            correctAnswers: ["fasciculele gracilis şi cuneatus", "fascicule de asociație"] 
        },
        { 
            question: "68. În cordoanele laterale medulare se află:", 
            choices: ["fascicule de asociație", "fasciculul spino-talamic anterior", "fascicule piramidale şi extrapiramidale"], 
            correctAnswers: ["fascicule de asociație", "fascicule piramidale şi extrapiramidale"] 
        },
        { 
            question: "69. Ventriculii laterali (I şi II) se găsesc în:", 
            choices: ["mezencefal", "emisferele cerebrale", "între trunchiul cerebral şi cerebel"], 
            correctAnswers: ["emisferele cerebrale"] 
        },
        { 
            question: "70. Următoarele structuri aparțin diencefalului:", 
            choices: ["talamus, metatalamus, mezencefal", "talamus, epitalamus, hipotalamus", "metatalamus"], 
            correctAnswers: ["talamus, epitalamus, hipotalamus", "metatalamus"] 
        },
        { 
            question: "71. Prehensiunea se realizează cu ajutorul:", 
            choices: ["membrelor anterioare", "buzelor", "fălcilor"], 
            correctAnswers: ["buzelor", "fălcilor"] 
        },
        { 
            question: "72. Masticaţia:", 
            choices: ["se realizează cu participarea concomitentă a musculaturii buzelor, limbii, obrajilor", "are rol în fragmentarea şi triturarea alimentelor", "are rol în stimularea receptorilor gustativi şi olfactivi"], 
            correctAnswers: ["se realizează cu participarea concomitentă a musculaturii buzelor, limbii, obrajilor", "are rol în fragmentarea şi triturarea alimentelor", "are rol în stimularea receptorilor gustativi şi olfactivi"] 
        },
        { 
            question: "73. Saliva nevertebratelor conţine:", 
            choices: ["amilaza pancreatică", "acid sulfuric", "hirudină"], 
            correctAnswers: ["acid sulfuric", "hirudină"] 
        },
        { 
            question: "74. Rolul digestiv al salivei:", 
            choices: ["degradează amidonul nepreparat", "constă în degradarea peptidelor", "degradează amidonul fiert sau copt până la maltoză"], 
            correctAnswers: ["degradează amidonul fiert sau copt până la maltoză"] 
        },
        { 
            question: "75. HCl este necesar pentru:", 
            choices: ["sinteza unor amilaze", "asigurarea pH-ului optim pentru acţiunea pepsinei", "digestia proteinelor"], 
            correctAnswers: ["asigurarea pH-ului optim pentru acţiunea pepsinei", "digestia proteinelor"] 
        },
        { 
            question: "76. Alegeţi enunţul greşit referitor la enzimele gastrice:", 
            choices: ["labfermentul blochează coagularea laptelui", "lipaza gastrică descompune lipidele emulsionate", "pepsina degradează parţial proteinele"], 
            correctAnswers: ["labfermentul blochează coagularea laptelui"] 
        },
        { 
            question: "77. Stomacul păsărilor:", 
            choices: ["este musculos", "secretă suc gastric", "este glandular"], 
            correctAnswers: ["este musculos", "secretă suc gastric", "este glandular"] 
        },
        { 
            question: "78. Alegeţi enunţul greşit:", 
            choices: ["sucul pancreatic are pH acid", "sucul pancreatic conţine bicarbonat de sodiu", "sucul pancreatic conţine pepsină"], 
            correctAnswers: ["sucul pancreatic are pH acid", "sucul pancreatic conţine pepsină"] 
        },
        { 
            question: "79. Bila are culoare:", 
            choices: ["verde la cobai", "galben-roşiatică la majoritatea carnivorelor", "galben-aurie la ierbivore"], 
            correctAnswers: ["galben-roşiatică la majoritatea carnivorelor"] 
        },
        { 
            question: "80. Alegeţi răspunsul corect:", 
            choices: ["glandele salivare ale moluştelor secretă tiramină", "glandele salivare ale cefalopodelor secretă enterokinază", "saliva amfibienilor conţine mucină"], 
            correctAnswers: ["saliva amfibienilor conţine mucină"] 
        }
    ];
    initQuiz(quizData);
});