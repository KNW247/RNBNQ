const launchFoundationButton = document.getElementById("launch-foundation");
const launchCompareButton = document.getElementById("launch-compare");
const launchGravityButton = document.getElementById("launch-gravity");
const launchIbuButton = document.getElementById("launch-ibu");
const launchGristButton = document.getElementById("launch-grist");
const launchMashButton = document.getElementById("launch-mash");
const launchFermentationButton = document.getElementById("launch-fermentation");
const drillPanel = document.getElementById("drill-panel");
const studySets = document.getElementById("study-sets");
const modules = document.getElementById("modules");
const backHomeButton = document.getElementById("back-home");
const launchTrueFalseButton = document.getElementById("launch-truefalse");
const correctCountDisplay = document.getElementById("correct-count");
const incorrectCountDisplay = document.getElementById("incorrect-count");
const accuracyDisplay = document.getElementById("accuracy");
const launchRecipeButton = document.getElementById("launch-recipe");
const styleName = document.getElementById("style-name");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const feedbackBox = document.getElementById("feedback-box");
const nextQuestionButton = document.getElementById("next-question");
const category = document.querySelectorAll(".category-select button");
const categorySelect = document.querySelector(".category-select");
const studySetButtons = document.querySelectorAll(".button-grid button");
const drillTitle = document.getElementById("drill-title");

const categoryOptions = {
    strength: ["Session / Low (≤4%)","Standard (≤6%)","Standard+ (≤7.5%)","Strong (≤9%)","Very Strong (>9%)"],
    bitterness: ["Rich Malt", "Malt-forward", "Slightly Malt-forward", "Balanced", "Firm Bitter", "Medium-High Bitter", "Hop-forward", "Aggressive"],
    body: ["Very Light", "Light", "Medium-Light", "Medium", "Medium-Full", "Full"],
    carbonation: ["Low", "Low-Moderate", "Moderate", "Medium-High", "High"],
    color: ["Straw", "Pale Gold", "Gold", "Amber", "Copper", "Brown", "Black"]
};



let currentCompareCluster = null;
let compareStep = "shared";
let compareIndex = 0;
let selectedCompareOptions = [];
let trueFalseSession = [];
let currentTrueFalseIndex = 0;
const TRUE_FALSE_SESSION_SIZE = 20;

const recipeStyleCodes = [
    "26C", "9A", "20A", "15B", "6A", "21A",
    "10A", "11C", "4B", "3B", "5D", "22A"
];

const recipeVolumeOptionsLiters = [19, 21.5, 23, 25, 38, 43, 46];

const recipeEfficiencyOptions = [55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85];

const recipeTempOptionsC = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];

const recipeMashOptions = [
    { id: "low", label: "Low Saccharification" },
    { id: "mid", label: "Mid Saccharification" },
    { id: "high", label: "High Saccharification" },
    { id: "hochkurz", label: "Hochkurz Step Mash" },
    { id: "decoction", label: "Decoction Mash" },
    { id: "protein", label: "Protein Rest + Step Mash" }
];

const recipeHopScheduleRows = ["FWH", "60", "30", "15", "5", "HP/WP"];
const recipeYeastOptions = [
    "W-34/70",
    "Wyeast 2124",
    "WLP830",
    "Diamond Lager",
    "Wyeast 2278",
    "WLP802",
    "US-05",
    "WLP001",
    "Wyeast 1056",
    "BRY-97",
    "Nottingham",
    "S-04",
    "Wyeast 1968",
    "WLP002",
    "Wyeast 1084",
    "WLP004",
    "Wyeast 3068",
    "WLP300",
    "Wyeast 3787",
    "WLP530",
    "BE-256",
    "Belle Saison",
    "Wyeast 3711",
    "Lutra",
    "K-97"
];

const recipeHopOptions = [
    "Hallertau Mittelfruh",
    "Tettnang",
    "Spalt",
    "Saaz",
    "Perle",
    "Magnum",
    "East Kent Goldings",
    "Fuggles",
    "Willamette",
    "Centennial",
    "Cascade",
    "Columbus",
    "Chinook",
    "Citra",
    "Mosaic",
    "Simcoe",
    "Galaxy"
];

const fermentableOptions = [
    "Pilsner",
    "2-Row",
    "Pale Ale Malt",
    "Maris Otter",
    "Vienna",
    "Munich I",
    "Munich II",
    "Wheat Malt",
    "Chit Malt",
    "Carafoam",
    "Dextrin Malt",
    "Acid Malt",
    "Flaked Barley",
    "Flaked Oats",
    "Flaked Wheat",
    "Flaked Maize",
    "Flaked Rice",
    "Crystal 10",
    "Crystal 40",
    "Crystal 60",
    "Crystal 80",
    "Crystal 120",
    "Biscuit",
    "Victory",
    "Aromatic",
    "Melanoidin",
    "Special B",
    "Brown Malt",
    "Chocolate Malt",
    "Pale Chocolate",
    "Roasted Barley",
    "Black Patent",
    "Carafa II",
    "Carafa III",
    "Table Sugar",
    "Dextrose",
    "Candi Sugar",
    "Turbinado"
];

const fermentableCategoryMap = {
    "Pilsner": "base",
    "2-Row": "base",
    "Pale Ale Malt": "base",
    "Maris Otter": "base",
    "Vienna": "base",
    "Munich I": "base",
    "Munich II": "base",

    "Wheat Malt": "wheat",

    "Chit Malt": "structuralHelper",
    "Carafoam": "structuralHelper",
    "Dextrin Malt": "structuralHelper",

    "Acid Malt": "processHelper",

    "Flaked Barley": "flakedAdjunct",
    "Flaked Oats": "flakedAdjunct",
    "Flaked Wheat": "flakedAdjunct",
    "Flaked Maize": "flakedAdjunct",
    "Flaked Rice": "flakedAdjunct",

    "Crystal 10": "character",
    "Crystal 40": "character",
    "Crystal 60": "character",
    "Crystal 80": "character",
    "Crystal 120": "character",
    "Biscuit": "character",
    "Victory": "character",
    "Aromatic": "character",
    "Melanoidin": "character",

    "Special B": "darkCharacter",
    "Brown Malt": "darkCharacter",

    "Chocolate Malt": "roast",
    "Pale Chocolate": "roast",
    "Roasted Barley": "roast",
    "Black Patent": "roast",
    "Carafa II": "roast",
    "Carafa III": "roast",

    "Table Sugar": "sugar",
    "Dextrose": "sugar",
    "Candi Sugar": "sugar",
    "Turbinado": "sugar"
};

const grainTotalRules = {
    strongMin: 98,
    strongMax: 102,
    defendMin: 95,
    defendMax: 105
};
// FUTURE REFINEMENT:
// Split style-defining ingredients from broad categories where needed.
// Example: Irish Stout currently treats all roast malts equally.
// Pale Chocolate counts toward "roast", but classic exam logic may expect
// specific roasted barley presence as a stronger style signal.
// Potential future category:
// "Roasted Barley": "roastedBarley"

