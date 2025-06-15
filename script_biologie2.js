document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "131. La anure:",
            choices: [
                "oasele zeugopodiului sunt contopite",
                "oasele zeugopodiului sunt libere",
                "fecundația este internă cu metamorfoză"
            ],
            correctAnswers: ["oasele zeugopodiului sunt contopite"]
        },
        {
            question: "132. Plămânii amfibienilor sunt de tip:",
            choices: [
                "saciform",
                "saciformi cu divericule",
                "parenchimatos alveolar"
            ],
            correctAnswers: ["saciform"]
        },
        {
            question: "133. Canalul Wolff este conduct uro-spermatic la masculii de:",
            choices: [
                "sturioni",
                "urodele",
                "lacertilieni",
                "crocodili"
            ],
            correctAnswers: ["sturioni", "urodele"]
        },
        {
            question: "134. Urodelele au:",
            choices: [
                "tegumentul vascularizat cu solzi",
                "dinți dispuși pe maxilă și mandibulă",
                "fecundație internă fără organ de acuplare"
            ],
            correctAnswers: ["dinți dispuși pe maxilă și mandibulă", "fecundație internă fără organ de acuplare"]
        },
        {
            question: "135. Gimnofionii:",
            choices: [
                "duc viață endogee",
                "au vertebre procelice",
                "au vertebre amficelice și coaste"
            ],
            correctAnswers: ["duc viață endogee", "au vertebre amficelice și coaste"]
        },
        {
            question: "136. Tritonul este:",
            choices: [
                "lacertilian",
                "urodel",
                "rhincocefal"
            ],
            correctAnswers: ["urodel"]
        },
        {
            question: "137. La genul Phyllobates predomină:",
            choices: [
                "colorația aposematică",
                "colorația alosematică",
                "coloritul de dezagregare"
            ],
            correctAnswers: ["colorația aposematică"]
        },
        {
            question: "138. Broasca fagure (Pipa americana):",
            choices: [
                "este specie arboricolă și săritoare",
                "este specie acvatică",
                "femela depune ouăle pe spate"
            ],
            correctAnswers: ["este specie acvatică", "femela depune ouăle pe spate"]
        },
        {
            question: "139. Este specie arboricolă:",
            choices: [
                "brotăcel (Hyla arborea)",
                "broasca prehensilă cu abdomenul pătat (Phyllomedusa sauvagii)",
                "broasca mamoș (Alytes obstreticans)"
            ],
            correctAnswers: ["brotăcel (Hyla arborea)", "broasca prehensilă cu abdomenul pătat (Phyllomedusa sauvagii)"]
        },
        {
            question: "140. Axolotl este larva de:",
            choices: [
                "Salamdra atra",
                "Ambystoma mexicanum",
                "Rhacophorus reinwardtii"
            ],
            correctAnswers: ["Ambystoma mexicanum"]
        },
        {
            question: "141. Adultul de Proteus anguineus are în afară de plămâni:",
            choices: [
                "branhii externe",
                "branhii externe și branhii interne",
                "branhii interne"
            ],
            correctAnswers: ["branhii externe"]
        },
        {
            question: "142. Glanda parotoidă se întâlnește la:",
            choices: [
                "Salamandra salamandra",
                "Pelophylax ridibundus",
                "Bufo viridis"
            ],
            correctAnswers: ["Salamandra salamandra", "Bufo viridis"]
        },
        {
            question: "143. Bombina variegata (buhai de baltă cu burta galbenă):",
            choices: [
                "are saci vocali cenușii",
                "prezintă colorația aposematică",
                "are negii de pe spate prevăzuţi cu spini cornoşi şi ascuţiţi"
            ],
            correctAnswers: ["prezintă colorația aposematică", "are negii de pe spate prevăzuţi cu spini cornoşi şi ascuţiţi"]
        },
        {
            question: "144. Articulaţia tibio-tarsală a membrului posterior întins pe lângă corp, nu depăşeşte vârful botului la:",
            choices: [
                "Pelophylax ridibundus",
                "Rana dalmatina",
                "Rana temporaria",
                "Pelophylax esculentus"
            ],
            correctAnswers: ["Rana temporaria"]
        },
        {
            question: "145. Creastă dorsală continuă apare în perioada de reproducere la masculii de:",
            choices: [
                "Salamandra salamandra (salamandră)",
                "Triturus cristatus (triton cu creastă)",
                "Lissotriton vulgaris (triton comun)"
            ],
            correctAnswers: ["Lissotriton vulgaris (triton comun)"]
        },
        {
            question: "146. Reptilele au:",
            choices: [
                "tegumentul umed şi bogat vascularizat",
                "amnios şi alantoidă",
                "fecundaţie externă"
            ],
            correctAnswers: ["amnios şi alantoidă"]
        },
        {
            question: "147. Chelonienii marini:",
            choices: [
                "năpârlesc",
                "au craniu anapsid",
                "au membre sub formă de lopeți"
            ],
            correctAnswers: ["au craniu anapsid", "au membre sub formă de lopeți"]
        },
        {
            question: "148. Circulația la reptile este:",
            choices: [
                "închisă, simplă și completă",
                "închisă, dublă și completă",
                "închisă, dublă și incompletă"
            ],
            correctAnswers: ["închisă, dublă și incompletă"]
        },
        {
            question: "149. Din chelonieni face parte:",
            choices: [
                "guşterul (Lacerta viridis)",
                "caimanul (Caiman latirostris)",
                "caretul (Eretmochelis imbricata)"
            ],
            correctAnswers: ["caretul (Eretmochelis imbricata)"]
        },
        {
            question: "150. Testudo hermanni (ţestoasa de uscat) are:",
            choices: [
                "carapacea cu două plăci supracaudale",
                "carapacea cu o placă supracaudală",
                "coada cu înveliş cornos"
            ],
            correctAnswers: ["carapacea cu două plăci supracaudale", "coada cu înveliş cornos"]
        },
        {
            question: "151. La șopârle:",
            choices: [
                "tegumentul năpârlește sub forma unei bucăți întregi",
                "pătratul este mobil",
                "se apără prin autotomie"
            ],
            correctAnswers: ["pătratul este mobil", "se apără prin autotomie"]
        },
        {
            question: "152. La Ablepharus kitaibeli (şopârliţa de frunzar):",
            choices: [
                "membrele sunt subțiri și distanţate",
                "porii femurali lipsesc",
                "este ovovivipară"
            ],
            correctAnswers: ["membrele sunt subțiri și distanţate", "porii femurali lipsesc"]
        },
        {
            question: "153. Șerpii nu au:",
            choices: [
                "ureche mijlocie",
                "columelă",
                "stern"
            ],
            correctAnswers: ["ureche mijlocie", "stern"]
        },
        {
            question: "154. Dinții proteroglifi:",
            choices: [
                "sunt dispuși în partea posterioară a maxilarului",
                "sunt dispuși în partea anterioară a maxilarului",
                "sunt reduși la 2 dinți dispuși în vârful maxilarului"
            ],
            correctAnswers: ["sunt dispuși în partea anterioară a maxilarului"]
        },
        {
            question: "155. Venin cu acțiune neurotoxică se întâlnește la:",
            choices: [
                "anaconda (Eunectes murinus)",
                "vipera comună (Vipera berus)",
                "mamba verde (Dendroaspis viridis)"
            ],
            correctAnswers: ["mamba verde (Dendroaspis viridis)"]
        },
        {
            question: "156. Specie ovovivipară este:",
            choices: [
                "șopârla de ziduri Podarcis muralis",
                "năpârca (Anguis fragilis)",
                "șarpele Boa (Boa constrictor)"
            ],
            correctAnswers: ["năpârca (Anguis fragilis)", "șarpele Boa (Boa constrictor)"]
        },
        {
            question: "157. La Vipera berus (vipera):",
            choices: [
                "botul este prevăzut cu un corn nazal moale",
                "cornul nazal lipseşte",
                "veninul este de natură hemotoxică"
            ],
            correctAnswers: ["cornul nazal lipseşte", "veninul este de natură hemotoxică"]
        },
        {
            question: "158. Glande cu venin au următoarele grupe de reptile:",
            choices: [
                "helodermatide",
                "boide",
                "elapide"
            ],
            correctAnswers: ["helodermatide", "elapide"]
        },
        {
            question: "159. Crocodilii au:",
            choices: [
                "inima tetracamerală",
                "bolta palatină secundară",
                "stern abdominal și coaste false abdominale"
            ],
            correctAnswers: ["inima tetracamerală", "bolta palatină secundară", "stern abdominal și coaste false abdominale"]
        },
        {
            question: "160. Cameleonul comun (Chamaeleon vulgaris) este specie:",
            choices: [
                "terestră",
                "subterană",
                "arboricolă"
            ],
            correctAnswers: ["arboricolă"]
        }
    ];
    
    initQuiz(quizData);
    });
    
 