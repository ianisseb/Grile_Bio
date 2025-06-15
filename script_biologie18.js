document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        { 
            question: "81. Saliva mamiferelor:", 
            choices: ["conţine lipază", "este secretată lent şi continuu la om", "este secretată discontinuu la câine"], 
            correctAnswers: ["este secretată lent şi continuu la om", "este secretată discontinuu la câine"] 
        },
        { 
            question: "82. Alegeţi răspunsul greşit:", 
            choices: ["cantitatea de fecale eliminată zilnic de cal este de 1-3 Kg", "alimentaţia vegetariană furnizează o cantitate mare de materii fecale din cauza conţinutului de glucoză", "alimentaţia cu carne produce o cantitate mai mare de fecale decât alimentaţia vegetariană"], 
            correctAnswers: ["cantitatea de fecale eliminată zilnic de cal este de 1-3 Kg", "alimentaţia vegetariană furnizează o cantitate mare de materii fecale din cauza conţinutului de glucoză", "alimentaţia cu carne produce o cantitate mai mare de fecale decât alimentaţia vegetariană"] 
        },
        { 
            question: "83. Defecaţia implică:", 
            choices: ["eliminarea materiilor fecale din intestinul subţire", "intensificarea secreţiei de suc intestinal", "mişcări în masă, care propulsează fecalele în rect"], 
            correctAnswers: ["mişcări în masă, care propulsează fecalele în rect"] 
        },
        { 
            question: "84. Alege răspunsul corect:", 
            choices: ["unele animale sunt lipsite de vezică biliară", "ca aspect, bila hepatică este asemănătoare cu bila cistică", "bila cistică conţine mai puţină apă şi mai mult reziduu uscat decât bila hepatică"], 
            correctAnswers: ["unele animale sunt lipsite de vezică biliară", "bila cistică conţine mai puţină apă şi mai mult reziduu uscat decât bila hepatică"] 
        },
        { 
            question: "85. Care din enunţurile de mai jos sunt false?", 
            choices: ["saliva are acţiune antibacteriană prin lizozim", "bila conţine enzime", "secreţia pancreatică se varsă în duoden"], 
            correctAnswers: ["bila conţine enzime"] 
        },
        { 
            question: "86. În compoziţia bilei intră:", 
            choices: ["lecitină", "colecistochinină", "colesterol"], 
            correctAnswers: ["lecitină", "colesterol"] 
        },
        { 
            question: "87. Enzimele pancreatice sunt:", 
            choices: ["amilopsina", "ptialina", "amilaza pancreatică"], 
            correctAnswers: ["amilopsina", "amilaza pancreatică"] 
        },
        { 
            question: "88. Enzimele gastrice:", 
            choices: ["desfăşoară activitate secundară în procesul de digestie, cu excepţia pepsinei", "sunt numai de natură glucidică", "sunt numai de natură proteică"], 
            correctAnswers: ["desfăşoară activitate secundară în procesul de digestie, cu excepţia pepsinei"] 
        },
        { 
            question: "89. Care din următoarele afirmaţii sunt corecte?", 
            choices: ["sistemul endocrin al nevertebratelor atinge dezvoltarea maximă la cefalopode", "corpora cardiaca reprezintă organul neurohemal al protozoarelor", "organele pericardice sunt organe neurohemale ale crustaceilor"], 
            correctAnswers: ["sistemul endocrin al nevertebratelor atinge dezvoltarea maximă la cefalopode", "organele pericardice sunt organe neurohemale ale crustaceilor"] 
        },
        { 
            question: "90. Hormonii nevertebratelor cuprind:", 
            choices: ["hormoni de năpârlire şi metamorfoză", "hormoni sexuali", "hormoni hipofizari"], 
            correctAnswers: ["hormoni de năpârlire şi metamorfoză", "hormoni sexuali"] 
        },
        { 
            question: "91. În procesul de năpârlire şi metamorfoză la insecte intervin următorii hormoni:", 
            choices: ["hormonul neotenin", "hormonul cerebral", "hormonul cromatic"], 
            correctAnswers: ["hormonul neotenin", "hormonul cerebral"] 
        },
        { 
            question: "92. Precizaţi afirmaţiile greşite:", 
            choices: ["extirparea glandei sinusale la crustacei încetineşte năpârlirea", "năpârlirea este influenţată de salinitate", "năpârlirea este influenţată de presiunea mediului intern"], 
            correctAnswers: ["extirparea glandei sinusale la crustacei încetineşte năpârlirea"] 
        },
        { 
            question: "93. Care din următoarele afirmaţii sunt adevărate?", 
            choices: ["la crustacei, glanda sinusală secretă hormonul timic care excită ochii animalului", "la cefalopode, glanda salivară secretă un hormon cu acţiune dilatatoare asupra cromatoforilor", "la polichete s-a evidenţiat un hormon gonadoinhibitor central"], 
            correctAnswers: ["la cefalopode, glanda salivară secretă un hormon cu acţiune dilatatoare asupra cromatoforilor", "la polichete s-a evidenţiat un hormon gonadoinhibitor central"] 
        },
        { 
            question: "94. Precizaţi enunţurile greşite:", 
            choices: ["nemerţienii prezintă hormon gonadoinhibitor central", "glanda oftalmică la cefalopode secretă un hormon gonadotrop", "insectele nu prezintă hormoni gonadotropi"], 
            correctAnswers: ["insectele nu prezintă hormoni gonadotropi"] 
        },
        { 
            question: "95. Care dintre următorii hormoni stimulează creşterea?", 
            choices: ["hormonii tiroidieni", "glucocorticoizii", "hormonul somatotrop"], 
            correctAnswers: ["hormonii tiroidieni", "hormonul somatotrop"] 
        },
        { 
            question: "96. În cazul nanismului hipofizar:", 
            choices: ["dezvoltarea psihică este redusă", "apare hipersecreţie de hormon somatotrop", "indivizii au talie mică, dar sunt proporţional dezvoltaţi"], 
            correctAnswers: ["indivizii au talie mică, dar sunt proporţional dezvoltaţi"] 
        },
        { 
            question: "97. Creşterea somatică poate fi afectată în cazul:", 
            choices: ["hiposecreţiei de hormon somatotrop", "hipofuncţiei tiroidiene", "hiperfuncţiei tiroidiene"], 
            correctAnswers: ["hiposecreţiei de hormon somatotrop", "hipofuncţiei tiroidiene"] 
        },
        { 
            question: "98. Absenţa iodului din alimentaţie afectează funcţia:", 
            choices: ["paratiroidelor", "tiroidei", "adenohipofizei"], 
            correctAnswers: ["tiroidei"] 
        },
        { 
            question: "99. Lipsa iodului din alimentaţie determină:", 
            choices: ["guşă endemică", "insuficienţă tiroidiană", "boala Basedow-Graves"], 
            correctAnswers: ["guşă endemică", "insuficienţă tiroidiană"] 
        },
        { 
            question: "100. Diabetul zaharat:", 
            choices: ["este însoţit de eliminarea glucozei în urină", "se poate declanşa prin lezarea neurohipofizei", "se caracterizează prin hiperinsulinemie"], 
            correctAnswers: ["este însoţit de eliminarea glucozei în urină"] 
        },
        { 
                  question: "101. Boala Basedow-Graves:", 
                    choices: ["este sinonimă cu „guşa exoftalmică\"", "produce creştere în greutate", "determină stimularea anabolismului"], 
                    correctAnswers: ["este sinonimă cu „guşa exoftalmică\""] 
                },
                { 
                    question: "102. Simptomele mixedemului sunt:", 
                    choices: ["scăderea ponderală", "senzaţie permanentă de frig", "hipersudoraţie"], 
                    correctAnswers: ["senzaţie permanentă de frig"] 
                },
                { 
                    question: "103. Care din următori hormoni sunt secretaţi în afara glandelor endocrine?", 
                    choices: ["calcitonina", "eritropoietina", "gastrina"], 
                    correctAnswers: ["eritropoietina", "gastrina"] 
                },
                { 
                    question: "104. Care dintre următoarele organe nu secretă hormoni?", 
                    choices: ["testiculul", "stomacul", "ficatul"], 
                    correctAnswers: ["ficatul"] 
                },
                { 
                    question: "105. Care dintre următorii hormoni ating un vârf al secreţiei în organismul matern în preajma naşterii?", 
                    choices: ["tiroxina", "ocitonina", "prolactina"], 
                    correctAnswers: ["ocitonina", "prolactina"] 
                },
                { 
                    question: "106. Cea mai voluminoasă glandă endocrină secretă:", 
                    choices: ["tiroxina", "aldosteronul", "parathormonul"], 
                    correctAnswers: ["tiroxina"] 
                },
                { 
                    question: "107. Care din următoarele enunţuri referitoare la sângele nevertebratelor sunt corecte?", 
                    choices: ["hidrolimfa prezintă aproximativ aceeaşi compoziţie ca şi mediul extern în care trăiesc animalele", "hidrolimfa îndeplineşte rolul de hrănire a organismului", "hidrolimfa îndeplineşte rolul de epurare a organismului"], 
                    correctAnswers: ["hidrolimfa prezintă aproximativ aceeaşi compoziţie ca şi mediul extern în care trăiesc animalele", "hidrolimfa îndeplineşte rolul de hrănire a organismului", "hidrolimfa îndeplineşte rolul de epurare a organismului"] 
                },
                { 
                    question: "108. Care din următoarele afirmaţii sunt corecte?", 
                    choices: ["hidrolimfa devine hemolimfă odată cu apariţia cavităţilor celomice", "hemolimfa conţine o cantitate mai mare de apă şi mai mică de substanţe minerale şi organice", "hemolimfa vine în contact direct cu celulele corpului în anumite porţiuni ale organismului"], 
                    correctAnswers: ["hidrolimfa devine hemolimfă odată cu apariţia cavităţilor celomice", "hemolimfa vine în contact direct cu celulele corpului în anumite porţiuni ale organismului"] 
                },
                { 
                    question: "109. La vertebratele inferioare, globulele roşii sunt:", 
                    choices: ["nucleate", "anucleate", "de forma unui disc biconcav"], 
                    correctAnswers: ["nucleate"] 
                },
                { 
                    question: "110. Peştii au:", 
                    choices: ["solzi epidermici", "inimă bicamerală", "membre perechi de tip pterigiu"], 
                    correctAnswers: ["inimă bicamerală", "membre perechi de tip pterigiu"] 
                },
                { 
                    question: "111. Solzii ctenoizi conțin:", 
                    choices: ["strat de spongină și izopedină", "strat de guanină și izopedină", "strat de izopedină"], 
                    correctAnswers: ["strat de izopedină"] 
                },
                { 
                    question: "112. Corp nud au:", 
                    choices: ["pisica de mare (Dasyatis pastinaca) și somnul (Silurus glanis)", "somul (Silurus glanis) și mihalțul (Lota lota)", "mihalțul (Lota lota) și corosbina (Parablennius sanguinolentus)"], 
                    correctAnswers: ["pisica de mare (Dasyatis pastinaca) și somnul (Silurus glanis)"] 
                },
                { 
                    question: "113. Ventrale jugulare se întâlnesc la:", 
                    choices: ["corosbina (Parablenius sanguinolentus)", "calcan (Scophthalmus maximus)", "dracul de mare (Trachinus draco)", "pălămida (Sarda sarda)"], 
                    correctAnswers: ["corosbina (Parablenius sanguinolentus)", "calcan (Scophthalmus maximus)", "dracul de mare (Trachinus draco)"] 
                },
                { 
                    question: "114. Branhiile de tip pectinat se găsesc la:", 
                    choices: ["limba de mare (Solea lascaris)", "vulpea de mare (Raja clavata)", "rândunica de mare (Chelidonichthys lucerna)"], 
                    correctAnswers: ["limba de mare (Solea lascaris)", "rândunica de mare (Chelidonichthys lucerna)"] 
                },
                { 
                    question: "115. Respiră prin plămâni:", 
                    choices: ["dipnoii", "ciclostomii", "ciprinidele", "holostei"], 
                    correctAnswers: ["dipnoii"] 
                },
                { 
                    question: "116. După locul de reproducere păstrăvul de munte (Salmo trutta fario) este specie:", 
                    choices: ["litofilă", "psamofilă", "fitofilă"], 
                    correctAnswers: ["psamofilă"] 
                },
                { 
                    question: "117. La Gasterosteus aculeatus se practică:", 
                    choices: ["reținerea icrelor într-o pungă incubatoare", "ginogeneza", "construcția de cuiburi din plante acvatice"], 
                    correctAnswers: ["construcția de cuiburi din plante acvatice"] 
                },
                { 
                    question: "118. Specie senestră este:", 
                    choices: ["limba de mare (Solea lascaris)", "calcanul (Scophthalmus maximus)", "cambula (Platichthys flesus)"], 
                    correctAnswers: ["calcanul (Scophthalmus maximus)"] 
                },
                { 
                    question: "119. Peşti cartilaginoşi sunt:", 
                    choices: ["rândunica de mare (Chelidonichthys lucerna), pisica de mare (Dasyatis pastinaca)", "vulpea de mare (Raja clavata), chimera (Chimaera monstruosa)", "viza (Acipenser nudiventris), ştiuca osoasă (Lepisosteus oseus)"], 
                    correctAnswers: ["vulpea de mare (Raja clavata), chimera (Chimaera monstruosa)"] 
                },
                { 
                    question: "120. În Ord.Perciformes intră:", 
                    choices: ["stavrid (Trachurus mediterraneus)", "strunghil (Neogobius melanostomus)", "şprot (Sprattus sprattus)"], 
                    correctAnswers: ["stavrid (Trachurus mediterraneus)", "strunghil (Neogobius melanostomus)"] 
                }
            ];
            initQuiz(quizData);
        });