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

const correctCountDisplay = document.getElementById("correct-count");
const incorrectCountDisplay = document.getElementById("incorrect-count");
const accuracyDisplay = document.getElementById("accuracy");

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
    strength: ["Session / Low", "Standard", "Standard+", "Strong", "Very Strong"],
    bitterness: ["Malt-forward", "Balanced", "Firm Bitter", "Hop-forward", "Aggressive"],
    body: ["Very Light", "Light", "Medium-Light", "Medium", "Medium-Full", "Full"],
    carbonation: ["Low", "Moderate", "Medium-High", "High"],
    color: ["Straw", "Pale Gold", "Gold", "Amber", "Copper", "Brown", "Black"]
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


// MODULE 4 — Mash Schedule Recognition
// Style → select ALL acceptable schedules

const mashScheduleOptions = [
  {
    id: "single_low",
    label: "Low saccharification mash (62–64°C)",
    explanation: "A low saccharification mash favors beta amylase activity, producing a more fermentable wort and a drier finish."
  },
  {
    id: "single_mid",
    label: "Mid saccharification mash (64–67°C)",
    explanation: "A mid saccharification mash balances beta and alpha amylase activity, producing moderate fermentability with balanced body."
  },
  {
    id: "single_high",
    label: "High saccharification mash (67–70°C)",
    explanation: "A high saccharification mash favors alpha amylase activity, producing more dextrins and fuller body."
  },
  {
    id: "single_low_mashout",
    label: "Low saccharification mash + mashout",
    explanation: "A low saccharification mash favors beta amylase activity, producing a more fermentable wort and a drier finish. A mashout helps halt enzymatic activity and can improve lautering efficiency."
  },
  {
    id: "single_mid_mashout",
    label: "Mid saccharification mash + mashout",
    explanation: "A mid saccharification mash balances beta and alpha amylase activity, producing moderate fermentability with balanced body. A mashout helps halt enzymatic activity and can improve lautering efficiency."
  },
  {
    id: "single_high_mashout",
    label: "High saccharification mash + mashout",
    explanation: "A high saccharification mash favors alpha amylase activity, producing more dextrins and fuller body. A mashout helps halt enzymatic activity and can improve lautering efficiency."
  },
  
  
   {
    id: "hochkurz",
    label: "Traditional German lager step mash (Hochkurz): 62–64°C / 68–72°C / 76–78°C mashout",
    explanation: "A traditional German Hochkurz step mash moves from beta to alpha saccharification, then finishes with mashout for fermentability control, efficiency, and classic continental lager process alignment."
  },
  {
    id: "protein_step",
    label: "Protein rest 50–55°C + step mash",
    explanation: "A 50–55°C protein rest can aid protein breakdown before moving into saccharification rests, which is useful with high-protein grists such as wheat."
  },
  {
    id: "decoction",
    label: "Decoction mash: 62–64°C saccharification, decoction rise to 68–72°C, mashout",
    explanation: "A decoction mash begins with a lower saccharification rest, then uses a boiled mash pull to raise the main mash into a higher alpha-amylase rest before mashout, promoting malt depth, melanoidin development, and traditional continental lager character."
  }
];

