document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "161. Bot lung și îngust are:",
            choices: [
                "crocodilul de mare (Crocodylus porosus)",
                "gavialul (Gavialis gangeticus)",
                "caiman (Caiman latirostris)"
            ],
            correctAnswers: ["gavialul (Gavialis gangeticus)"]
        },
        {
            question: "162. Următoarea afirmație pentru păsări este incorectă:",
            choices: [
                "au corpul acoperit cu pene",
                "memebrele anterioare sunt transformate în aripi",
                "falca inferioară prezintă dinți mărunți",
                "sunt homeoterme și amniote"
            ],
            correctAnswers: ["falca inferioară prezintă dinți mărunți"]
        },
        {
            question: "163. Nu zboară:",
            choices: [
                "pasărea kiwi (Apteryx australis)",
                "marabul african (Leptopilus crumeniferus)",
                "nandul (Rhea americana)"
            ],
            correctAnswers: ["pasărea kiwi (Apteryx australis)", "nandul (Rhea americana)"]
        },
        {
            question: "164. Degete zigodactile se întâlnesc la:",
            choices: [
                "prigorie (Merops apiaster)",
                "papagalul Ara (Ara ararauna)",
                "grangur (Oriolus oriolus)"
            ],
            correctAnswers: ["papagalul Ara (Ara ararauna)"]
        },
        {
            question: "165. Picus viridis (ghionoaia verde) are picior de tip:",
            choices: [
                "stegan",
                "de tip zigodactil",
                "de tip cenodactil"
            ],
            correctAnswers: ["de tip zigodactil"]
        },
        {
            question: "166. Păsările au plămânii:",
            choices: [
                "de tip saciform prevăzut cu diverticule",
                "saciform prevăzut cu saci aerieni",
                "de tip parenchimatos tubular"
            ],
            correctAnswers: ["de tip parenchimatos tubular"]
        },
        {
            question: "167. Organul fonator la păsări este:",
            choices: [
                "laringele",
                "sirinxul",
                "laringele şi sirinxul"
            ],
            correctAnswers: ["sirinxul"]
        },
        {
            question: "168. La păsări cârja aortică:",
            choices: [
                "se îndreaptă spre stânga",
                "se îndreaptă spre dreapta",
                "se îndreaptă în sus"
            ],
            correctAnswers: ["se îndreaptă spre dreapta"]
        },
        {
            question: "169. Circulaţia este închisă, dublă și completă la:",
            choices: [
                "şopârle",
                "teleostei",
                "stârci"
            ],
            correctAnswers: ["stârci"]
        },
        {
            question: "170. Cioc lung curbat în jos are:",
            choices: [
                "Piciorongul (Himantopus himantopus)",
                "Ţigănuşul (Plegadis falcinelus)",
                "Culicul mare (Numenius arquata)"
            ],
            correctAnswers: ["Ţigănuşul (Plegadis falcinelus)", "Culicul mare (Numenius arquata)"]
        },
        {
            question: "171. Piciorongul (Himantopus himantopus):",
            choices: [
                "este pasăre limicolă",
                "are cioc lung, drept și nergru",
                "picioarele lungi cu 4 degete"
            ],
            correctAnswers: ["este pasăre limicolă", "are cioc lung, drept și nergru"]
        },
        {
            question: "172. Ce afirmație este falsă pentru răpitoarele de zi:",
            choices: [
                "prezența a 2 fovei",
                "ciocul ascuțit încovoiat de la bază, acoperit cu vibrize",
                "penaj homocrom cu pene tari și rigide"
            ],
            correctAnswers: ["ciocul ascuțit încovoiat de la bază, acoperit cu vibrize"]
        },
        {
            question: "173. Pene pe tars se întâlnesc la:",
            choices: [
                "vânturelul roșu (Falco tinnunculus)",
                "acvila de munte (Aquila chrysaetos)",
                "striga (Tyto alba)"
            ],
            correctAnswers: ["acvila de munte (Aquila chrysaetos)", "striga (Tyto alba)"]
        },
        {
            question: "174. Cuibărește în zonele montane:",
            choices: [
                "mugurarul (Pyrrhula pyrrhula)",
                "fazanul (Phasianus colchicus)",
                "forfecuța (Loxia curvirostra)"
            ],
            correctAnswers: ["mugurarul (Pyrrhula pyrrhula)", "forfecuța (Loxia curvirostra)"]
        },
        {
            question: "175. Puii nidicoli se întâlnesc la:",
            choices: [
                "piciforme",
                "gaviide",
                "upupide"
            ],
            correctAnswers: ["piciforme", "upupide"]
        },
        {
            question: "176. Puii nidifugi se întâlnesc la:",
            choices: [
                "coraciiforme",
                "strigiforme",
                "galiforme"
            ],
            correctAnswers: ["galiforme"]
        },
        {
            question: "177. Cuibărește în scorburi:",
            choices: [
                "Silvia cu cap negru (Sylvia atricapilla)",
                "ciocănitoarea verde (Picus viridis)",
                "stăncuța (Corvus monedula)"
            ],
            correctAnswers: ["ciocănitoarea verde (Picus viridis)", "stăncuța (Corvus monedula)"]
        },
        {
            question: "178. Femela de cuc (Cuculus canorus):",
            choices: [
                "cloceşte până în 10 ouă",
                "cloceşte 8-18 ouă",
                "nu cloceşte niciun ou"
            ],
            correctAnswers: ["nu cloceşte niciun ou"]
        },
        {
            question: "179. Gheare pe aripi se întîlnesc la puii speciei de:",
            choices: [
                "găina ocelată (Leipoa ocellata)",
                "ibisul (Threskiornis aethiopicus)",
                "hoazin (Opisthocomus hoazin)"
            ],
            correctAnswers: ["hoazin (Opisthocomus hoazin)"]
        },
        {
            question: "180. Tucanul uriaș (Rhamphatos toco) aparține de:",
            choices: [
                "Ord. Coraciiformes",
                "Ord. Piciformes",
                "Ord. Apodiformes",
                "Caradriiformes"
            ],
            correctAnswers: ["Ord. Piciformes"]
        },
        {
            question: "181. Din ordinul Passeriformes fac parte:",
            choices: [
                "pupăza (Upupa epops), rândunica (Hirundo rustica), porumbelul domestic (Columba livia domestica)",
                "pescărel negru (Cinclus cinclus), boicuș (Remiz pendulinus), pasărea liră (Menura novaehollandiae)",
                "corbul (Corvus corax), sticletele (Carduelis carduelis), ciocârlia (Alauda arvensis)"
            ],
            correctAnswers: ["pescărel negru (Cinclus cinclus)", "boicuș (Remiz pendulinus)", "pasărea liră (Menura novaehollandiae)"]
        },
        {
            question: "182. Este oaspete de vară:",
            choices: [
                "pescărușul albastru (Aleco atthis)",
                "stârcul galben (Ardeola ralloides)",
                "ierunca (Bonasia bonasia)"
            ],
            correctAnswers: ["stârcul galben (Ardeola ralloides)"]
        },
        {
            question: "183. Este specie sedentară:",
            choices: [
                "Strix aluco (huhurezul mic de pădure)",
                "Pyrrhula pyrrhula (mugurar)",
                "Charadrius dubius (prundăraş gulerat mic)"
            ],
            correctAnswers: ["Strix aluco (huhurezul mic de pădure)"]
        },
        {
            question: "184. La monotreme:",
            choices: [
                "corpul calos și dinții lipsesc",
                "conductele uro - genitale și intestinul se deschid în cloacă",
                "glandele mamare de tip tubular formează mamelele"
            ],
            correctAnswers: ["corpul calos și dinții lipsesc", "conductele uro - genitale și intestinul se deschid în cloacă"]
        },
        {
            question: "185. Stomac tricameral are:",
            choices: [
                "hipopotamul",
                "dromaderul",
                "porcul cerb (Babyrussa babyrussa)"
            ],
            correctAnswers: ["dromaderul"]
        },
        {
            question: "186. Din ventriculul drept la mamifere pleacă sânge încărcat cu:",
            choices: [
                "CO2 prin cârja aortică stângă",
                "CO2 prin venele cave",
                "CO2 prin artera pulmonară"
            ],
            correctAnswers: ["CO2 prin artera pulmonară"]
        },
        {
            question: "187. Mamifere paricopitate sunt:",
            choices: [
                "rinocerotidele",
                "proboscidienii",
                "cervidele"
            ],
            correctAnswers: ["cervidele"]
        },
        {
            question: "188. Aparţin pinipedelor:",
            choices: [
                "delfinii",
                "dugongii",
                "otariile"
            ],
            correctAnswers: ["otariile"]
        },
        {
            question: "189. Mamifere digitigrade și neretractile au:",
            choices: [
                "bursucul (Meles meles) și șacalul (Canis aureus)",
                "șacalul (Canis aureus) și câinele enot (Nyctereutes procyonoides)",
                "câinele enot (Nyctereutes procyonoides) și vulpea (Vulpes vulpes)"
            ],
            correctAnswers: ["șacalul (Canis aureus)", "câinele enot (Nyctereutes procyonoides)"]
        },
        {
            question: "190. Chiropterele:",
            choices: [
                "planează de la un arbore la altul",
                "au tragus și patagiu",
                "emit ulrasunete"
            ],
            correctAnswers: ["au tragus și patagiu", "emit ulrasunete"]
        }
    ];
    
    initQuiz(quizData);
    });
    
 