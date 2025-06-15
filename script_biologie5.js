document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "212. Care din următoarele afirmaţii sunt corecte?",
            choices: [
                "o populaţie are însuşiri diferite şi noi faţă de organismele din care este alcătuită",
                "o biocenoză are însuşiri diferite de ale populaţiilor componente",
                "sistemele biologice sunt aditive"
            ],
            correctAnswers: ["o populaţie are însuşiri diferite şi noi faţă de organismele din care este alcătuită", "o biocenoză are însuşiri diferite de ale populaţiilor componente"]
        },
        {
            question: "213. Integralitatea unui sistem biologic este mai pronunţată atunci când:",
            choices: [
                "părţile componente ale sistemului sunt mai diferenţiate",
                "interdependenţa elementelor componente va fi mai mare",
                "elementele sistemului sunt homogene"
            ],
            correctAnswers: ["părţile componente ale sistemului sunt mai diferenţiate", "interdependenţa elementelor componente va fi mai mare"]
        },
        {
            question: "214. Programul pentru sine asigură:",
            choices: [
                "autoconservarea sistemului dat",
                "nutriţia şi apărarea indivizilor sau populaţiilor",
                "autoconservarea ecosistemelor"
            ],
            correctAnswers: ["autoconservarea sistemului dat", "nutriţia şi apărarea indivizilor sau populaţiilor"]
        },
        {
            question: "215. Programul inferior reprezintă:",
            choices: [
                "starea realizabilă de sistemul dat",
                "starea realizabilă de subsistemele sistemului dat",
                "starea realizabilă de un sistem inferior din punct de vedere evolutiv"
            ],
            correctAnswers: ["starea realizabilă de subsistemele sistemului dat"]
        },
        {
            question: "216. Care din următoarele exemple reflectă programe superioare?",
            choices: [
                "adaptările unei populaţii în îndeplinirea rolului ei de verigă în procesele de transfer de materie şi energie",
                "trăsăturile morfologice şi fiziologice ale celulelor secretoare dintr-o glandă cu secreţie internă",
                "diversificarea speciilor aflate pe trepte inferioare din punct de vedere evolutiv"
            ],
            correctAnswers: ["adaptările unei populaţii în îndeplinirea rolului ei de verigă în procesele de transfer de materie şi energie", "trăsăturile morfologice şi fiziologice ale celulelor secretoare dintr-o glandă cu secreţie internă"]
        },
        {
            question: "217. Care din următoarele informaţii sunt false?",
            choices: [
                "sistemele biologice au capacitatea de a transforma condiţii ale mediului în propriile lor condiţii",
                "sistemele biologice nu au capacitatea de autoînoire",
                "conservarea sistemelor lipsite de viaţă depinde de gradul lor de izolare faţă de sistemele înconjurătoare"
            ],
            correctAnswers: ["sistemele biologice nu au capacitatea de autoînoire"]
        },
        {
            question: "218. Nivelele de integrare ale materiei vii reprezintă:",
            choices: [
                "totalitatea sistemelor ierarhizate, cuprinse (integrate) în alcătuirea unui sistem biologic dat",
                "totalitatea sistemelor ierarhizate, cuprinse, integrate în alcătuirea unui sistem nebiologic",
                "totalitatea sistemelor unui individ"
            ],
            correctAnswers: ["totalitatea sistemelor ierarhizate, cuprinse (integrate) în alcătuirea unui sistem biologic dat"]
        },
        {
            question: "219. Autoreglarea sistemelor biologice se bazează pe:",
            choices: [
                "recepţionarea informaţiilor din mediu şi prelucrarea lor",
                "recepţionarea informaţiilor de la alte sisteme, prelucrarea lor şi elaborarea unui răspuns",
                "recepţionarea informaţiilor externe, prelucrarea lor şi reacţia sistemului faţă de acestea"
            ],
            correctAnswers: ["recepţionarea informaţiilor de la alte sisteme, prelucrarea lor şi elaborarea unui răspuns", "recepţionarea informaţiilor externe, prelucrarea lor şi reacţia sistemului faţă de acestea"]
        },
        {
            question: "220. Care din următoarele afirmaţii sunt false?",
            choices: [
                "conexiunea inversă realizează stabilitatea sistemelor biologice",
                "nu permite anihilarea influenţelor întîmplătoare ale diferiţilor factori",
                "permite opoziţia activă a sistemului faţă de diferite perturbări"
            ],
            correctAnswers: ["nu permite anihilarea influenţelor întîmplătoare ale diferiţilor factori"]
        },
        {
            question: "221. Un sistem biologic se poate autoregla prin:",
            choices: [
                "feed-back negativ",
                "feed-back pozitiv",
                "feed-back negativ şi pozitiv"
            ],
            correctAnswers: ["feed-back negativ şi pozitiv"]
        },
        {
            question: "222. Capacitatea de autocontrol a sistemelor biologice asigură:",
            choices: [
                "persistenţa integralităţii sistemului",
                "echilibrul dinamic al acestuia",
                "a şi b"
            ],
            correctAnswers: ["a şi b"]
        },
        {
            question: "223. Cele patru nivele de organizare ale sistemelor biologice se caracterizează prin:",
            choices: [
                "trăsături structurale, funcţionale şi legi specifice fiecărui nivel",
                "trăsături funcţionale şi legi comune nivelului 1 şi 2",
                "trăsături strcturale, funcţionale şi legi comune nivelului 3 şi 4"
            ],
            correctAnswers: ["trăsături structurale, funcţionale şi legi specifice fiecărui nivel"]
        },
        {
            question: "224. Cel mai înalt grad de integralitate, autoreglare îl prezintă sistemele biologice din:",
            choices: [
                "nivelul individual datorită evoluţiei organizării morfologice",
                "nivelul populaţional datorită relaţiilor intraspecifice între grupuri de indivizi",
                "nivelul populaţional şi al biocenozei, deoarece reprezintă nivele mai cuprinzătoare"
            ],
            correctAnswers: ["nivelul individual datorită evoluţiei organizării morfologice"]
        },
        {
            question: "225. Un nivel de orgnizare a materiei vii este:",
            choices: [
                "ansamblul sistemelor biologice neechivalente",
                "ansamblul sistemelor biologice echivalente",
                "ansamblul sistemelor biologice echivalente cu caracter de universalitate"
            ],
            correctAnswers: ["ansamblul sistemelor biologice echivalente cu caracter de universalitate"]
        },
        {
            question: "226. Nivelurile de organizare sunt:",
            choices: [
                "nivelul individual, populaţional şi biocenotic",
                "nivelul popualţional, biocenotic şi al biosferei",
                "nivelul individual, populaţional, biocenotic şi nivelul biosferei"
            ],
            correctAnswers: ["nivelul individual, populaţional, biocenotic şi nivelul biosferei"]
        },
        {
            question: "227. Ierarhia nivelelor de organizare are la bază:",
            choices: [
                "relaţii funcţionale între sistemele ierarhizate",
                "relaţii de înrudire",
                "relaţii spaţiale"
            ],
            correctAnswers: ["relaţii funcţionale între sistemele ierarhizate"]
        },
        {
            question: "228. Legile speciei se confundă cu legile populaţiei deoarece:",
            choices: [
                "orice individ aparţine unei anumite specii",
                "orice specie are mai multe populaţii",
                "orice specie este reprezentată prin una sau mai multe populaţii"
            ],
            correctAnswers: ["orice specie este reprezentată prin una sau mai multe populaţii"]
        },
        {
            question: "229. Relaţiile intraspecifice caracteristice sistemelor populaţionale se formează pe fondul:",
            choices: [
                "relaţiilor cu alte specii",
                "relaţiilor cu factorii abiotici",
                "a şi b"
            ],
            correctAnswers: ["a şi b"]
        },
        {
            question: "230. Care din următoarele afirmaţii sunt adevărate?",
            choices: [
                "durata de existenţă a populaţiilor este nedefinită( determinată ecologic )",
                "legile evoluţiei nu sunt caracteristice sistemului populaţional",
                "populaţia este purtătorul material al evoluţiei"
            ],
            correctAnswers: ["durata de existenţă a populaţiilor este nedefinită( determinată ecologic )", "populaţia este purtătorul material al evoluţiei"]
        },
        {
            question: "231. Care din următoarele caracteristici sunt specifice sistemelor populaţionale?:",
            choices: [
                "adecvarea",
                "adaptarea",
                "aclimatizarea"
            ],
            correctAnswers: ["adaptarea"]
        },
        {
            question: "232. Homeostazia sistemului biocenotic este asigurată de:",
            choices: [
                "relaţii între specii",
                "relaţiile cu factorii abiotici",
                "a şi b"
            ],
            correctAnswers: ["a şi b"]
        },
        {
            question: "233. Diferenţierea funcţională a populaţiilor în cadrul biocenozei duce la:",
            choices: [
                "dezvoltarea integralităţii biocenozei",
                "integrarea fiecărei populaţii în sistemul biocenotic",
                "izolarea speciilor"
            ],
            correctAnswers: ["dezvoltarea integralităţii biocenozei", "integrarea fiecărei populaţii în sistemul biocenotic"]
        },
        {
            question: "234. Funcţionarea oricărui sistem se desfăşoară astfel încât să asigure:",
            choices: [
                "autoconservarea sistemului dat",
                "îndeplinirea funcţiilor în cadrul sistemului ierarhic superior în care este integrat",
                "a şi b"
            ],
            correctAnswers: ["a şi b"]
        },
        {
            question: "235. Cum aţi caracteriza variaţiile individuale?",
            choices: [
                "ca fiind orientate totdeauna în sens util speciei",
                "aprecite de legile selecţiei (selecţia naturală)",
                "a şi b"
            ],
            correctAnswers: ["aprecite de legile selecţiei (selecţia naturală)"]
        },
        {
            question: "236. Cum aţi caracteriza adaptările populaţiei în cadrul unui ecosistem?",
            choices: [
                "ca fiind rezultatul selecţiei naturale",
                "ca rezultat al relaţiilor interspecifice şi cu mediul abiotic",
                "se elaborează exclusiv pe baza relaţiilor interspecifice"
            ],
            correctAnswers: ["ca fiind rezultatul selecţiei naturale", "ca rezultat al relaţiilor interspecifice şi cu mediul abiotic"]
        },
        {
            question: "237. Nutriţia autotrofă este:",
            choices: [
                "specifică organismelor saprofite",
                "întâlnită la organismele cu pigmenţi asimilatori",
                "cel mai răspândit mod de nutriţie la plante, prin fotosinteză"
            ],
            correctAnswers: ["întâlnită la organismele cu pigmenţi asimilatori", "cel mai răspândit mod de nutriţie la plante, prin fotosinteză"]
        },
        {
            question: "238. Nutriţia heterotrofă este întâlnită la:",
            choices: [
                "algele verzi",
                "organismele care nu au pigmenţi asimilatori",
                "majoritatea plantelor care au clorofilă"
            ],
            correctAnswers: ["organismele care nu au pigmenţi asimilatori"]
        },
        {
            question: "239. Plantele parazite care folosesc substanţele organice din organismele vii pe care le parazitează sunt reprezentate de:",
            choices: [
                "Orobanche minor",
                "Lathraea squamaria",
                "Clematis vitalba"
            ],
            correctAnswers: ["Orobanche minor", "Lathraea squamaria"]
        },
        {
            question: "240. Plantele autotrofe obţin substanţele hrănitoare din:",
            choices: [
                "apă şi săruri minerale",
                "organisme moarte în descompunere",
                "organisme vii pe care le parazitează"
            ],
            correctAnswers: ["apă şi săruri minerale"]
        }
    ];

    initQuiz(quizData);
});