const recipeGrainCategoryRules = {
    "5D": {
        name: "German Pils",
        base: { strongMin: 85, defendMin: 75 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 3, defendMax: 8 },
        character: { strongMax: 3, defendMax: 8 },
        darkCharacter: { strongMax: 0, defendMax: 1 },
        roast: { strongMax: 0, defendMax: 0 },
        sugar: { strongMax: 0, defendMax: 3 },
        note: "German Pils should remain lean, pale, and base-malt focused."
    },

    "3B": {
        name: "Czech Premium Pale Lager",
        base: { strongMin: 80, defendMin: 70 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 5, defendMax: 12 },
        character: { strongMax: 8, defendMax: 15 },
        darkCharacter: { strongMax: 0, defendMax: 2 },
        roast: { strongMax: 0, defendMax: 0 },
        sugar: { strongMax: 0, defendMax: 3 },
        note: "Czech Premium Pale Lager can support more malt depth than German Pils, but should remain pale and lager-focused."
    },

    "4B": {
        name: "Festbier",
        base: { strongMin: 80, defendMin: 70 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 3, defendMax: 8 },
        character: { strongMax: 10, defendMax: 18 },
        darkCharacter: { strongMax: 0, defendMax: 2 },
        roast: { strongMax: 0, defendMax: 0 },
        sugar: { strongMax: 0, defendMax: 3 },
        note: "Festbier should show elegant pale malt richness, not heavy sweetness or roast."
    },

    "6A": {
        name: "Märzen",
        base: { strongMin: 65, defendMin: 55 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 3, defendMax: 8 },
        character: { strongMax: 25, defendMax: 35 },
        darkCharacter: { strongMax: 2, defendMax: 5 },
        roast: { strongMax: 0, defendMax: 2 },
        sugar: { strongMax: 0, defendMax: 3 },
        note: "Märzen should have intentional malt depth, usually from Vienna/Munich-style structure, without roast or sugar-driven dryness."
    },

    "9A": {
        name: "Doppelbock",
        base: { strongMin: 55, defendMin: 45 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 3, defendMax: 8 },
        character: { strongMax: 35, defendMax: 45 },
        darkCharacter: { strongMax: 8, defendMax: 15 },
        roast: { strongMax: 2, defendMax: 5 },
        sugar: { strongMax: 0, defendMax: 5 },
        note: "Doppelbock is a malt showcase. Some dark malt support can be defensible, but heavy roast or sugar-driven thinning is hard to defend."
    },

    "10A": {
        name: "Weissbier",
        base: { strongMin: 30, defendMin: 20, strongMax: 60, defendMax: 70 },
        wheat: { strongMin: 40, defendMin: 30, strongMax: 70, defendMax: 80 },
        structuralHelper: { strongMax: 3, defendMax: 8 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 0, defendMax: 5 },
        character: { strongMax: 3, defendMax: 8 },
        darkCharacter: { strongMax: 0, defendMax: 1 },
        roast: { strongMax: 0, defendMax: 0 },
        sugar: { strongMax: 0, defendMax: 0 },
        note: "Weissbier needs wheat as a defining structural element. Low wheat, roast, or sugar are hard to defend."
    },

    "26C": {
        name: "Belgian Tripel",
        base: { strongMin: 65, defendMin: 55 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 3, defendMax: 8 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 0, defendMax: 5 },
        character: { strongMax: 8, defendMax: 15 },
        darkCharacter: { strongMax: 0, defendMax: 2 },
        roast: { strongMax: 0, defendMax: 0 },
        sugar: { strongMin: 8, defendMin: 0, strongMax: 20, defendMax: 25 },
        note: "Tripel is usually pale, dry, elegant, and often sugar-supported. No sugar can be defensible, but roast or heavy dark character is difficult to defend."
    },

    "15B": {
        name: "Irish Stout",
        base: { strongMin: 55, defendMin: 45 },
        wheat: { strongMax: 0, defendMax: 5 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMin: 8, defendMin: 0, strongMax: 25, defendMax: 30 },
        character: { strongMax: 8, defendMax: 15 },
        darkCharacter: { strongMax: 3, defendMax: 8 },
        roast: { strongMin: 6, defendMin: 4, strongMax: 15, defendMax: 20 },
        sugar: { strongMax: 0, defendMax: 5 },
        note: "Irish Stout should show roast and texture. No roast is very hard to defend; flaked adjuncts strongly support the expected mouthfeel."
    },

    "20A": {
        name: "American Porter",
        base: { strongMin: 55, defendMin: 45 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 10, defendMax: 20 },
        character: { strongMax: 25, defendMax: 35 },
        darkCharacter: { strongMax: 10, defendMax: 18 },
        roast: { strongMin: 5, defendMin: 3, strongMax: 15, defendMax: 22 },
        sugar: { strongMax: 0, defendMax: 5 },
        note: "American Porter can support layered malt complexity. Some roast character is expected; a pale, sugar-thinned recipe is difficult to defend."
    },

    "11C": {
        name: "Strong Bitter",
        base: { strongMin: 75, defendMin: 65 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 5, defendMax: 12 },
        character: { strongMax: 18, defendMax: 25 },
        darkCharacter: { strongMax: 2, defendMax: 5 },
        roast: { strongMax: 0, defendMax: 2 },
        sugar: { strongMax: 5, defendMax: 10 },
        note: "Strong Bitter should remain balanced and drinkable with restrained malt support. Roast or aggressive dark character is difficult to defend."
    },

    "21A": {
        name: "American IPA",
        base: { strongMin: 80, defendMin: 70 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 5, defendMax: 12 },
        character: { strongMax: 8, defendMax: 15 },
        darkCharacter: { strongMax: 0, defendMax: 2 },
        roast: { strongMax: 0, defendMax: 2 },
        sugar: { strongMax: 5, defendMax: 10 },
        note: "American IPA grain should support hops. Heavy crystal, roast, or chewy malt structure is hard to defend."
    },

    "22A": {
        name: "Double IPA",
        base: { strongMin: 70, defendMin: 60 },
        wheat: { strongMax: 5, defendMax: 10 },
        structuralHelper: { strongMax: 5, defendMax: 10 },
        processHelper: { strongMax: 3, defendMax: 5 },
        flakedAdjunct: { strongMax: 5, defendMax: 12 },
        character: { strongMax: 8, defendMax: 15 },
        darkCharacter: { strongMax: 0, defendMax: 2 },
        roast: { strongMax: 0, defendMax: 2 },
        sugar: { strongMin: 5, defendMin: 0, strongMax: 15, defendMax: 20 },
        note: "Double IPA should be big but drinkable. Sugar can support dryness; heavy crystal, roast, or dense malt sweetness is difficult to defend."
    }
};

let currentRecipeStyle = null;

let recipeSetup = {
    units: "metric",
    postBoilVolume: 21.5,
    efficiency: 73
};


// ==============================
// RECIPE CONSTRUCTION MODULES 1–5
// ==============================


// MODULE 1 — ABV + FG → OG
// Validator: true OG = FG + (ABV / 131.25)
// Accept ±1 gravity point

const module1GravityQuestions = [
  { id: 1, type: "abvFgToOg", abv: 3.75, fg: 1.008 },
  { id: 2, type: "abvFgToOg", abv: 4.0, fg: 1.010 },
  { id: 3, type: "abvFgToOg", abv: 4.25, fg: 1.010 },
  { id: 4, type: "abvFgToOg", abv: 4.5, fg: 1.011 },
  { id: 5, type: "abvFgToOg", abv: 4.75, fg: 1.010 },
  { id: 6, type: "abvFgToOg", abv: 5.0, fg: 1.012 },
  { id: 7, type: "abvFgToOg", abv: 5.25, fg: 1.011 },
  { id: 8, type: "abvFgToOg", abv: 5.5, fg: 1.012 },
  { id: 9, type: "abvFgToOg", abv: 5.75, fg: 1.013 },
  { id: 10, type: "abvFgToOg", abv: 6.0, fg: 1.012 },
  { id: 11, type: "abvFgToOg", abv: 6.25, fg: 1.014 },
  { id: 12, type: "abvFgToOg", abv: 6.5, fg: 1.014 },
  { id: 13, type: "abvFgToOg", abv: 6.75, fg: 1.015 },
  { id: 14, type: "abvFgToOg", abv: 7.0, fg: 1.014 },
  { id: 15, type: "abvFgToOg", abv: 7.25, fg: 1.016 },
  { id: 16, type: "abvFgToOg", abv: 7.5, fg: 1.016 }
];


// MODULE 2 — Style + OG → IBU
// Uses styles.js style.bugu.min / style.bugu.max

const module2IbuQuestions = [
  { id: 1, type: "styleOgToIbu", styleCode: "5D", targetOg: 1.048 },
  { id: 2, type: "styleOgToIbu", styleCode: "4A", targetOg: 1.046 },
  { id: 3, type: "styleOgToIbu", styleCode: "7A", targetOg: 1.052 },
  { id: 4, type: "styleOgToIbu", styleCode: "6A", targetOg: 1.057 },
  { id: 5, type: "styleOgToIbu", styleCode: "15B", targetOg: 1.040 },
  { id: 6, type: "styleOgToIbu", styleCode: "18A", targetOg: 1.046 },
  { id: 7, type: "styleOgToIbu", styleCode: "18B", targetOg: 1.054 },
  { id: 8, type: "styleOgToIbu", styleCode: "21A", targetOg: 1.064 },
  { id: 9, type: "styleOgToIbu", styleCode: "11B", targetOg: 1.044 },
  { id: 10, type: "styleOgToIbu", styleCode: "26C", targetOg: 1.080 }
];


// MODULE 3 — OG → Grist
// Fixed assumption: 21.5L into fermenter, 70% BHE
// Expected kg = OG points / 10
// Accept ±0.2 kg

const module3GristQuestions = [
  { id: 1, type: "ogToGrist", og: 1.040 },
  { id: 2, type: "ogToGrist", og: 1.044 },
  { id: 3, type: "ogToGrist", og: 1.048 },
  { id: 4, type: "ogToGrist", og: 1.050 },
  { id: 5, type: "ogToGrist", og: 1.052 },
  { id: 6, type: "ogToGrist", og: 1.056 },
  { id: 7, type: "ogToGrist", og: 1.058 },
  { id: 8, type: "ogToGrist", og: 1.060 },
  { id: 9, type: "ogToGrist", og: 1.064 },
  { id: 10, type: "ogToGrist", og: 1.068 },
  { id: 11, type: "ogToGrist", og: 1.072 },
  { id: 12, type: "ogToGrist", og: 1.080 }
];


// MODULE 4 — Mash Strategy
// Prompt: choose the strongest exam-safe mash strategy

const mashStrategyOptions = {
  low: "Low Saccharification Mash (62–64°C)",
  mid: "Mid Saccharification Mash (64–67°C)",
  high: "High Saccharification Mash (67–70°C)",
  hochkurz: "Hochkurz Step Mash",
  decoction: "Decoction Mash",
  proteinStep: "Protein Rest + Step Mash"
};

