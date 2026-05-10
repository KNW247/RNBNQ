

const launchFoundationButton = document.getElementById("launch-foundation");
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
const studySetButtons = document.querySelectorAll(".button-grid button");
const drillTitle = document.getElementById("drill-title");

const categoryOptions = {
    strength: ["Session / Low", "Standard", "Standard+", "Strong", "Very Strong"],
    bitterness: ["Malt-forward", "Balanced", "Firm Bitter", "Hop-forward", "Aggressive"],
    body: ["Very Light", "Light", "Medium-Light", "Medium", "Medium-Full", "Full"],
    carbonation: ["Low", "Moderate", "Medium-High", "High"],
    color: ["Straw", "Pale Gold", "Gold", "Amber", "Copper", "Brown", "Black"]
};

let currentStyle = null;
let currentCategory = "strength";
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

function checkAnswer(selectedAnswer, data) {
    const correctAnswer = data.anchor;
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
            ${correctAnswer}<br>
            Range: ${formatRange(data)}
        `;
    } else {
        incorrectCount++;

        missedQuestions.push({
            style: currentStyle.name,
            category: currentCategory,
            selected: selectedAnswer,
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
    studySets.style.display = "none";
    modules.style.display = "none";

    drillTitle.textContent = `Foundation Drill — ${getStudySetLabel()}`;

    drillPanel.style.display = "block";
    renderQuestion("strength");
    window.scrollTo(0, 0);
});

category.forEach(function(button) {
    button.addEventListener("click", function() {
        renderQuestion(button.dataset.category);
    });
});

backHomeButton.addEventListener("click", function () {
    studySets.style.display = "block";
    modules.style.display = "block";
    drillPanel.style.display = "none";
});

nextQuestionButton.addEventListener("click", function () {
    renderQuestion(currentCategory);
});
