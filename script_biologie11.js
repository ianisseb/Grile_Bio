document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "376. Citochineza apare în:",
            choices: ["a) profază", "b) metafază", "c) finalul mitozei"],
            correctAnswers: ["c) finalul mitozei"]
        },
        {
            question: "377. Separarea cromatidelor surori şi deplasarea lor spre poli are loc în:",
            choices: ["a) profaza", "b) metafază", "c) anafază"],
            correctAnswers: ["c) anafază"]
        },
        {
            question: "378. În telofază:",
            choices: ["a) apare placa metafazică", "b) cromatidele surori ajung la polii fusului de diviziune", "c) cromozomii se decondensează şi îşi pierd individualitatea"],
            correctAnswers: ["b) cromatidele surori ajung la polii fusului de diviziune", "c) cromozomii se decondensează şi îşi pierd individualitatea"]
        },
        {
            question: "379. În profază are loc:",
            choices: ["a) formarea fusului de diviziune", "b) condensarea cromatidelor surori", "c) clivajul citoplasmei"],
            correctAnswers: ["a) formarea fusului de diviziune", "b) condensarea cromatidelor surori"]
        },
        {
            question: "380. În citochineză are loc:",
            choices: ["a) clivajul citoplasmei", "b) activarea inelului contractil", "c) scurtarea fibrelor kinetocorice"],
            correctAnswers: ["a) clivajul citoplasmei", "b) activarea inelului contractil"]
        },
        {
            question: "381. Prima diviziune meiotică:",
            choices: ["a) este numită diviziune reducţională", "b) din celule diploidă rezultă două celule haploide", "c) este numită diviziune ecvaţională"],
            correctAnswers: ["a) este numită diviziune reducţională", "b) din celule diploidă rezultă două celule haploide"]
        },
        {
            question: "382. Profaza primară este subdivizată în:",
            choices: ["a) leptonem", "b) tahinem", "c) zigonem"],
            correctAnswers: ["a) leptonem", "c) zigonem"]
        },
        {
            question: "383. Epiteliile de acoperire sunt epitelii care:",
            choices: ["a) căptuşesc cavităţi care comunică cu exteriorul", "b) acoperă suprafaţa organismului", "c) produc secreţii numite hormoni"],
            correctAnswers: ["a) căptuşesc cavităţi care comunică cu exteriorul", "b) acoperă suprafaţa organismului"]
        },
        {
            question: "384. Epiteliile de acoperire:",
            choices: ["a) sunt bogat vascularizate şi inervate", "b) se hrănesc prin difuziune din ţesutul conjunctiv subjacent", "c) sunt bogat inervate"],
            correctAnswers: ["b) se hrănesc prin difuziune din ţesutul conjunctiv subjacent", "c) sunt bogat inervate"]
        },
        {
            question: "385. Mezoteliile au următoarele caracteristici:",
            choices: ["a) sunt epitelii pavimentoase simple", "b) se găsesc la nivelul pleurei, pericardului, peritoneului", "c) se găsesc la nivelul vaselor de sânge"],
            correctAnswers: ["a) sunt epitelii pavimentoase simple", "b) se găsesc la nivelul pleurei, pericardului, peritoneului"]
        },
        {
            question: "386. Epiteliu cilindric simplu găsim la nivelul:",
            choices: ["a) epidermului", "b) stomacului şi intestinului", "c) trompelor uterine"],
            correctAnswers: ["b) stomacului şi intestinului", "c) trompelor uterine"]
        },
        {
            question: "387. La nivelul căilor respiratorii există epiteliu:",
            choices: ["a) pavimentos unistratificat", "b) pseudostratificat cu cili", "c) pavimentos stratificat fără keratinizare"],
            correctAnswers: ["b) pseudostratificat cu cili"]
        },
        {
            question: "388. Epiteliile malpighiene au următoarele caracteristici:",
            choices: ["a) sunt epitelii pavimentose stratificate", "b) sunt epitelii unistratificate", "c) pot fi cu keratinizare sau fără keratinizare"],
            correctAnswers: ["a) sunt epitelii pavimentose stratificate", "c) pot fi cu keratinizare sau fără keratinizare"]
        },
        {
            question: "389. Celulele epidermului se mai numesc şi:",
            choices: ["a) celule endoteliale", "b) keratinocite", "c) plasmocite"],
            correctAnswers: ["b) keratinocite"]
        },
        {
            question: "390. Epidermul reprezintă:",
            choices: ["a) un epiteliu pavimentos unistratificat", "b) un epiteliu pavimentos stratificat cu keratinizare", "c) un epiteliu pavimentos stratificat fără keratinizare"],
            correctAnswers: ["b) un epiteliu pavimentos stratificat cu keratinizare"]
        },
        {
            question: "391. În structura epidermului, pe lângă keratinocite se mai găsesc şi:",
            choices: ["a) melanocite şi celule Langerhans", "b) histiocite", "c) celule Merkel"],
            correctAnswers: ["a) melanocite şi celule Langerhans", "c) celule Merkel"]
        },
        {
            question: "392. Epitelii stratificate pavimentoase fără keratinizare se găsesc la nivelul:",
            choices: ["a) pielii", "b) mucoasei cavităţii bucale", "c) vaginului şi canalului anal"],
            correctAnswers: ["b) mucoasei cavităţii bucale", "c) vaginului şi canalului anal"]
        },
        {
            question: "393. Membrana bazală a epiteliilor glandulare are următoarele caracteristici:",
            choices: ["a) are aceeaşi structură cu a epiteliilor de acoperire", "b) are structură diferită faţă de cea a epiteliilor de acoperire şi se numeşte corion", "c) se numeşte glandilemă"],
            correctAnswers: ["a) are aceeaşi structură cu a epiteliilor de acoperire", "c) se numeşte glandilemă"]
        },
        {
            question: "394. Corionul reprezintă:",
            choices: ["a) tunica internă a vaselor sangvine", "b) ţesutul conjunctiv din structura unei mucoase", "c) ţesutul conjunctiv din structura unei glande"],
            correctAnswers: ["b) ţesutul conjunctiv din structura unei mucoase"]
        },
        {
            question: "395. Porţiunea secretorie a glandelor exocrine se numeşte:",
            choices: ["a) adenomer", "b) corion", "c) glandilemă"],
            correctAnswers: ["a) adenomer"]
        },
        {
            question: "396. Glanda sebacee este o glandă:",
            choices: ["a) tubulară glomerulată", "b) acinoasă", "c) alveolară plină"],
            correctAnswers: ["c) alveolară plină"]
        },
        {
            question: "397. Din punct de vedere arhitectural glanda tiroidă este o glandă:",
            choices: ["a) alveolară", "b) veziculoasă", "c) de tip cordonal"],
            correctAnswers: ["b) veziculoasă"]
        },
        {
            question: "398. Glandele ale căror celule involuează pe măsură ce-şi elaborează produsul de secreţie se numesc:",
            choices: ["a) holocrine", "b) merocrine", "c) amficrine"],
            correctAnswers: ["a) holocrine"]
        },
        {
            question: "399. Glanda suprarenală este o glandă:",
            choices: ["a) exocrină", "b) cu arhitectură de tip cordonal", "c) endocrină şi cu arhitectură de tip vezicular"],
            correctAnswers: ["b) cu arhitectură de tip cordonal"]
        },
        {
            question: "400. Acinii seroşi:",
            choices: ["a) secretă produse proteice pure", "b) se găsesc în structura glandei tiroide", "c) sunt în structura pancreasului exocrin"],
            correctAnswers: ["a) secretă produse proteice pure", "c) sunt în structura pancreasului exocrin"]
        }
    ];

    initQuiz(quizData);
});