const module4MashQuestions = [
  {
    styleCode: "5D",
    styleName: "German Pils",
    strong: [
      { id: "low", response: "A lower saccharification mash promotes a highly fermentable wort, directly supporting the crisp dry finish, lean body, and firm drinkability expected in German Pils." },
      { id: "hochkurz", response: "A Hochkurz step mash is a strong traditional approach for German Pils when fully specified. A lower beta-amylase rest establishes fermentability, followed by a higher alpha-amylase rest to preserve structure without sacrificing the dry finish expected in the style." }
    ],
    defensible: [
      { id: "decoction", response: "Incorrect for this drill, but defensible. A decoction mash can be a strong traditional choice for German Pils if fully justified and properly detailed. However, it requires more explanation, process clarity, and writing time, making it higher-risk if left incomplete." }
    ],
    risky: [
      { id: "mid", response: "A mid saccharification mash can work, but it is less direct for achieving the crisp dry finish expected in German Pils and may preserve more body than ideal." }
    ],
    inconsistent: [
      { id: "high", response: "A high saccharification mash favors dextrin production and fuller body, which conflicts with the lean, crisp, highly attenuated profile expected in German Pils." }
    ]
  },

  {
    styleCode: "3B",
    styleName: "Czech Premium Pale Lager",
    strong: [
      { id: "mid", response: "A mid saccharification mash balances fermentability and dextrin production, preserving the rounded malt body expected in Czech Premium Pale Lager while still allowing sufficient attenuation to balance firm bitterness." },
      { id: "hochkurz", response: "A Hochkurz step mash is a strong traditional approach when fully specified. A lower beta-amylase rest followed by a higher alpha-amylase rest provides balanced fermentability and body while aligning with classic continental lager process." }
    ],
    defensible: [
      { id: "decoction", response: "Incorrect for this drill, but defensible. A decoction mash can be a strong traditional choice for Czech Premium Pale Lager if fully justified and properly detailed. However, it requires more explanation, process clarity, and writing time, making it higher-risk if left incomplete." }
    ],
    risky: [
      { id: "low", response: "A lower saccharification mash may overemphasize fermentability and push the beer drier than intended, reducing the rounded malt character expected in the style." }
    ],
    inconsistent: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins, pushing the beer toward a heavier finish that works against the intended balance and drinkability." }
    ]
  },

  {
    styleCode: "6A",
    styleName: "Märzen",
    strong: [
      { id: "mid", response: "A mid saccharification mash balances fermentability and dextrin production, preserving the smooth malt richness expected in Märzen while still allowing sufficient attenuation to avoid a heavy or sweet finish." },
      { id: "hochkurz", response: "A Hochkurz step mash is a strong traditional approach when fully specified. A lower beta-amylase rest followed by a higher alpha-amylase rest provides balanced fermentability and malt structure while aligning with traditional continental lager process." }
    ],
    defensible: [
      { id: "decoction", response: "Incorrect for this drill, but defensible. A decoction mash can be a strong traditional choice for Märzen if fully justified and properly detailed. However, it requires more explanation, process clarity, and writing time, making it higher-risk if left incomplete." }
    ],
    risky: [
      { id: "low", response: "A lower saccharification mash may overemphasize fermentability and dry the beer out more than intended, reducing the smooth malt richness expected in Märzen." }
    ],
    inconsistent: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins and push the beer toward a heavier or sweeter finish, reducing drinkability." }
    ]
  },

  {
    styleCode: "4B",
    styleName: "Festbier",
    strong: [
      { id: "low", response: "A lower saccharification mash promotes a highly fermentable wort, supporting the dry, highly drinkable finish expected in Festbier while preserving enough malt structure through the grist and lager fermentation profile." },
      { id: "hochkurz", response: "A Hochkurz step mash is a strong traditional approach when fully specified. A lower beta-amylase rest followed by a higher alpha-amylase rest supports strong attenuation while preserving structure and aligning with traditional continental lager process." }
    ],
    defensible: [
      { id: "decoction", response: "Incorrect for this drill, but defensible. A decoction mash can be a strong traditional choice for Festbier if fully justified and properly detailed. However, it requires more explanation, process clarity, and writing time, making it higher-risk if left incomplete." }
    ],
    risky: [
      { id: "mid", response: "A mid saccharification mash can work, but it may preserve more body than ideal for a style that should finish cleaner and more attenuated than Märzen." }
    ],
    inconsistent: [
      { id: "high", response: "A high saccharification mash favors dextrin production and fuller body, which conflicts with the clean, highly drinkable finish expected in Festbier." }
    ]
  },

  {
    styleCode: "9A",
    styleName: "Doppelbock",
    strong: [
      { id: "mid", response: "A mid saccharification mash balances fermentability and dextrin production, preserving the rich malt depth and fuller body expected in Doppelbock while still allowing enough attenuation to avoid a cloying finish." },
      { id: "hochkurz", response: "A Hochkurz step mash is a strong traditional approach when fully specified. A lower beta-amylase rest followed by a higher alpha-amylase rest provides balanced fermentability and malt structure while aligning with traditional continental lager brewing practice." }
    ],
    defensible: [
      { id: "decoction", response: "Incorrect for this drill, but defensible. A decoction mash can be a strong traditional choice for Doppelbock if fully justified and properly detailed. However, it requires more explanation, process clarity, and writing time, making it higher-risk if left incomplete." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins in an already high-gravity beer, increasing the risk of a heavy, cloying finish." }
    ],
    inconsistent: [
      { id: "low", response: "A lower saccharification mash may overemphasize fermentability and dry the beer out more than intended, reducing the rich malt fullness expected in Doppelbock." }
    ]
  },

  {
    styleCode: "10A",
    styleName: "Weissbier",
    strong: [
      { id: "mid", response: "A mid saccharification mash balances fermentability and dextrin production, supporting drinkability while preserving the soft wheat body expected in Weissbier." },
      { id: "proteinStep", response: "A protein rest followed by a step mash can be a strong traditional choice for Weissbier when fully justified, as the high wheat grist may benefit from protein management while still supporting balanced fermentability." }
    ],
    defensible: [
      { id: "hochkurz", response: "Incorrect for this drill, but defensible. A Hochkurz step mash can be defended when fully specified, particularly as a structured step approach, though it is less directly tied to the wheat-driven process considerations than a protein-inclusive schedule." }
    ],
    risky: [
      { id: "low", response: "A lower saccharification mash may overemphasize fermentability and thin the beer more than intended, reducing the soft rounded body expected in Weissbier." }
    ],
    inconsistent: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins and reduce drinkability in a style that should remain lively and refreshing." }
    ]
  },

  {
    styleCode: "26C",
    styleName: "Belgian Tripel",
    strong: [
      { id: "low", response: "A lower saccharification mash promotes a highly fermentable wort, helping achieve the dry finish expected in Belgian Tripel while allowing the expressive yeast and sugar contribution to work toward high attenuation." }
    ],
    defensible: [
      { id: "mid", response: "Incorrect for this drill, but defensible. A mid saccharification mash can be defended if paired with a highly attenuative Belgian strain and meaningful simple sugar contribution, but it is less direct than a lower mash for reliably achieving the dry finish expected in style." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash preserves more dextrins and increases the risk of a fuller, sweeter finish that conflicts with the highly attenuated profile expected in Belgian Tripel." }
    ],
    inconsistent: [
      { id: "proteinStep", response: "A protein-focused mash approach adds unnecessary process complexity without supporting the primary fermentability or grist needs of Belgian Tripel." }
    ]
  },

  {
    styleCode: "15B",
    styleName: "Irish Stout",
    strong: [
      { id: "low", response: "A lower saccharification mash promotes sufficient fermentability to achieve the dry finish expected in Irish Stout, while flaked barley preserves body and mouthfeel so the beer does not become thin." }
    ],
    defensible: [
      { id: "mid", response: "Incorrect for this drill, but defensible. A mid saccharification mash can work, but because Irish Stout already gains body from flaked barley and less fermentable roasted grains, a slightly lower mash temperature is generally the stronger design choice for achieving a crisp dry finish." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash favors dextrin production and fuller body, which may fight the dry finish expected in Irish Stout." }
    ],
    inconsistent: [
      { id: "proteinStep", response: "A protein rest adds unnecessary process complexity without supporting the style’s fermentability or grist needs." }
    ]
  },

  {
    styleCode: "20A",
    styleName: "American Porter",
    strong: [
      { id: "mid", response: "A mid saccharification mash balances fermentability and dextrin production, preserving sufficient body and malt depth for American Porter while still allowing enough attenuation to avoid a heavy or overly sweet finish." }
    ],
    defensible: [
      { id: "low", response: "Incorrect for this drill, but defensible. A lower saccharification mash can still be defended, particularly if the goal is a drier interpretation with sharper roast expression, but it is less aligned with the typical fuller malt structure expected in American Porter." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins and push the beer toward a heavier, sweeter finish, reducing drinkability and throwing the balance off." }
    ],
    inconsistent: [
      { id: "proteinStep", response: "A protein rest adds unnecessary complexity without supporting the fermentability or grist needs of a typical American Porter recipe." }
    ]
  },

  {
    styleCode: "11C",
    styleName: "Strong Bitter",
    strong: [
      { id: "mid", response: "A mid saccharification mash balances fermentability and dextrin production, preserving enough malt body to support the style while maintaining the drinkability and bitterness balance expected in Strong Bitter." }
    ],
    defensible: [
      { id: "low", response: "Incorrect for this drill, but defensible. A lower saccharification mash can be defended if targeting a drier interpretation, but it is less aligned with the moderate malt body and balanced character typically expected in Strong Bitter." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins, pushing the beer toward a fuller or sweeter finish that can disrupt drinkability and bitterness balance." }
    ],
    inconsistent: [
      { id: "decoction", response: "A decoction mash adds unnecessary process complexity without meaningfully supporting the core design goals of Strong Bitter, which are balance, drinkability, and clean recipe execution." }
    ]
  },

  {
    styleCode: "21A",
    styleName: "American IPA",
    strong: [
      { id: "low", response: "A lower saccharification mash promotes a highly fermentable wort, supporting the dry finish, clean drinkability, and strong hop expression expected in American IPA." }
    ],
    defensible: [
      { id: "mid", response: "Incorrect for this drill, but defensible. A mid saccharification mash can be defended, particularly if targeting a slightly fuller modern interpretation, but it is less direct than a lower mash for maximizing hop clarity and drinkability." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins, creating sweetness and fullness that can interfere with hop balance and reduce drinkability." }
    ],
    inconsistent: [
      { id: "decoction", response: "A decoction mash adds unnecessary process complexity without meaningfully supporting the primary design goals of American IPA, which are high attenuation, clean fermentation, and hop-forward balance." }
    ]
  },

  {
    styleCode: "22A",
    styleName: "Double IPA",
    strong: [
      { id: "low", response: "A lower saccharification mash promotes a highly fermentable wort, helping achieve the dry finish and high drinkability needed to keep a strong Double IPA focused on hop expression rather than residual sweetness." }
    ],
    defensible: [
      { id: "mid", response: "Incorrect for this drill, but defensible. A mid saccharification mash can be defended if paired with a highly attenuative yeast and optional sugar contribution, but it is less direct than a lower mash for achieving the dry, hop-focused balance expected in Double IPA." }
    ],
    risky: [
      { id: "high", response: "A high saccharification mash may preserve excessive dextrins in an already high-gravity beer, increasing the risk of sweetness, heaviness, and reduced hop clarity." }
    ],
    inconsistent: [
      { id: "decoction", response: "A decoction mash adds unnecessary process complexity without meaningfully supporting the primary design goals of Double IPA, which are high attenuation, clean fermentation, and hop-forward drinkability." }
    ]
  }
];

// MODULE 5 — Fermentation: Yeast Family + Schedule
// Style → choose yeast family → choose fermentation schedule

const yeastFamilyOptions = [
  {
    id: "german_lager",
    label: "German lager strain",
    examples: "Examples: W-34/70, WLP830, Wyeast 2124",
    explanation: "A German lager strain produces a clean fermentation profile suitable for pale and amber German lagers."
  },
  {
    id: "czech_lager",
    label: "Czech lager strain",
    examples: "Examples: Wyeast 2278, WLP802",
    explanation: "A Czech lager strain supports a clean profile while preserving the rounded malt and hop balance expected in Czech lager styles."
  },
  {
    id: "clean_american_ale",
    label: "Clean American ale strain / Chico-type",
    examples: "Examples: US-05, WLP001, Wyeast 1056",
    explanation: "A clean American ale strain ferments cleanly and keeps the focus on malt, hops, and attenuation rather than yeast character."
  },
  {
    id: "english_ale",
    label: "English ale strain",
    examples: "Examples: Wyeast 1968, WLP002, Lallemand Windsor",
    explanation: "An English ale strain can provide moderate ester character and malt-supporting fermentation character."
  },
  {
    id: "irish_ale",
    label: "Irish ale strain",
    examples: "Examples: Wyeast 1084, WLP004",
    explanation: "An Irish ale strain supports a clean-to-lightly estery profile appropriate for dry, roast-forward Irish styles."
  },
  {
  id: "german_expressive",
  label: "Expressive German ale strain",
  examples: "Examples: Wyeast 3068, WLP300",
  explanation: "An expressive German ale strain produces the ester and phenolic character expected in traditional German expressive fermentation styles."
},
  {
    id: "belgian_abbey",
    label: "Belgian abbey strain",
    examples: "Examples: Wyeast 3787, WLP530",
    explanation: "A Belgian abbey strain supports high attenuation with the ester and phenolic complexity expected in Belgian strong ales."
  }
];

const fermentationScheduleOptions = [
  {
    id: "lager_classic",
    label: "8–12°C primary / cleanup rest / cold conditioning",
    explanation: "Classic cool fermentation supports clean attenuation and smooth maturation appropriate for lager styles."
  },
  {
    id: "american_clean",
    label: "18–20°C controlled fermentation",
    explanation: "A controlled fermentation in this range supports clean attenuation with restrained yeast character."
  },
  {
    id: "english_moderate",
    label: "18–21°C controlled fermentation with moderate ester expression",
    explanation: "This schedule supports moderate ester development while maintaining control and balance."
  },
  {
    id: "irish_clean",
    label: "17–20°C restrained fermentation",
    explanation: "A restrained fermentation helps preserve clean roast expression and drinkability."
  },
  {
    id: "wheat_expression",
    label: "17–22°C fermentation encouraging ester/phenolic expression",
    explanation: "This range supports expressive yeast character including ester and phenolic development."
  },
  {
    id: "belgian_rise",
    label: "18°C start / controlled rise to 24–26°C",
    explanation: "A controlled temperature rise encourages expressive Belgian character and complete attenuation."
  },
  {
    id: "warm_clean_fast",
    label: "20–23°C controlled fermentation for faster completion",
    explanation: "A plausible clean-fermentation approach, but often warmer than ideal for styles requiring restrained fermentation character."
  },
  {
    id: "cool_restrained",
    label: "14–16°C restrained fermentation with extended conditioning",
    explanation: "A plausible restrained schedule, but often mismatched for styles requiring either colder lagering or warmer expressive ale fermentation."
  },
  {
    id: "steady_room_temp",
    label: "19–21°C steady fermentation through completion",
    explanation: "A plausible general-purpose ale schedule, but not always appropriate for style-specific fermentation goals."
  }
];

const module5FermentationQuestions = [
  {
    styleCode: "5D",
    styleName: "German Pils",
    correctYeast: "german_lager",
    correctSchedules: ["lager_classic"],
    rationale: "For German Pils, clean lager fermentation supports the crisp finish, restrained malt profile, and firm bitterness expected in the style."
  },
  {
    styleCode: "3B",
    styleName: "Czech Premium Pale Lager",
    correctYeast: "czech_lager",
    correctSchedules: ["lager_classic"],
    rationale: "For Czech Premium Pale Lager, clean lager fermentation preserves the rounded malt profile and balanced bitterness without adding distracting yeast character."
  },
  {
    styleCode: "6A",
    styleName: "Märzen",
    correctYeast: "german_lager",
    correctSchedules: ["lager_classic"],
    rationale: "For Märzen, clean lager fermentation lets rich malt character come forward while keeping the finish smooth and not overly sweet."
  },
  {
    styleCode: "4B",
    styleName: "Festbier",
    correctYeast: "german_lager",
    correctSchedules: ["lager_classic"],
    rationale: "For Festbier, clean lager fermentation supports a smooth, elegant malt profile and high drinkability."
  },
  {
    styleCode: "9A",
    styleName: "Doppelbock",
    correctYeast: "german_lager",
    correctSchedules: ["lager_classic"],
    rationale: "For Doppelbock, clean lager fermentation allows deep malt richness while controlling fermentation byproducts in a high-gravity beer."
  },
  {
    styleCode: "10A",
    styleName: "Weissbier",
    correctYeast: "german_expressive",
    correctSchedules: ["wheat_expression"],
    rationale: "For Weissbier, fermentation should encourage appropriate banana ester and clove phenol character from the wheat yeast."
  },
  {
    styleCode: "26C",
    styleName: "Belgian Tripel",
    correctYeast: "belgian_abbey",
    correctSchedules: ["belgian_rise"],
    rationale: "For Belgian Tripel, controlled fermentation supports high attenuation and expressive Belgian yeast character without harsh alcohol."
  },
  {
    styleCode: "15B",
    styleName: "Irish Stout",
    correctYeast: "irish_ale",
    correctSchedules: ["irish_clean"],
    rationale: "For Irish Stout, restrained ale fermentation keeps the focus on dry roast character and a clean finish."
  },
  {
    styleCode: "20A",
    styleName: "American Porter",
    correctYeast: "clean_american_ale",
    correctSchedules: ["american_clean"],
    rationale: "For American Porter, clean American fermentation keeps roast, malt depth, and hop bitterness in focus without prominent yeast character."
  },
  {
    styleCode: "11C",
    styleName: "Strong Bitter",
    correctYeast: "english_ale",
    correctSchedules: ["english_moderate"],
    rationale: "For Strong Bitter, English ale fermentation supports moderate esters and malt expression while maintaining drinkability."
  },
  {
    styleCode: "21A",
    styleName: "American IPA",
    correctYeast: "clean_american_ale",
    correctSchedules: ["american_clean"],
    rationale: "For American IPA, clean American fermentation preserves hop aroma, bitterness, and attenuation without distracting yeast character."
  },
  {
    styleCode: "22A",
    styleName: "Double IPA",
    correctYeast: "clean_american_ale",
    correctSchedules: ["american_clean"],
    rationale: "For Double IPA, clean American fermentation supports high attenuation and hop focus while avoiding excess sweetness or yeast-derived distraction."
  }
];
let currentStyle = null;
let currentCategory = "strength";
let currentMode = "foundation";
let correctCount = 0;
let incorrectCount = 0;
let missedQuestions = [];
let activeStudySet = "foundation";

function getFilteredStyles() {
    switch (activeStudySet) {
        case "highFrequency":
            return styles.filter(style => style.highFrequencyCompare);

        case "recipe":
            return styles.filter(style => style.recipeEligible);

        case "comparison":
            return styles.filter(style => style.comparisonEligible);

        case "missed":
            return missedQuestions.length > 0
                ? styles.filter(style =>
                    missedQuestions.some(missed => missed.style === style.name)
                  )
                : styles.filter(style => style.anchorStatus === "approved");

        case "foundation":
        default:
            return styles.filter(style => style.anchorStatus === "approved");
    }
}

function getRandomStyle() {
    const filteredStyles = getFilteredStyles();
    return filteredStyles[Math.floor(Math.random() * filteredStyles.length)];
}

function getRecipeStyles() {
    return styles.filter(style => recipeStyleCodes.includes(style.code));
}

function getRandomRecipeStyle() {
    const recipeStyles = getRecipeStyles();
    return recipeStyles[Math.floor(Math.random() * recipeStyles.length)];
}

function getRandomCategory() {
    const categories = Object.keys(categoryOptions);
    return categories[Math.floor(Math.random() * categories.length)];
}

function formatRange(data) {
    if (data.min === null || data.max === null || data.unit === null) {
        return data.text || "Qualitative BJCP descriptor";
    }


    
    return `${data.min}–${data.max} ${data.unit}`;
}

function litersToGallons(liters) {
    return liters * 0.264172;
}

function kgToLb(kg) {
    return kg * 2.20462;
}

function lbToKg(lb) {
    return lb / 2.20462;
}

function formatRecipeVolume(liters) {
    if (recipeSetup.units === "imperial") {
        return `${litersToGallons(liters).toFixed(1)} gal`;
    }

    return `${liters} L`;
}

function formatVolumeOption(liters) {
    return `${liters} L / ${litersToGallons(liters).toFixed(1)} gal`;
}

function sumFermentableCategories(fermentables) {
    const totals = {
        base: 0,
        wheat: 0,
        structuralHelper: 0,
        processHelper: 0,
        flakedAdjunct: 0,
        character: 0,
        darkCharacter: 0,
        roast: 0,
        sugar: 0
    };

    fermentables.forEach(item => {
        const category = fermentableCategoryMap[item.ingredient];

        if (category && totals.hasOwnProperty(category)) {
            totals[category] += item.pct;
        }
    });

    return totals;
}

function evaluateCategoryAgainstRules(category, value, rules) {
    let status = "Strong";

    const hasMin = rules.strongMin !== undefined || rules.defendMin !== undefined;
    const hasMax = rules.strongMax !== undefined || rules.defendMax !== undefined;

    if (hasMin) {
        const strongMin = rules.strongMin ?? rules.defendMin;
        const defendMin = rules.defendMin ?? strongMin;

        if (value < defendMin) {
            status = "Difficult to Defend";
        } else if (value < strongMin) {
            status = "Defensible";
        }
    }

    if (hasMax) {
        const strongMax = rules.strongMax ?? rules.defendMax;
        const defendMax = rules.defendMax ?? strongMax;

        if (value > defendMax) {
            status = "Difficult to Defend";
        } else if (value > strongMax && status !== "Difficult to Defend") {
            status = "Defensible";
        }
    }

    return {
        category,
        value,
        status
    };
}

function evaluateStyleGrainRules(styleCode, fermentables) {
    const styleRules = recipeGrainCategoryRules[styleCode];

    if (!styleRules) {
        return {
            status: "Defensible",
            message: "No grain category rules found for this style.",
            categoryResults: []
        };
    }

    const categoryTotals = sumFermentableCategories(fermentables);

    const categoryResults = Object.keys(categoryTotals)
        .filter(category => styleRules[category])
        .map(category => {
            return evaluateCategoryAgainstRules(
                category,
                categoryTotals[category],
                styleRules[category]
            );
        });

    let overallStatus = "Strong";

    if (categoryResults.some(result => result.status === "Difficult to Defend")) {
        overallStatus = "Difficult to Defend";
    } else if (categoryResults.some(result => result.status === "Defensible")) {
        overallStatus = "Defensible";
    }

    const complexityNote = fermentables.length >= 7
        ? "Complex recipe. Be prepared to justify each ingredient."
        : "";

    return {
        status: overallStatus,
        styleNote: styleRules.note,
        complexityNote,
        categoryResults
    };
}

function formatCategoryName(category) {
    const names = {
        base: "Base malt",
        wheat: "Wheat",
        structuralHelper: "Structural helper",
        processHelper: "Process helper",
        flakedAdjunct: "Flaked adjunct",
        character: "Character malt",
        darkCharacter: "Dark character malt",
        roast: "Roast",
        sugar: "Sugar"
    };

    return names[category] || category;
}

function formatGrainRuleFeedback(grainRuleResult) {
    const categoryHtml = grainRuleResult.categoryResults
        .map(result => `
            ${formatCategoryName(result.category)}: ${result.value}% — <strong>${result.status}</strong>
        `)
        .join("<br>");

    const coachingNotes = grainRuleResult.categoryResults
        .filter(result => result.status !== "Strong")
        .map(result => {
            switch (result.category) {
                case "base":
                    return "Base malt structure is outside the strongest range. Be prepared to justify the overall foundation of the recipe.";

                case "wheat":
                    return "Wheat usage is outside the strongest range. Be prepared to justify its structural role.";

                case "structuralHelper":
                    return "Structural helper usage is elevated or absent relative to ideal style expression.";

                case "processHelper":
                    return "Process helper usage may need justification.";

                case "flakedAdjunct":
                    return "Flaked adjunct usage may not strongly support expected mouthfeel or texture.";

                case "character":
                    return "Character malt usage may shift the malt profile away from the strongest style expression.";

                case "darkCharacter":
                    return "Dark character malt usage may push the beer beyond the intended style expression.";

                case "roast":
                    return "Roast contribution may not align cleanly with the expected style profile.";

                case "sugar":
                    return "Sugar usage may require justification relative to attenuation and style intent.";

                default:
                    return null;
            }
        })
        .filter(Boolean);

    const notesHtml = coachingNotes.length
        ? `<br><br><strong>Notes:</strong><br>${coachingNotes.join("<br>")}`
        : "";

    return `
        <strong>Grain Architecture:</strong> ${grainRuleResult.status}<br><br>
        ${categoryHtml}
        ${notesHtml}
        ${grainRuleResult.complexityNote ? `<br><br><em>${grainRuleResult.complexityNote}</em>` : ""}
    `;
}
function updateScoreDisplay() {
    const total = correctCount + incorrectCount;
    const accuracy = total === 0 ? 0 : Math.round((correctCount / total) * 100);

    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
    accuracyDisplay.textContent = `${accuracy}%`;
}
function setCategoryVisibility(show) {
    categorySelect.style.display = show ? "flex" : "none";
}
function renderQuestion(category = currentCategory) {
    currentCategory = category === "mixed" ? getRandomCategory() : category;
    currentStyle = getRandomStyle();

    const data = currentStyle[currentCategory];

    styleName.textContent = `Style: ${currentStyle.code} ${currentStyle.name}`;
    questionText.textContent = `Question: ${capitalize(currentCategory)} Identity?`;
    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    categoryOptions[currentCategory].forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", function () {
            checkAnswer(answer, data);
        });

        answerContainer.appendChild(button);
    });
}

