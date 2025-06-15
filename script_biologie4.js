document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "191. Cârtiţa (Talpa europaea):",
            choices: [
                "se deplasează prin târâre",
                "este un mamifer subteran",
                "nu are ochi"
            ],
            correctAnswers: ["este un mamifer subteran"]
        },
        {
            question: "192. Șoarecii au pe falca superioară:",
            choices: [
                "4 incisivi",
                "3 incisivi",
                "2 incisivi"
            ],
            correctAnswers: ["2 incisivi"]
        },
        {
            question: "193. La vidră (Lutra lutra) dentiția este:",
            choices: [
                "lofodontă",
                "selenodontă",
                "secodontă"
            ],
            correctAnswers: ["secodontă"]
        },
        {
            question: "194. Proboscidienii (elefanţii) au regim de hrană:",
            choices: [
                "insectivor",
                "vegetarian",
                "carnivor"
            ],
            correctAnswers: ["vegetarian"]
        },
        {
            question: "195. Fildeşii elefanţilor sunt daţi de:",
            choices: [
                "incisivi",
                "canini",
                "premolari"
            ],
            correctAnswers: ["incisivi"]
        },
        {
            question: "196. Coarne pline și caduce are:",
            choices: [
                "capra neagră (Rupicapra rupicapra)",
                "țap (Capreolus capreolus)",
                "lopătarul cerb (Dama dama)"
            ],
            correctAnswers: ["țap (Capreolus capreolus)", "lopătarul cerb (Dama dama)"]
        },
        {
            question: "197. Specie tipic endogee este:",
            choices: [
                "șoarecele de câmp (Microtus arvalis)",
                "chițcanul (Sorex sp.)",
                "orbetele (Spalax leucodon)"
            ],
            correctAnswers: ["orbetele (Spalax leucodon)"]
        },
        {
            question: "198. Bizamul (Ondatra zibethicus) este:",
            choices: [
                "carnivor semiacvatic",
                "rozător semiacvatic",
                "insectivor semiacvatic"
            ],
            correctAnswers: ["rozător semiacvatic"]
        },
        {
            question: "199. Specie arboricolă, cățărătoare este:",
            choices: [
                "cata (Lemur catta)",
                "ursulețul spălător (Procyon lotor)",
                "tatuul uriaș (Priodontes giganteus)"
            ],
            correctAnswers: ["cata (Lemur catta)", "ursulețul spălător (Procyon lotor)"]
        },
        {
            question: "200. Planează:",
            choices: [
                "Muscardinus avelanarius (pârșul de alun)",
                "Petaurus sciureus (breviceps) (veverița marsupială)",
                "Cynocephalus volans (colugo)"
            ],
            correctAnswers: ["Petaurus sciureus (breviceps) (veverița marsupială)", "Cynocephalus volans (colugo)"]
        },
        {
            question: "201. Furnicarul mare (Myrmecophaga tridactyla) este inclus în: Ordinul:",
            choices: [
                "Dermoptera",
                "Cingulata",
                "Pilosa"
            ],
            correctAnswers: ["Pilosa"]
        },
        {
            question: "202. Coadă prehensilă are:",
            choices: [
                "Manis longicaudata (pangolinul cu coadă lungă)",
                "Daubentonia madagascariensis (ai-ai)",
                "Alouatta seniculus (maimuța urlătoare roșie)"
            ],
            correctAnswers: ["Manis longicaudata (pangolinul cu coadă lungă)", "Alouatta seniculus (maimuța urlătoare roșie)"]
        },
        {
            question: "203. Jderul (Martes martes) este încadrat în Ordinul:",
            choices: [
                "Insectivora",
                "Lagomorpha",
                "Carnivora"
            ],
            correctAnswers: ["Carnivora"]
        },
        {
            question: "204. Un sistem poate fi definit ca:",
            choices: [
                "un ansamblu de elemente identice sau diferite",
                "un ansamblu de elemente diferite",
                "un ansamblu de elemente identice sau diferite unite prin conexiuni într-un întreg"
            ],
            correctAnswers: ["un ansamblu de elemente identice sau diferite unite prin conexiuni într-un întreg"]
        },
        {
            question: "205. Sistemele izolate:",
            choices: [
                "nu au schimburi materiale cu mediul",
                "nu au schimburi energetice cu mediul",
                "nu au schimburi materiale şi nici energetice"
            ],
            correctAnswers: ["nu au schimburi materiale şi nici energetice"]
        },
        {
            question: "206. Sistemele deschise:",
            choices: [
                "întreţin cu mediul doar schimburi materiale",
                "întreţin cu mediul doar schimburi energetice",
                "întreţin cu mediul atît schimburi materiale cît şi energetice"
            ],
            correctAnswers: ["întreţin cu mediul atît schimburi materiale cît şi energetice"]
        },
        {
            question: "207. Sistemele închise:",
            choices: [
                "au doar schimburi energetice cu mediul",
                "se întâlnesc foarte des în natură",
                "în natură nu se găsesc sisteme absolut închise"
            ],
            correctAnswers: ["au doar schimburi energetice cu mediul", "în natură nu se găsesc sisteme absolut închise"]
        },
        {
            question: "208. Integralitatea este o însuşire specifică:",
            choices: [
                "sistemelor individuale",
                "sistemelor populaţionale",
                "tuturor sistemelor biologice"
            ],
            correctAnswers: ["tuturor sistemelor biologice"]
        },
        {
            question: "209. Integralitatea se referă la:",
            choices: [
                "însuşirile părţilor componente ale sistemului",
                "însuşirile noi, proprii care apar şi pe care nu le regăsim la părţile componente",
                "integritatea unui sistem"
            ],
            correctAnswers: ["însuşirile noi, proprii care apar şi pe care nu le regăsim la părţile componente"]
        },
        {
            question: "210. Noile însuşiri ale sistemului integrator apar ca rezultat al:",
            choices: [
                "conexiunilor dintre părţile lui componente",
                "conexiunilor dintre părţile lui şi părţile altor sisteme",
                "hazardului"
            ],
            correctAnswers: ["conexiunilor dintre părţile lui componente"]
        },
        {
            question: "211. Sistemele biologice evoluează spre:",
            choices: [
                "creşterea entropiei",
                "compensarea creşterii entropiei (comportament antientropic)",
                "ambele situaţii"
            ],
            correctAnswers: ["compensarea creşterii entropiei (comportament antientropic)"]
        }
    ];

    initQuiz(quizData);
});