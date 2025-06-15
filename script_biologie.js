document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "1. Ovulația este un proces care are loc:",
            choices: ["în zilele 14-16 ale ciclului menstrual", "obligatoriu la fiecare ciclu menstrual", "spontan sau indus medicamentos"],
            correctAnswers: ["în zilele 14-16 ale ciclului menstrual", "spontan sau indus medicamentos"]
        },
        {
            question: "2. Foliculul ovarian poate ajunge la ovulație la dimensiuni maxime de:",
            choices: ["10-12 mm", "25-30 mm", "50 mm"],
            correctAnswers: ["25-30 mm"]
        },
        {
            question: "3. Numărul minim de spermatozoizi pe ml de spermă este de:",
            choices: ["20 milioane", "350.000", "5 milioane"],
            correctAnswers: ["20 milioane"]
        },
        {
            question: "4. Menarha reprezintă:",
            choices: ["apariția primei menstruații", "apariția părului pubian", "apariția sânilor"],
            correctAnswers: ["apariția primei menstruații"]
        },
        {
            question: "5. Durata medie normală a unui ciclu menstrual este de:",
            choices: ["21 zile", "35 zile", "28-30 zile"],
            correctAnswers: ["28-30 zile"]
        },
        {
            question: "6. Tunica mucoasă a uterului se numeşte:",
            choices: ["perimetru", "endometru", "miometru"],
            correctAnswers: ["endometru"]
        },
        {
            question: "7. Miometrul este format din:",
            choices: ["fibre musculare netede", "fibre musculare striate", "ambele tipuri"],
            correctAnswers: ["fibre musculare netede"]
        },
        {
            question: "8. Fecundația are loc:",
            choices: ["în cavitatea uterină", "în trompă", "în vagin"],
            correctAnswers: ["în trompă"]
        },
        {
            question: "9. Hormonii gonadotropi sunt reprezentați de:",
            choices: ["TSH (tirostimulina) şi FSH (foliculostimulant)", "FSH şi LH (luteinizant)", "TSH şi STH (somatotrop)"],
            correctAnswers: ["FSH şi LH (luteinizant)"]
        },
        {
            question: "10. Faza preovulatorie a ciclului menstrual endometrial se află sub influență hormonală predominant:",
            choices: ["estrogenică", "progesteronică", "estro-progestativă"],
            correctAnswers: ["estrogenică"]
        },
        {
            question: "11. Faza postovulatorie a ciclului menstrual endometrial se află sub influență hormonală:",
            choices: ["estrogenică", "progesteronică", "estro-progesteronică"],
            correctAnswers: ["progesteronică"]
        },
        {
            question: "12. Nidația este un fenomen care normal are loc în:",
            choices: ["trompa uterină", "mucoasa uterină", "colul uterin"],
            correctAnswers: ["mucoasa uterină"]
        },
        {
            question: "13. Timpul scurs de la fecundație până la nidație este de:",
            choices: ["24 de ore", "6-7 zile", "14 zile"],
            correctAnswers: ["6-7 zile"]
        },
        {
            question: "14. Ovulul are o durată de viață medie de:",
            choices: ["24-48 de ore", "7 zile", "28 de zile"],
            correctAnswers: ["24-48 de ore"]
        },
        {
            question: "15. Durata medie de viață a spermatozoizilor este de:",
            choices: ["24-48 de ore", "21 de zile", "3-5 zile"],
            correctAnswers: ["3-5 zile"]
        },
        {
            question: "16. La om un ovul este fecundat în mod normal de:",
            choices: ["doi spermatozoizi", "10-20 de spermatozoizi", "un singur spermatozoid"],
            correctAnswers: ["un singur spermatozoid"]
        },
        {
            question: "17. În cursul vieții reproductive ajung la maturitate un număr de:",
            choices: ["300-400 ovule", "20.000", "400.000"],
            correctAnswers: ["300-400 ovule"]
        },
        {
            question: "18. Spermatogeneza durează:",
            choices: ["72 zile", "are durată variabilă", "48 de ore"],
            correctAnswers: ["72 zile"]
        },
        {
            question: "19. Cea mai eficientă metodă contraceptivă o reprezintă:",
            choices: ["prezervativul", "contracepția hormonală", "steriletul"],
            correctAnswers: ["contracepția hormonală"]
        },
        {
            question: "20. Apariția părului pubian se numeşte:",
            choices: ["menarha", "pubarha", "telarha"],
            correctAnswers: ["pubarha"]
        },
        {
            question: "21. Menopauza reprezintă:",
            choices: ["apariția primei menstruații", "apariția sânilor", "încetarea activității ovariene şi a ciclurilor menstruale"],
            correctAnswers: ["încetarea activității ovariene şi a ciclurilor menstruale"]
        },
        {
            question: "22. Trichomoniaza:",
            choices: ["se transmite doar pe cale sexuală", "este determinată de un parazit", "se manifestă prin vaginită şi uretrită"],
            correctAnswers: ["este determinată de un parazit", "se manifestă prin vaginită şi uretrită"]
        },
        {
            question: "23. În cazul unei boli cu transmitere sexuală:",
            choices: ["este obligatoriu doar tratamentul celui afectat", "este obligatoriu tratamentul tuturor partenerilor sexuali", "sunt interzise contactele sexuale pe durata tratamentului"],
            correctAnswers: ["este obligatoriu tratamentul tuturor partenerilor sexuali", "sunt interzise contactele sexuale pe durata tratamentului"]
        },
        {
            question: "24. Avantajele prezervativului sunt:",
            choices: ["eficiență 100%", "protejează de bolile cu transmitere sexuală", "ieftin şi uşor de utilizat"],
            correctAnswers: ["protejează de bolile cu transmitere sexuală", "ieftin şi uşor de utilizat"]
        },
        {
            question: "25. Dezavantajele contraceptivelor hormonale sunt:",
            choices: ["influențează fertilitatea ulterioară", "sunt contraindicate la persoanele cu afecțiuni hepatice, biliare sau vasculare", "determină cancer de ovar"],
            correctAnswers: ["sunt contraindicate la persoanele cu afecțiuni hepatice, biliare sau vasculare"]
        },
        {
            question: "26. Contraceptivele hormonale acționează prin:",
            choices: ["blocarea ovulației şi atrofia endometrului", "modificarea glerei cervicale", "distrugerea spermatozoizilor"],
            correctAnswers: ["blocarea ovulației şi atrofia endometrului", "modificarea glerei cervicale"]
        },
        {
            question: "27. Care din următoarele reprezintă metode naturale de contracepție:",
            choices: ["prezervativul", "metoda calendarului", "coitus interruptus"],
            correctAnswers: ["metoda calendarului", "coitus interruptus"]
        },
        {
            question: "28. Pentru un ciclu menstrual standard de 28 de zile, perioada de evitare a contactelor sexuale neprotejate este:",
            choices: ["între zilele 9-19", "în primele 7 zile", "cu 7 zile înainte de menstruație"],
            correctAnswers: ["între zilele 9-19"]
        },
        {
            question: "29. Dezavantajele metodei „coitus interruptu sunt:",
            choices: ["modifică comportamentul sexual", "eficiența ei depinde de abilitatea şi controlul bărbatului", "predispune la infecții urinare"],
            correctAnswers: ["eficiența ei depinde de abilitatea şi controlul bărbatului"]
        },
        {
            question: "30. Cele mai grave boli cu transmitere sexuală sunt:",
            choices: ["candidoza şi trichomoniaza", "hepatita B şi C", "HIV/Sida"],
            correctAnswers: ["hepatita B şi C", "HIV/Sida"]
        },
        {
            question: "31. Spermicidele sunt:",
            choices: ["substanțe chimice care distrug spermatozoizii", "sigure 100%", "sub formă de ovule, creme, bureți"],
            correctAnswers: ["substanțe chimice care distrug spermatozoizii", "sub formă de ovule, creme, bureți"]
        },
        {
            question: "32. Steriletul este:",
            choices: ["dispozitiv care se introduce intrauterin", "indicat persoanelor cu mai mulți parteneri", "indicat la debutul vieții sexuale"],
            correctAnswers: ["dispozitiv care se introduce intrauterin"]
        },
        {
            question: "33. Contracepția de urgență:",
            choices: ["este indicată ori de câte ori este nevoie", "este indicată doar în situații excepționale, în cazul contactelor sexuale posibil fecundante", "are eficacitate 100%"],
            correctAnswers: ["este indicată doar în situații excepționale, în cazul contactelor sexuale posibil fecundante"]
        },
        {
            question: "34. În cazul sifilisului cele mai severe leziuni sunt:",
            choices: ["tegumentare", "viscerale", "ale sistemului nervos"],
            correctAnswers: ["ale sistemului nervos"]
        },
        {
            question: "35. Încetarea funcției ovariene are loc:",
            choices: ["între 35-45 ani", "între 45-55 ani", "după 60 de ani"],
            correctAnswers: ["între 45-55 ani"]
        },
        {
            question: "36. Componentele sistemului nervos, cu excepția microgliei, se diferențiază din:",
            choices: ["ectoderm", "mezoderm", "endoderm"],
            correctAnswers: ["ectoderm"]
        },
        {
            question: "37. Meningele prezintă în structura sa:",
            choices: ["pahimeningele şi letomeningele", "dura mater, arahnoida, piamater", "doar dura mater şi piamater"],
            correctAnswers: ["pahimeningele şi letomeningele", "dura mater, arahnoida, piamater"]
        },
        {
            question: "38. Spațiul subdural este delimitat între:",
            choices: ["dura mater şi arahnoidă", "arahnoidă şi pia mater", "dura mater şi periost"],
            correctAnswers: ["dura mater şi arahnoidă"]
        },
        {
            question: "39. Pia mater:",
            choices: ["formează plexurile coroide", "este foița externă a meningelui", "este foița internă a meningelui"],
            correctAnswers: ["formează plexurile coroide", "este foița internă a meningelui"]
        },
        {
            question: "40. Care din următoarele organite citoplasmatice nu sunt prezente în neuron:",
            choices: ["poliribozomii", "centrozomul", "mitocondriile"],
            correctAnswers: ["centrozomul"]
        },
        {
            question: "41. Neuritul reprezintă:",
            choices: ["corpul neuronal", "axonul", "un organit citoplasmatic"],
            correctAnswers: ["axonul"]
        },
        {
            question: "42. Neuronii de tip Golgi I:",
            choices: ["au axon lung", "reprezintă neuroni de asociație", "formează fibrele din substanța albă a SNC"],
            correctAnswers: ["au axon lung", "formează fibrele din substanța albă a SNC"]
        },
        {
            question: "43. În coarnele anterioare ale măduvei se găsesc:",
            choices: ["neuroni visceromotori", "motoneuroni a", "neuroni viscerosenzitivi"],
            correctAnswers: ["motoneuroni a"]
        },
        {
            question: "44. Muşchii extrinseci ai globului ocular sunt inervați de nervii cranieni:",
            choices: ["III, IV şi VII", "IV, VI şi VII", "III, IV şi VI"],
            correctAnswers: ["III, IV şi VI"]
        },
        {
            question: "45. Lichidul cefalorahidian este produs de:",
            choices: ["celulele nervoase", "plexurile coroide", "sinusurile venoase"],
            correctAnswers: ["plexurile coroide"]
        },
        {
            question: "46. Substanța cenuşie a măduvei spinării este formată din:",
            choices: ["axoni", "axoni şi dendrite", "corpi neuronali"],
            correctAnswers: ["corpi neuronali"]
        },
        {
            question: "47. Nervii spinali:",
            choices: ["sunt 31 de perechi", "7 nervi cervicali", "12 nervi toracali"],
            correctAnswers: ["sunt 31 de perechi", "12 nervi toracali"]
        },
        {
            question: "48. Ganglionii spinali de pe traiectul rădăcinii posterioare a nervilor spinali conțin neuroni:",
            choices: ["somatosenzitivi", "viscerosenizitivi", "somatomotori"],
            correctAnswers: ["somatosenzitivi", "viscerosenizitivi"]
        },
        {
            question: "49. Nervul frenic inervează:",
            choices: ["muşchii membrelor", "diafragma", "muşchii intercostali"],
            correctAnswers: ["diafragma"]
        },
        {
            question: "50. Plexul ruşinos inervează:",
            choices: ["centura pelviană şi membrul inferior", "viscerele pelviene", "perineul şi organele genitale externe"],
            correctAnswers: ["viscerele pelviene", "perineul şi organele genitale externe"]
        }
    ];

    initQuiz(quizData);
});