function renderCompareQuestion() {
    currentCompareCluster =
        compareClusters[Math.floor(Math.random() * compareClusters.length)];

    compareStep = "shared";
    compareIndex = 0;
    selectedCompareOptions = [];

    renderCompareSharedIdentity();
}

function renderCompareSharedIdentity() {
    styleName.textContent = "Compare Drill";
    questionText.textContent = currentCompareCluster.styles.join(" / ");

    feedbackBox.innerHTML = `
        <strong>Step 1:</strong> Choose the best shared identity.
    `;

    answerContainer.innerHTML = "";

    const options = [
        {
            text: currentCompareCluster.sharedIdentity.best,
            type: "best"
        },
        ...currentCompareCluster.sharedIdentity.weaker.map(text => ({
            text,
            type: "weaker"
        }))
    ].sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;

        button.addEventListener("click", function () {
            if (option.type === "best") {
                button.style.backgroundColor = "#16a34a";
                button.style.color = "white";

                feedbackBox.innerHTML = `
                    <strong class="correct">Correct.</strong><br>
                    This is the strongest shared identity because it captures the family clearly and gives useful compare language.
                `;

                setTimeout(renderCompareAnchor, 700);
                        } else {
                button.style.backgroundColor = "#f59e0b";
                button.style.color = "white";

             feedbackBox.innerHTML = `
                <strong>Incorrect.</strong><br>
                "${option.text}" may fit part of the group, but it does not accurately define all three styles.<br><br>
                Strongest answer:<br>
                <strong>${currentCompareCluster.sharedIdentity.best}</strong><br><br>
              Try again.
`;

                return;
            }
        });

        answerContainer.appendChild(button);
    });
}

