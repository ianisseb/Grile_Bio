document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "461. Inulina este formată din numeroase molecule de:",
            choices: ["a) fructoză", "b) glucoză", "c) zaharoză"],
            correctAnswers: ["a) fructoză"]
        },
        {
            question: "462. Uleiurile eterice sunt amestecuri de:",
            choices: [
                "a) hidrocarburi terpenice şi glucide",
                "b) alcooli, aldehide şi protide",
                "c) hidrocarburi terpenice, alcooli, aldehide ş.a."
            ],
            correctAnswers: ["c) hidrocarburi terpenice, alcooli, aldehide ş.a."]
        },
        {
            question: "463. Nucleul este prezent la:",
            choices: ["a) procariote şi eucariote", "b) procariote", "c) eucariote"],
            correctAnswers: ["c) eucariote"]
        },
        {
            question: "464. Ca structură nucleul prezintă:",
            choices: ["a) membrană, carioplasmă, nucleol", "b) anvelopă, cariolimfă, nucleol", "c) membrană, citoplasmă, organite"],
            correctAnswers: ["a) membrană, carioplasmă, nucleol", "b) anvelopă, cariolimfă, nucleol"]
        },
        {
            question: "465. Peretele celular se formează la sfârşitul diviziunii celulare şi trece prin trei stadii:",
            choices: ["a) primar şi secundar", "b) primordial, primar şi secundar", "c) primordial, primar, secundar şi terţiar"],
            correctAnswers: ["b) primordial, primar şi secundar"]
        },
        {
            question: "466. Peretele secundar respectă:",
            choices: ["a) porii (punctuaţiunile) peretelui primar", "b) porii (punctuaţiunile) peretelui primordial", "c) porii (punctuaţiunile) peretelui terţiar"],
            correctAnswers: ["a) porii (punctuaţiunile) peretelui primar"]
        },
        {
            question: "467. Creşterea în suprafaţă a peretelui celular se face prin:",
            choices: ["a) întindere şi apoziţie", "b) intussuscepţiune", "c) întindere şi intussuscepţiune"],
            correctAnswers: ["c) întindere şi intussuscepţiune"]
        },
        {
            question: "468. Creşterea în grosime a peretelui celular se face prin:",
            choices: ["a) întindere", "b) depunere de micele noi printre cele vechi", "c) apoziţie şi mai puţin prin intussuscepţiune"],
            correctAnswers: ["c) apoziţie şi mai puţin prin intussuscepţiune"]
        },
        {
            question: "469. Plasmodesmele sunt legături protoplasmatice între:",
            choices: ["a) celulele vii ale unui ţesut", "b) celulele vii şi mediul extern", "c) celulele vii şi mediul intern"],
            correctAnswers: ["a) celulele vii ale unui ţesut", "b) celulele vii şi mediul extern"]
        },
        {
            question: "470. Cerificarea constă în:",
            choices: ["a) acoperirea pereţilor externi ai celulelor epidermice cu ceară", "b) acoperirea pereţilor celulari cu ceară", "c) impregnarea pereţilor celulari cu ceară"],
            correctAnswers: ["a) acoperirea pereţilor externi ai celulelor epidermice cu ceară"]
        },
        {
            question: "471. Mineralizarea constă în:",
            choices: [
                "a) încrustarea peretelui celular cu dioxid de siliciu şi carbonat de calciu",
                "b) depunerea substanţelor minerale la exteriorul epidermei",
                "c) depunerea substanţelor minerale în toţi pereţii celulari"
            ],
            correctAnswers: ["a) încrustarea peretelui celular cu dioxid de siliciu şi carbonat de calciu"]
        },
        {
            question: "472. Suberificarea constă în:",
            choices: [
                "a) impregnarea pereţilor celulari cu suberină",
                "b) impregnarea pereţilor celulari cu suberină şi ceară",
                "c) impregnarea pereţilor celulari cu suberină şi cutină"
            ],
            correctAnswers: ["a) impregnarea pereţilor celulari cu suberină"]
        },
        {
            question: "473. Spaţiile intercelulare se pot forma pe cale:",
            choices: [
                "a) schizogenă, lizigenă şi rexigenă",
                "b) schizogenă, lizigenă şi îndepărtarea lamelelor mijlocii",
                "c) lizigenă, rexigenă şi topirea pereţilor celulari"
            ],
            correctAnswers: ["a) schizogenă, lizigenă şi rexigenă"]
        },
        {
            question: "474. Amitoza se realizează prin:",
            choices: [
                "a) strangulare, înmugurire, clivare şi fragmentarea masei nucleare",
                "b) gâtuire, despicare şi ruperea celulelor",
                "c) clivare, fragmentarea masei nucleare şi dispariţia pereţilor celulari"
            ],
            correctAnswers: ["a) strangulare, înmugurire, clivare şi fragmentarea masei nucleare"]
        },
        {
            question: "475. Mitoza prezintă o interfază care parcurge următoarele perioade:",
            choices: [
                "a) presintetică, sintetică şi de acumulare",
                "b) presintetică, sintetică, postsintetică şi de dispersie",
                "c) presintetică, sintetică şi postsintetică"
            ],
            correctAnswers: ["c) presintetică, sintetică şi postsintetică"]
        },
        {
            question: "476. Diviziunea mitotică propriu-zisă parcurge următoarele faze:",
            choices: [
                "a) profaza, metafaza, anafaza şi citofaza",
                "b) profaza, metafaza, interfaza şi telofaza",
                "c) profaza, metafaza, anafaza şi telofaza"
            ],
            correctAnswers: ["c) profaza, metafaza, anafaza şi telofaza"]
        },
        {
            question: "477. Citochineza începe la:",
            choices: ["a) sfârşitul interfazei", "b) sfârşitul anafazei", "c) sfârşitul telofazei"],
            correctAnswers: ["c) sfârşitul telofazei"]
        },
        {
            question: "478. Meioza se întâlneşte la:",
            choices: [
                "a) celulele mamă ale gameţilor şi celulele mamă ale sporilor haploizi",
                "b) celulele somatice",
                "c) celulele care au mai mulţi nuclei"
            ],
            correctAnswers: ["a) celulele mamă ale gameţilor şi celulele mamă ale sporilor haploizi"]
        },
        {
            question: "479. Meioza primară are ca rezultat:",
            choices: [
                "a) formarea a două celule haploide",
                "b) formarea a două celule diploide",
                "c) formarea unei celule cu mai mulţi nuclei"
            ],
            correctAnswers: ["a) formarea a două celule haploide"]
        },
        {
            question: "480. Meioza secundară are ca rezultat:",
            choices: [
                "a) formarea a patru celule haploide",
                "b) formarea a doi gameţi bărbăteşti şi doi femeieşti",
                "c) formarea a patru spori haploizi"
            ],
            correctAnswers: ["a) formarea a patru celule haploide", "c) formarea a patru spori haploizi"]
        },
        {
            question: "481. Celula procariotă prezintă:",
            choices: [
                "a) perete celular, citoplasmă şi nucleu",
                "b) perete celular, citoplasmă şi mai mulţi cromozomi",
                "c) perete celular, citoplasmă şi nucleoid (material nuclear)"
            ],
            correctAnswers: ["c) perete celular, citoplasmă şi nucleoid (material nuclear)"]
        },
        {
            question: "482. În citoplasma celulei procariote găsim următoarele organite:",
            choices: ["a) dictiozomi şi plastide", "b) reticul endoplasmatic şi centru celular", "c) ribozomi"],
            correctAnswers: ["c) ribozomi"]
        },
        {
            question: "483. Ţesutul vegetal este:",
            choices: [
                "a) o grupare de celule asemănătoare care au aceeaşi funcţie",
                "b) o grupare permanentă de celule care au aceeaşi origine, formă şi structură",
                "c) o grupare permanentă de celule care au aceeaşi origine, formă, structură şi îndeplinesc aceeaşi funcţie"
            ],
            correctAnswers: ["c) o grupare permanentă de celule care au aceeaşi origine, formă, structură şi îndeplinesc aceeaşi funcţie"]
        },
        {
            question: "484. După poziţia pe care o ocupă în corpul plantei, meristemele pot fi:",
            choices: ["a) apicale, intercalare şi descendente", "b) apicale şi laterale", "c) apicale, intercalare şi laterale"],
            correctAnswers: ["c) apicale, intercalare şi laterale"]
        },
        {
            question: "485. Vârful vegetativ meristematic cu o singură celulă apicală, poate prezenta celula sub următoarele forme:",
            choices: [
                "a) mamelon, bifacială, piramidală trifacială, trilaterală, tetralaterală",
                "b) bifacială, trifacială, trilaterală, tetralaterală",
                "c) mamelon, bifacială, piramidală trifacială, trilaterală prismatică, tetralaterală, pentalaterală"
            ],
            correctAnswers: ["c) mamelon, bifacială, piramidală trifacială, trilaterală prismatică, tetralaterală, pentalaterală"]
        },
        {
            question: "486. Vârful vegetativ meristematic al rădăcinii prezintă următoarele tipuri structurale:",
            choices: [
                "a) vârf vegetativ cu o singură iniţială tetraedrică",
                "b) vârf vegetativ cu două grupuri de iniţiale şi vârf vegetativ cu trei straturi de iniţiale",
                "c) vârf vegetativ cu o singură iniţială tetraedrică, vârf vegetativ cu două grupuri de iniţiale şi vârf vegetativ cu trei straturi de iniţiale"
            ],
            correctAnswers: ["c) vârf vegetativ cu o singură iniţială tetraedrică, vârf vegetativ cu două grupuri de iniţiale şi vârf vegetativ cu trei straturi de iniţiale"]
        },
        {
            question: "487. După structura vârfului vegetativ meristematic la Gymnospermae se deosebesc trei tipuri principale:",
            choices: [
                "a) Cycas, Ginkgo şi Taxus",
                "b) Ginkgo, Criptomeria şi Picea",
                "c) Cycas, Ginkgo şi Criptomeria -Abies"
            ],
            correctAnswers: ["a) Cycas, Ginkgo şi Taxus"]
        },
        {
            question: "488. Vârful vegetativ meristematic la Angiospermae în secţiune longitudinală prin apexul caulinar prezintă următoarele zone:",
            choices: [
                "a) apical - axială şi subapical - axială",
                "b) laterală şi subapical -axială",
                "c) apical - axială, laterale şi subapical - axială"
            ],
            correctAnswers: ["c) apical - axială, laterale şi subapical - axială"]
        },
        {
            question: "489. Meristemele primordiale ale rădăcinii după Hanstein sunt:",
            choices: [
                "a) dermatogenul, periblemul şi pleromul",
                "b) dermatogenul, periblemul şi tunica",
                "c) periblemul, pleromul şi corpusul"
            ],
            correctAnswers: ["a) dermatogenul, periblemul şi pleromul"]
        }
    ];

    initQuiz(quizData);
});