const module4MashQuestions = [
  {
    styleCode: "5D",
    styleName: "German Pils",
    correctOptions: ["single_low", "single_mid", "single_low_mashout", "single_mid_mashout", "hochkurz"],
    rationale: "For German Pils, a more fermentable wort supports the crisp, dry finish expected in the style while keeping the malt profile clean and restrained."
  },
  {
    styleCode: "3B",
    styleName: "Czech Premium Pale Lager",
    correctOptions: ["single_mid", "single_mid_mashout", "hochkurz", "decoction"],
    rationale: "For Czech Premium Pale Lager, the mash should support a rounded malt profile while preserving enough attenuation for balance against firm bitterness."
  },
  {
    styleCode: "6A",
    styleName: "Märzen",
    correctOptions: ["single_mid", "single_mid_mashout", "hochkurz", "decoction"],
    rationale: "For Märzen, the mash should preserve malt richness and smooth body without becoming heavy or overly sweet."
  },
  {
    styleCode: "4B",
    styleName: "Festbier",
    correctOptions: ["single_mid", "single_mid_mashout", "hochkurz", "decoction"],
    rationale: "For Festbier, the mash should support a smooth, elegant malt profile with enough attenuation to keep the beer drinkable."
  },
  {
    styleCode: "9A",
    styleName: "Doppelbock",
    correctOptions: ["single_mid", "single_high", "single_mid_mashout", "single_high_mashout", "hochkurz", "decoction"],
    rationale: "For Doppelbock, the mash should support rich malt depth and fuller body while still allowing enough fermentability to avoid a cloying finish."
  },
  {
    styleCode: "10A",
    styleName: "Weissbier",
    correctOptions: ["single_mid", "single_mid_mashout", "hochkurz", "protein_step"],
    rationale: "For Weissbier, the mash can support a soft wheat body and good fermentability while managing the high-protein wheat grist."
  },
  {
    styleCode: "26C",
    styleName: "Belgian Tripel",
    correctOptions: ["single_low", "single_mid", "single_low_mashout", "single_mid_mashout"],
    rationale: "For Belgian Tripel, a fermentable wort is important to achieve a dry finish despite high gravity and added sugar."
  },
  {
    styleCode: "15C",
    styleName: "Irish Stout",
    correctOptions: ["single_mid", "single_mid_mashout"],
    rationale: "For Irish Stout, a mid saccharification mash supports moderate body while keeping the finish dry enough for a roast-forward beer."
  },
  {
    styleCode: "20A",
    styleName: "American Porter",
    correctOptions: ["single_mid", "single_high", "single_mid_mashout", "single_high_mashout"],
    rationale: "For American Porter, a mid-to-high saccharification mash can support body and malt depth while balancing roast and hop bitterness."
  },
  {
    styleCode: "11C",
    styleName: "Strong Bitter",
    correctOptions: ["single_mid", "single_mid_mashout"],
    rationale: "For Strong Bitter, a mid saccharification mash supports balanced body and drinkability while allowing malt and bitterness to remain integrated."
  },
  {
    styleCode: "21A",
    styleName: "American IPA",
    correctOptions: ["single_low", "single_mid", "single_low_mashout", "single_mid_mashout"],
    rationale: "For American IPA, a lower-to-mid saccharification mash supports attenuation and drinkability so hop bitterness and aroma remain clear."
  },
  {
    styleCode: "22A",
    styleName: "Double IPA",
    correctOptions: ["single_low", "single_mid", "single_low_mashout", "single_mid_mashout"],
    rationale: "For Double IPA, a fermentable wort is important to keep the high-gravity beer from finishing sweet or heavy while preserving hop focus."
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
    styleCode: "15C",
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
    const profile =
        compareProfiles[Math.floor(Math.random() * compareProfiles.length)];

    const focus =
        profile.focus[Math.floor(Math.random() * profile.focus.length)];

    styleName.textContent = `Compare Drill`;

    questionText.textContent = focus.question;

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const choices = [
        "Higher",
        "Lower",
        "Similar",
        "Lighter",
        "Fuller",
        "More malt emphasis",
        "Less malt emphasis"
    ];

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;

        button.addEventListener("click", function () {
            checkCompareAnswer(choice, focus.correct);
        });

        answerContainer.appendChild(button);
    });
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
    input.type = "text";
    input.placeholder = "Enter OG (example: 1.050)";

    const button = document.createElement("button");
    button.textContent = "Check Answer";

        button.addEventListener("click", function () {
        checkGravityAnswer(input.value, question);
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
    input.type = "text";
    input.placeholder = "Enter IBU target";

    const button = document.createElement("button");
    button.textContent = "Check Answer";

    button.addEventListener("click", function () {
        checkIbuAnswer(input.value, question, style);
    });

    answerContainer.appendChild(input);
    answerContainer.appendChild(button);

  input.focus();
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
        `;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You entered: ${userIbu} IBU<br>
            Defensible range: ${minIbu}–${maxIbu} IBU<br>
            Balance: ${style.bugu.anchor}
        `;
    }
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
    input.type = "text";
    input.placeholder = "Enter kg";

    const button = document.createElement("button");
    button.textContent = "Check Answer";

    button.addEventListener("click", function () {
        checkGristAnswer(input.value, question);
    });

    answerContainer.appendChild(input);
    answerContainer.appendChild(button);

    input.focus();
}
    function renderMashQuestion() {
    const question =
        module4MashQuestions[Math.floor(Math.random() * module4MashQuestions.length)];

    styleName.textContent = `Style: ${question.styleCode} ${question.styleName}`;
    questionText.textContent = "Choose an appropriate mash schedule.";

    feedbackBox.innerHTML = "";
    answerContainer.innerHTML = "";

    const correctSet = new Set(question.correctOptions);

    const correctOptions = mashScheduleOptions.filter(option =>
        correctSet.has(option.id)
    );

    const incorrectOptions = mashScheduleOptions.filter(option =>
        !correctSet.has(option.id)
    );

    const selectedCorrect = correctOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(3, correctOptions.length));

    const selectedIncorrect = incorrectOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const choices = [...selectedCorrect, ...selectedIncorrect]
        .sort(() => Math.random() - 0.5);

    choices.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;

        button.addEventListener("click", function () {
            checkMashAnswer(option, question);
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
        `;
    }else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You entered: ${userIbu} IBU<br>
            Defensible range: ${minIbu}–${maxIbu} IBU<br>
            Balance: ${style.bugu.anchor}
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
function checkMashAnswer(option, question) {
    const isCorrect = question.correctOptions.includes(option.id);

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

        const correctLabels = question.correctOptions
            .map(id => mashScheduleOptions.find(option => option.id === id)?.label)
            .filter(Boolean)
            .join("<br>");

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            ${option.explanation}<br><br>
            <strong>Better choices for this style include:</strong><br>
            ${correctLabels}<br><br>
            <strong>Style rationale:</strong><br>
            ${question.rationale}
        `;
    }
}
    
    
function checkAnswer(selectedAnswer, data) {
    const selectedAnchor = selectedAnswer.split(" — ")[0];
    const correctAnswer = data.anchor;
    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        const buttonAnchor = button.textContent.split(" — ")[0];

        button.disabled = true;

        if (buttonAnchor === correctAnswer) {
            button.style.backgroundColor = "#16a34a";
            button.style.color = "white";
        }

        if (button.textContent === selectedAnswer && selectedAnchor !== correctAnswer) {
            button.style.backgroundColor = "#dc2626";
            button.style.color = "white";
        }
    });

    if (selectedAnchor === correctAnswer) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${correctAnswer}<br>
            Range: ${formatRange(data)}
        `;
    } else {
        incorrectCount++;

        missedQuestions.push({
            style: currentStyle.name,
            category: currentCategory,
            selected: selectedAnchor,
            correct: correctAnswer
        });

        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You selected: ${selectedAnswer}<br>
            Correct answer: ${correctAnswer}<br>
            Range: ${formatRange(data)}
        `;
    }
}
function checkCompareAnswer(selectedAnswer, correctAnswer) {
    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "#16a34a";
            button.style.color = "white";
        }

        if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.style.backgroundColor = "#dc2626";
            button.style.color = "white";
        }
    });

    if (selectedAnswer === correctAnswer) {
        correctCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${correctAnswer}
        `;
    } else {
        incorrectCount++;
        updateScoreDisplay();

        feedbackBox.innerHTML = `
            <strong class="incorrect">Incorrect.</strong><br>
            You selected: ${selectedAnswer}<br>
            Correct answer: ${correctAnswer}
        `;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
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
    
    drillTitle.textContent = "Mash Schedule Drill";
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

    renderQuestion(currentCategory);
});