function renderCompareAnchor() {
    compareStep = "anchor";
    selectedCompareOptions = [];

    styleName.textContent = "Compare Drill";
    questionText.textContent = "Choose the best mental anchor.";

    feedbackBox.innerHTML = `
        <strong>Step 2:</strong> Pick the style that works best as the comparison anchor.
    `;

    answerContainer.innerHTML = "";

    const shuffledStyles = [...currentCompareCluster.styles].sort(() => Math.random() - 0.5);

        shuffledStyles.forEach(style => {
        const button = document.createElement("button");
        button.textContent = style;

        button.addEventListener("click", function () {
            if (style === currentCompareCluster.anchor.correct) {
                button.style.backgroundColor = "#16a34a";
                button.style.color = "white";

                feedbackBox.innerHTML = `
                    <strong class="correct">Correct.</strong><br>
                    ${style} is the best anchor.
                `;

                setTimeout(renderCompareDescriptorStep, 700);
            } else {
                button.style.backgroundColor = "#dc2626";
                button.style.color = "white";

                feedbackBox.innerHTML = `
                    <strong class="incorrect">Not the best anchor.</strong><br>
                    ${currentCompareCluster.anchor.feedback[style] || "Choose the more central comparison point."}<br><br>
                    Try again.
                `;
            }
        });

        answerContainer.appendChild(button);
    });
}

function renderCompareDescriptorStep() {
    compareStep = "descriptors";
    selectedCompareOptions = [];

    const comparison = currentCompareCluster.comparisons[compareIndex];

    styleName.textContent = "Compare Drill";
    questionText.textContent = comparison.prompt;

    feedbackBox.innerHTML = `
        <strong>Step ${compareIndex + 3}:</strong> Pick all that apply.
    `;

    answerContainer.innerHTML = "";

    const allOptions = [...comparison.correct, ...comparison.distractors]
        .sort(() => Math.random() - 0.5);

    allOptions.forEach(optionText => {
        const button = document.createElement("button");
        button.textContent = optionText;
        button.classList.add("compare-chip");

        button.addEventListener("click", function () {
            button.classList.toggle("selected");

            if (selectedCompareOptions.includes(optionText)) {
                selectedCompareOptions = selectedCompareOptions.filter(item => item !== optionText);
            } else {
                selectedCompareOptions.push(optionText);
            }
        });

        answerContainer.appendChild(button);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("submit-answer");

    submitButton.addEventListener("click", function () {
        checkCompareDescriptors(comparison);
    });

    answerContainer.appendChild(submitButton);
}

function checkCompareDescriptors(comparison) {
    const correctSet = new Set(comparison.correct);
    const selectedSet = new Set(selectedCompareOptions);

    const correctSelected = selectedCompareOptions.filter(item => correctSet.has(item));
    const wrongSelected = selectedCompareOptions.filter(item => !correctSet.has(item));
    const missed = comparison.correct.filter(item => !selectedSet.has(item));

    if (wrongSelected.length === 0 && missed.length === 0) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    updateScoreDisplay();

    feedbackBox.innerHTML = `
        <strong>Review for ${comparison.style}</strong><br><br>

        <strong class="correct">Correct selections:</strong><br>
        ${correctSelected.length ? correctSelected.join("<br>") : "None"}<br><br>

        <strong class="incorrect">Wrong selections:</strong><br>
        ${wrongSelected.length ? wrongSelected.join("<br>") : "None"}<br><br>

        <strong>Missed correct answers:</strong><br>
        ${missed.length ? missed.join("<br>") : "None"}
    `;

    answerContainer.innerHTML = "";

    const continueButton = document.createElement("button");

    if (compareIndex < currentCompareCluster.comparisons.length - 1) {
        continueButton.textContent = "Continue";
        continueButton.addEventListener("click", function () {
            compareIndex++;
            renderCompareDescriptorStep();
        });
    } else {
        continueButton.textContent = "Show Model Answer";
        continueButton.addEventListener("click", renderCompareModelAnswer);
    }

    answerContainer.appendChild(continueButton);
}

function renderCompareModelAnswer() {
    styleName.textContent = currentCompareCluster.title;
    questionText.textContent = currentCompareCluster.styles.join(" / ");

    const examplesHtml = Object.entries(currentCompareCluster.commercialExamples)
        .map(([style, examples]) => `
            <strong>${style}:</strong><br>
            ${examples.join("<br>")}
        `)
        .join("<br><br>");

    feedbackBox.innerHTML = `
        <strong>Model Answer:</strong><br>
        ${currentCompareCluster.modelAnswer}<br><br>

        <strong>Classic Commercial Examples:</strong><br>
        ${examplesHtml}
    `;

    answerContainer.innerHTML = "";
}
function renderGravityQuestion() {
    const question =
        module1GravityQuestions[Math.floor(Math.random() * module1GravityQuestions.length)];

    currentStyle = null;

    styleName.textContent = "Gravity Drill";

    questionText.textContent =
        `Target ABV: ${question.abv}% | Target FG: ${question.fg.toFixed(3)} | Estimate OG`;

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Enter OG (example: 1.050)";

    const button = document.createElement("button");
    button.textContent = "Check Answer";

        button.addEventListener("click", function () {
        checkGravityAnswer(input.value, question);
    });

    input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        button.click();
    }
});
    answerContainer.appendChild(input);
    answerContainer.appendChild(button);

    input.focus();
}

function renderIbuQuestion() {
    const question =
        module2IbuQuestions[Math.floor(Math.random() * module2IbuQuestions.length)];

    const style = styles.find(s => s.code === question.styleCode);

    styleName.textContent = `Style: ${style.code} ${style.name}`;

questionText.textContent =
    `Target OG: ${question.targetOg.toFixed(3)} | Estimate target IBU`;

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const input = document.createElement("input");
   input.type = "number";
    input.placeholder = "Enter IBU target";

    const button = document.createElement("button");
    button.textContent = "Check Answer";

    button.addEventListener("click", function () {
        checkIbuAnswer(input.value, question, style);
    });

    input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        button.click();
    }
});
    answerContainer.appendChild(input);
    answerContainer.appendChild(button);

  input.focus();
}


    function renderGristQuestion() {
    const question =
        module3GristQuestions[Math.floor(Math.random() * module3GristQuestions.length)];

    styleName.textContent = "Grist Drill";
    questionText.textContent =
    `Target OG: ${question.og.toFixed(3)} | 21.5 L into fermenter | 70% BHE | Estimate kg grist`;

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Enter kg";

    const button = document.createElement("button");
    button.textContent = "Check Answer";

    button.addEventListener("click", function () {
        checkGristAnswer(input.value, question);
    });

    input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        button.click();
    }
});
    answerContainer.appendChild(input);
    answerContainer.appendChild(button);

    input.focus();
}
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function renderMashQuestion() {
    const question =
        module4MashQuestions[Math.floor(Math.random() * module4MashQuestions.length)];

    styleName.textContent = `Style: ${question.styleCode} ${question.styleName}`;
    questionText.textContent = "Choose the strongest mash strategy for this recipe.";

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const choices = [
        { ...pickRandom(question.strong), tier: "strong" },
        { ...pickRandom(question.defensible), tier: "defensible" },
        { ...pickRandom(question.risky), tier: "risky" },
        { ...pickRandom(question.inconsistent), tier: "inconsistent" }
    ];

    shuffleArray(choices).forEach(choice => {
        const button = document.createElement("button");
        button.textContent = mashStrategyOptions[choice.id];

        button.addEventListener("click", function () {
            checkMashAnswer(choice, choices);
        });

        answerContainer.appendChild(button);
    });
}
function renderFermentationYeastQuestion() {
    const question =
        module5FermentationQuestions[Math.floor(Math.random() * module5FermentationQuestions.length)];

    styleName.textContent = `Style: ${question.styleCode} ${question.styleName}`;
    questionText.textContent = "Choose an appropriate yeast family.";

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    yeastFamilyOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;

        button.addEventListener("click", function () {
            checkFermentationYeastAnswer(option, question);
        });

        answerContainer.appendChild(button);
    });
}
function checkFermentationYeastAnswer(option, question) {
    const isCorrect = option.id === question.correctYeast;

    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === option.label) {
            button.style.backgroundColor = isCorrect ? "#16a34a" : "#dc2626";
            button.style.color = "white";
        }
    });

    if (isCorrect) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${option.explanation}<br>
            ${option.examples}
        `;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        const correctYeast = yeastFamilyOptions.find(y => y.id === question.correctYeast);

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            ${question.styleName} calls for: <strong>${correctYeast.label}</strong><br>
            ${correctYeast.examples}
        `;
    }

   const proceedButton = document.createElement("button");
proceedButton.textContent = "Continue to Fermentation Schedule";

proceedButton.addEventListener("click", function () {
    renderFermentationScheduleQuestion(question);
});

answerContainer.innerHTML = "";
answerContainer.appendChild(proceedButton);
}
function renderFermentationScheduleQuestion(question) {
    styleName.textContent = `Style: ${question.styleCode} ${question.styleName}`;
    questionText.textContent = "Choose an appropriate fermentation schedule.";

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const correctSet = new Set(question.correctSchedules);

    const correctOptions = fermentationScheduleOptions.filter(option =>
        correctSet.has(option.id)
    );

    const incorrectOptions = fermentationScheduleOptions.filter(option =>
        !correctSet.has(option.id)
    );

    const selectedCorrect = correctOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(2, correctOptions.length));

    const selectedIncorrect = incorrectOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const choices = [...selectedCorrect, ...selectedIncorrect]
        .sort(() => Math.random() - 0.5);

    choices.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;

        button.addEventListener("click", function () {
            checkFermentationScheduleAnswer(option, question);
        });

        answerContainer.appendChild(button);
    });
}
function checkFermentationScheduleAnswer(option, question) {
    const isCorrect = question.correctSchedules.includes(option.id);

    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === option.label) {
            button.style.backgroundColor = isCorrect ? "#16a34a" : "#dc2626";
            button.style.color = "white";
        }
    });

    if (isCorrect) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${option.explanation}<br><br>
            <strong>Style rationale:</strong><br>
            ${question.rationale}
        `;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        const correctLabels = question.correctSchedules
            .map(id => fermentationScheduleOptions.find(option => option.id === id)?.label)
            .filter(Boolean)
            .join("<br>");

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            ${option.explanation}<br><br>
            <strong>Better schedule for this style:</strong><br>
            ${correctLabels}<br><br>
            <strong>Style rationale:</strong><br>
            ${question.rationale}
        `;
    }
}

function checkGravityAnswer(userInput, question) {
    let cleaned = userInput.trim();

    if (!cleaned) {
        feedbackBox.innerHTML = `
            <strong class="incorrect">Enter an answer.</strong>
        `;
        return;
    }

        if (!cleaned.startsWith("1.")) {
        if (cleaned.length <= 3) {
            cleaned = "1." + cleaned.padStart(3, "0");
        }
    }

    const userOg = parseFloat(cleaned);

    const trueOg = question.fg + (question.abv / 131.25);

    const userPoints = Math.round((userOg - 1) * 1000);
    const truePoints = Math.round((trueOg - 1) * 1000);

    if (Math.abs(userPoints - truePoints) <= 1) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            Expected OG: 1.${truePoints}
        `;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You entered: ${userOg.toFixed(3)}<br>
            Expected OG: 1.${truePoints}
        `;
    }
}

function checkIbuAnswer(userInput, question, style) {
    const userIbu = parseInt(userInput.trim(), 10);

    if (isNaN(userIbu)) {
        feedbackBox.innerHTML = `
            <strong class="incorrect">Enter a number.</strong>
        `;
        return;
    }

    const ogPoints = Math.round((question.targetOg - 1) * 1000);

    const minIbu = Math.round(ogPoints * style.bugu.min);
    const maxIbu = Math.round(ogPoints * style.bugu.max);

    if (userIbu >= minIbu && userIbu <= maxIbu) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            Defensible range: ${minIbu}–${maxIbu} IBU<br>
          Balance: ${style.bugu.anchor}
         ${style.bitterness.designNote ? `<br><em>${style.bitterness.designNote}</em>` : ""}
        `;
    }else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You entered: ${userIbu} IBU<br>
            Defensible range: ${minIbu}–${maxIbu} IBU<br>
            Balance: ${style.bugu.anchor}
             ${style.bitterness.designNote ? `<br><em>${style.bitterness.designNote}</em>` : ""}
        `;
    }
}
function checkGristAnswer(userInput, question) {
    const userKg = parseFloat(userInput);

    if (isNaN(userKg)) {
        feedbackBox.innerHTML =
            `<strong class="incorrect">Enter a number.</strong>`;
        return;
    }

    const ogPoints = Math.round((question.og - 1) * 1000);
    const correctKg = ogPoints / 10;

    if (Math.abs(userKg - correctKg) <= 0.2) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML =
            `<strong class="correct">Correct.</strong><br>
             Expected kg: ${correctKg.toFixed(1)}`;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML =
            `<strong class="incorrect">Incorrect.</strong><br>
             You entered: ${userKg.toFixed(1)}<br>
             Expected kg: ${correctKg.toFixed(1)}`;
    }
}
function checkMashAnswer(selectedChoice, displayedChoices) {
    const isCorrect = selectedChoice.tier === "strong";

    const strongChoice = displayedChoices.find(choice => choice.tier === "strong");
    const strongLabel = mashStrategyOptions[strongChoice.id];

    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === strongLabel) {
            button.style.backgroundColor = "#16a34a";
            button.style.color = "white";
        }

        if (
            button.textContent === mashStrategyOptions[selectedChoice.id] &&
            !isCorrect
        ) {
            button.style.backgroundColor = "#dc2626";
            button.style.color = "white";
        }
    });

    if (isCorrect) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${selectedChoice.response}
        `;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            ${selectedChoice.response}<br><br>
            <strong>Stronger answer shown:</strong><br>
            ${strongLabel}<br><br>
            ${strongChoice.response}
        `;
    }
}
    
function checkAnswer(selectedAnswer, data) {
    const selectedAnchor = selectedAnswer.split(" — ")[0].replace(/\s*\(.*?\)\s*$/, "").trim();
    const correctAnswers = Array.isArray(data.anchor) ? data.anchor : [data.anchor];
    const primaryAnswer = correctAnswers[0];
    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        const buttonAnchor = button.textContent.split(" — ")[0].replace(/\s*\(.*?\)\s*$/, "").trim();

        button.disabled = true;

        if (buttonAnchor === primaryAnswer) {
            button.style.backgroundColor = "#16a34a";
            button.style.color = "white";
        } else if (correctAnswers.includes(buttonAnchor)) {
            button.style.backgroundColor = "#eab308";
            button.style.color = "black";
        }

        if (button.textContent === selectedAnswer && !correctAnswers.includes(selectedAnchor)) {
            button.style.backgroundColor = "#dc2626";
            button.style.color = "white";
        }
    });

    if (selectedAnchor === primaryAnswer) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${primaryAnswer}<br>
            Range: ${formatRange(data)}
        `;
    } else if (correctAnswers.includes(selectedAnchor)) {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong>Acceptable crossover, but not the strongest anchor.</strong><br>
            You selected: ${selectedAnchor}<br>
            Strongest anchor: ${primaryAnswer}<br>
            Range: ${formatRange(data)}
        `;
    } else {
        incorrectCount++;

        missedQuestions.push({
            style: currentStyle.name,
            category: currentCategory,
            selected: selectedAnchor,
            correct: primaryAnswer
        });

        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You selected: ${selectedAnchor}<br>
            Correct answer: ${primaryAnswer}<br>
            Range: ${formatRange(data)}
        `;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function renderRecipeSetup() {
    styleName.textContent = "Recipe Setup";

    questionText.innerHTML = `
        Choose your recipe calculation assumptions.
    `;

    feedbackBox.innerHTML = "";

    answerContainer.innerHTML = `
        <label>
            Units:
            <select id="recipe-units">
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
            </select>
        </label>

        <label>
            Post-Boil Kettle Volume:
            <select id="recipe-volume">
                ${recipeVolumeOptionsLiters.map(volume => `
                    <option value="${volume}" ${volume === 21.5 ? "selected" : ""}>
                   ${formatVolumeOption(volume)}
                    </option>
                `).join("")}
            </select>
        </label>

        <label>
            Brewhouse Efficiency:
            <select id="recipe-efficiency">
                ${recipeEfficiencyOptions.map(efficiency => `
                    <option value="${efficiency}" ${efficiency === 73 ? "selected" : ""}>
                        ${efficiency}%
                    </option>
                `).join("")}
            </select>
        </label>

        <button id="continue-recipe-setup">Continue</button>
    `;

    nextQuestionButton.style.display = "none";

    document.getElementById("continue-recipe-setup").addEventListener("click", function () {
        recipeSetup.units = document.getElementById("recipe-units").value;
        recipeSetup.postBoilVolume = parseFloat(document.getElementById("recipe-volume").value);
        recipeSetup.efficiency = parseInt(document.getElementById("recipe-efficiency").value, 10);

        renderRecipeBuild();
    });
}

function renderRecipeBuild() {
    styleName.textContent = `Style: ${currentRecipeStyle.code} ${currentRecipeStyle.name}`;

    questionText.innerHTML = `
        Build a defensible exam recipe.
        <p><strong>Setup:</strong> ${formatRecipeVolume(recipeSetup.postBoilVolume)} @ ${recipeSetup.efficiency}% BHE</p>
    `;

    feedbackBox.innerHTML = "";

    answerContainer.innerHTML = `
        <label>
            Target ABV:
            <input id="recipe-abv" type="number" step="0.1" placeholder="5.2">
        </label>

        <label>
            Target FG:
            <input id="recipe-fg" type="number" step="0.001" placeholder="1.010">
        </label>

        <label>
            Target OG:
            <input id="recipe-og" type="number" step="0.001" placeholder="1.050">
        </label>

        <label>
            Target IBU:
            <input id="recipe-ibu" type="number" step="1" placeholder="32">
        </label>

        <label>
            Target SRM:
            <input id="recipe-srm" type="number" step="1" placeholder="5">
        </label>

        <label>
    Total Grist (${recipeSetup.units === "imperial" ? "lb" : "kg"}):
    <input
        id="recipe-grist"
        type="number"
        step="0.1"
        placeholder="${recipeSetup.units === "imperial" ? "11.0" : "5.0"}"
    >
</label>


<div class="fermentable-section">
    <h4>Fermentables</h4>
    <p>Build your grain bill using actual fermentables. Leave unused rows blank.</p>

    ${Array.from({ length: 10 }, (_, i) => `
        <div class="fermentable-row">
            <select id="recipe-fermentable-${i}">
                <option value="">Unused</option>
                ${fermentableOptions.map(item => `
                    <option value="${item}">${item}</option>
                `).join("")}
            </select>

            <input
                id="recipe-fermentable-pct-${i}"
                type="number"
                step="1"
                placeholder="%"
            >
        </div>
    `).join("")}
</div>
 <label>
            Mash Strategy:
            <select id="recipe-mash">
                ${recipeMashOptions.map(option => `
                    <option value="${option.id}">${option.label}</option>
                `).join("")}
            </select>
        </label>

       <div class="hop-schedule">
            <h4>Hop Schedule</h4>
            <p>Enter estimated IBU contribution for each addition. HP/WP is reviewed separately and not counted as core boil bitterness.</p>

            ${recipeHopScheduleRows.map(row => {
                const cleanRow = row.replace("/", "").replace(" ", "").toLowerCase();

                return `
                    <div class="hop-row">
                        <strong>${row}</strong>

                        <select id="recipe-hop-${cleanRow}">
                            <option value="">No addition</option>
                            ${recipeHopOptions.map(hop => `
                                <option value="${hop}">${hop}</option>
                            `).join("")}
                        </select>

                        <input
                            id="recipe-hop-ibu-${cleanRow}"
                            type="number"
                            step="1"
                            placeholder="IBU"
                        >
                    </div>
                `;
            }).join("")}
        </div>
       

        <label>
            Yeast:
            <select id="recipe-yeast">
                ${recipeYeastOptions.map(yeast => `
                    <option value="${yeast}">${yeast}</option>
                `).join("")}
            </select>
        </label>

        <label>
            Fermentation Start Temp:
            <select id="recipe-ferment-start">
                ${recipeTempOptionsC.map(temp => `
                    <option value="${temp}">${temp}°C</option>
                `).join("")}
            </select>
        </label>

        <label>
            Fermentation Finish Temp:
            <select id="recipe-ferment-finish">
                ${recipeTempOptionsC.map(temp => `
                    <option value="${temp}">${temp}°C</option>
                `).join("")}
            </select>
        </label>

 

        <button id="evaluate-recipe">Evaluate Recipe</button>
    `;

    nextQuestionButton.style.display = "none";

    document.getElementById("evaluate-recipe").addEventListener("click", function () {
        evaluateRecipeSubmission();
    });
}

function evaluateRecipeSubmission() {
    const abv = parseFloat(document.getElementById("recipe-abv").value);
    const fg = parseFloat(document.getElementById("recipe-fg").value);
    const og = parseFloat(document.getElementById("recipe-og").value);
    const ibu = parseFloat(document.getElementById("recipe-ibu").value);
    const srm = parseFloat(document.getElementById("recipe-srm").value);

    const gristInput = parseFloat(document.getElementById("recipe-grist").value);

    const fermentables = [];

    for (let i = 0; i < 10; i++) {
        const ingredient = document.getElementById(`recipe-fermentable-${i}`).value;
        const pct = parseFloat(document.getElementById(`recipe-fermentable-pct-${i}`).value);

        if (ingredient && !isNaN(pct)) {
            fermentables.push({
                ingredient,
                pct
            });
        }
    }

    const gristKg = recipeSetup.units === "imperial"
        ? lbToKg(gristInput)
        : gristInput;

    if ([abv, fg, og, ibu, srm, gristInput].some(value => isNaN(value))) {
        feedbackBox.innerHTML = `
            <strong class="incorrect">Enter all target numbers before evaluating.</strong>
        `;
        return;
    }

    if (fermentables.length === 0) {
        feedbackBox.innerHTML = `
            <strong class="incorrect">Enter at least one fermentable before evaluating.</strong>
        `;
        return;
    }

    const abvResult = evaluateRange("ABV", abv, currentRecipeStyle.strength.min, currentRecipeStyle.strength.max, 0.5);
    const fgResult = evaluateRange("FG", fg, currentRecipeStyle.body.min, currentRecipeStyle.body.max, 0.003);
    const ibuResult = evaluateRange("IBU", ibu, currentRecipeStyle.bitterness.min, currentRecipeStyle.bitterness.max, 5);
    const srmResult = evaluateRange("SRM", srm, currentRecipeStyle.color.min, currentRecipeStyle.color.max, 3);

    const ogPoints = Math.round((og - 1) * 1000);

    const expectedGristKg =
        (ogPoints / 10)
        * (recipeSetup.postBoilVolume / 21.5)
        * (73 / recipeSetup.efficiency);

    const gristDelta = Math.abs(gristKg - expectedGristKg);

    let gristStatus = "Strong";
    let gristMessage = `${gristKg.toFixed(1)} ${recipeSetup.units === "imperial" ? "lb" : "kg"} is close to the expected ${recipeSetup.units === "imperial" ? kgToLb(expectedGristKg).toFixed(1) + " lb" : expectedGristKg.toFixed(1) + " kg"} for ${formatRecipeVolume(recipeSetup.postBoilVolume)} @ ${recipeSetup.efficiency}% BHE.`;

    if (gristDelta > 0.3 && gristDelta <= 0.6) {
        gristStatus = "Defensible";
        gristMessage = `${gristInput.toFixed(1)} ${recipeSetup.units === "imperial" ? "lb" : "kg"} is close, but expected about ${recipeSetup.units === "imperial" ? kgToLb(expectedGristKg).toFixed(1) + " lb" : expectedGristKg.toFixed(1) + " kg"} based on OG, volume, and BHE.`;
    }

    if (gristDelta > 0.6) {
        gristStatus = "Difficult to Defend";
        gristMessage = `${gristInput.toFixed(1)} ${recipeSetup.units === "imperial" ? "lb" : "kg"} does not appear to support the target OG. Expected about ${recipeSetup.units === "imperial" ? kgToLb(expectedGristKg).toFixed(1) + " lb" : expectedGristKg.toFixed(1) + " kg"}.`;
    }

    const grainPctTotal = fermentables.reduce((sum, item) => sum + item.pct, 0);
    const grainRuleResult = evaluateStyleGrainRules(currentRecipeStyle.code, fermentables);
    
    let grainPctStatus = "Strong";
    let grainPctMessage = `Fermentable total is ${grainPctTotal}%.`;

    if (
        (grainPctTotal >= grainTotalRules.defendMin && grainPctTotal < grainTotalRules.strongMin) ||
        (grainPctTotal > grainTotalRules.strongMax && grainPctTotal <= grainTotalRules.defendMax)
    ) {
        grainPctStatus = "Defensible";
        grainPctMessage = `Fermentable total is ${grainPctTotal}%. Close, but could be tightened.`;
    }

    if (
        grainPctTotal < grainTotalRules.defendMin ||
        grainPctTotal > grainTotalRules.defendMax
    ) {
        grainPctStatus = "Difficult to Defend";
        grainPctMessage = `Fermentable total is ${grainPctTotal}%. This would be difficult to defend.`;
    }

    const expectedOg = fg + (abv / 131.25);
    const userOgPoints = Math.round((og - 1) * 1000);
    const expectedOgPoints = Math.round((expectedOg - 1) * 1000);
    const ogMathDelta = Math.abs(userOgPoints - expectedOgPoints);

    let ogMathStatus = "Strong";
    let ogMathMessage = `OG math is internally consistent. Expected about 1.${String(expectedOgPoints).padStart(3, "0")}.`;

    if (ogMathDelta > 3 && ogMathDelta <= 5) {
        ogMathStatus = "Defensible";
        ogMathMessage = `OG is close, but ABV / FG / OG do not fully align. Expected about 1.${String(expectedOgPoints).padStart(3, "0")}.`;
    }

    if (ogMathDelta > 5) {
        ogMathStatus = "Difficult to Defend";
        ogMathMessage = `OG math does not add up. Based on ABV and FG, expected about 1.${String(expectedOgPoints).padStart(3, "0")}.`;
    }

    const ogRangeResult = evaluateRange("OG", og, currentRecipeStyle.og.min, currentRecipeStyle.og.max, 0.003);

    feedbackBox.innerHTML = `
        <strong>Recipe Evaluation</strong><br><br>

        ${formatRecipeResult(abvResult)}
        ${formatRecipeResult(fgResult)}
        ${formatRecipeResult(ogRangeResult)}

        <strong>OG Math:</strong> ${ogMathStatus}<br>
        ${ogMathMessage}<br><br>

        ${formatRecipeResult(ibuResult)}
        ${formatRecipeResult(srmResult)}

        <strong>Total Grist:</strong> ${gristStatus}<br>
        ${gristMessage}<br><br>

        <strong>Fermentable % Total:</strong> ${grainPctStatus}<br>
        ${grainPctMessage}<br><br>

        ${formatGrainRuleFeedback(grainRuleResult)}<br><br>
    `;

    nextQuestionButton.style.display = "inline-block";
}
function evaluateRange(label, value, min, max, closeTolerance) {
    if (value >= min && value <= max) {
        return {
            label,
            status: "Strong",
            message: `${value} is within the style range (${min}–${max}).`
        };
    }

    const belowBy = min - value;
    const aboveBy = value - max;
    const distance = value < min ? belowBy : aboveBy;

    if (distance <= closeTolerance) {
        return {
            label,
            status: "Close",
            message: `${value} is just outside the style range (${min}–${max}).`
        };
    }

    return {
        label,
        status: "Likely point loss",
        message: `${value} is outside the style range (${min}–${max}).`
    };
}

function formatRecipeResult(result) {
    return `
        <strong>${result.label}:</strong> ${result.status}<br>
        ${result.message}<br><br>
    `;
}

function renderTrueFalseQuestion() {
    if (currentTrueFalseIndex >= trueFalseSession.length) {
        showTrueFalseSummary();
        return;
    }

    const question = trueFalseSession[currentTrueFalseIndex];

    styleName.textContent = "True / False Drill";
    questionText.innerHTML = `
        <div>Question ${currentTrueFalseIndex + 1} of ${TRUE_FALSE_SESSION_SIZE}</div>
        <div>${question.statement}</div>
    `;

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    ["True", "False"].forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", function () {
            checkTrueFalseAnswer(answer, question);
        });

        answerContainer.appendChild(button);
    });

    nextQuestionButton.style.display = "none";
}

function checkTrueFalseAnswer(selectedAnswer, question) {
    const correctAnswer = question.answer ? "True" : "False";
    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "#16a34a";
            button.style.color = "white";
        }

        if (
            button.textContent === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {
            button.style.backgroundColor = "#dc2626";
            button.style.color = "white";
        }
    });

    if (selectedAnswer === correctAnswer) {
        correctCount++;
        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong>
        `;
    } else {
        incorrectCount++;

        missedQuestions.push({
            category: "True / False",
            selected: selectedAnswer,
            correct: correctAnswer,
            question: question.statement
        });

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            Correct answer: ${correctAnswer}
        `;
    }

    updateScoreDisplay();
    nextQuestionButton.style.display = "inline-block";
}

function showTrueFalseSummary() {
    styleName.textContent = "Session Complete";

    questionText.innerHTML = `
        Final Score: ${correctCount} / ${TRUE_FALSE_SESSION_SIZE}
    `;

    feedbackBox.innerHTML = "";

    answerContainer.innerHTML = `
        <button id="restart-truefalse">Restart Session</button>
    `;

    nextQuestionButton.style.display = "none";

    document.getElementById("restart-truefalse")
        .addEventListener("click", function () {
            launchTrueFalseButton.click();
        });
}
function getStudySetLabel() {
    switch (activeStudySet) {
        case "highFrequency":
            return "High-Frequency Compare";

        case "recipe":
            return "Recipe Styles";

        case "comparison":
            return "Comparison Pool";

        case "missed":
            return "Review Misses";

        case "foundation":
        default:
            return "Foundation Pool";
    }
}

studySetButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        activeStudySet = button.dataset.set;

        studySetButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        drillTitle.textContent = `Foundation Drill — ${getStudySetLabel()}`;
    });
});

launchFoundationButton.addEventListener("click", function () {
    currentMode = "foundation";
    
    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(true);
    
    drillTitle.textContent = `Foundation Drill — ${getStudySetLabel()}`;

    drillPanel.style.display = "block";
    renderQuestion("strength");
    window.scrollTo(0, 0);
});

if (launchCompareButton) {
    launchCompareButton.addEventListener("click", function () {
        currentMode = "compare";

        studySets.style.display = "none";
        modules.style.display = "none";
        setCategoryVisibility(false);

        drillTitle.textContent = "Compare Drill";

        drillPanel.style.display = "block";
        renderCompareQuestion();
        window.scrollTo(0, 0);
    });
}
launchGravityButton.addEventListener("click", function () {
    currentMode = "gravity";

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);
    
    drillTitle.textContent = "Gravity Drill";

    drillPanel.style.display = "block";

    renderGravityQuestion();

    window.scrollTo(0, 0);
});
launchIbuButton.addEventListener("click", function () {
    currentMode = "ibu";

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);
    
    drillTitle.textContent = "IBU Drill";
    drillPanel.style.display = "block";

    renderIbuQuestion();

    window.scrollTo(0, 0);
});
launchGristButton.addEventListener("click", function () {
    currentMode = "grist";

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);
    
    drillTitle.textContent = "Grist Drill";
    drillPanel.style.display = "block";

    renderGristQuestion();

    window.scrollTo(0, 0);
});

launchMashButton.addEventListener("click", function () {
    currentMode = "mash";

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);
    
    drillTitle.textContent = "Mash Strategy Drill";
    drillPanel.style.display = "block";

    renderMashQuestion();

    window.scrollTo(0, 0);
});

launchFermentationButton.addEventListener("click", function () {
    currentMode = "fermentation";

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);
    
    drillTitle.textContent = "Fermentation Drill";
    drillPanel.style.display = "block";

  renderFermentationYeastQuestion();

    window.scrollTo(0, 0);
});

launchTrueFalseButton.addEventListener("click", function () {
    currentMode = "truefalse";

    correctCount = 0;
    incorrectCount = 0;
    missedQuestions = [];
    updateScoreDisplay();

    trueFalseSession = [...trueFalseQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, TRUE_FALSE_SESSION_SIZE);

    currentTrueFalseIndex = 0;

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);

    drillTitle.textContent = "True / False Drill";
    drillPanel.style.display = "block";

    renderTrueFalseQuestion();

    window.scrollTo(0, 0);
});

launchRecipeButton.addEventListener("click", function () {
    currentMode = "recipe";

    correctCount = 0;
    incorrectCount = 0;
    missedQuestions = [];
    updateScoreDisplay();

    currentRecipeStyle = getRandomRecipeStyle();

    studySets.style.display = "none";
    modules.style.display = "none";
    setCategoryVisibility(false);

    drillTitle.textContent = "Recipe Construction Lab";
    drillPanel.style.display = "block";

    renderRecipeSetup();

    window.scrollTo(0, 0);
});


category.forEach(function(button) {
    button.addEventListener("click", function() {
        currentMode = "foundation";
        renderQuestion(button.dataset.category);
    });
});

backHomeButton.addEventListener("click", function () {
    studySets.style.display = "block";
    modules.style.display = "block";
    drillPanel.style.display = "none";
});

nextQuestionButton.addEventListener("click", function () {
    if (currentMode === "compare") {
        renderCompareQuestion();
        return;
    }

    if (currentMode === "gravity") {
        renderGravityQuestion();
        return;
    }

    if (currentMode === "ibu") {
        renderIbuQuestion();
        return;
    }

    if (currentMode === "grist") {
        renderGristQuestion();
        return;
    }

    if (currentMode === "fermentation") {
        renderFermentationYeastQuestion();
        return;
    }

    if (currentMode === "mash") {
        renderMashQuestion();
        return;
    }

    if (currentMode === "truefalse") {
    currentTrueFalseIndex++;
    renderTrueFalseQuestion();
    return;
}

    if (currentMode === "recipe") {
    currentRecipeStyle = getRandomRecipeStyle();
    renderRecipeBuild();
    return;
}
    
    renderQuestion(currentCategory);
});
document.addEventListener("keydown", function(e) {
    if (e.key !== "Enter") return;

    const activeElement = document.activeElement;
    const isTypingInInput = activeElement && activeElement.tagName === "INPUT";

    if (isTypingInInput) return;

    if (drillPanel.style.display === "block" && nextQuestionButton.style.display !== "none") {
        nextQuestionButton.click();
    }
});
