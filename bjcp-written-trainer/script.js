const launchFoundationButton = document.getElementById("launch-foundation");
const drillPanel = document.getElementById("drill-panel");

const styleName = document.getElementById("style-name");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const feedbackBox = document.getElementById("feedback-box");
const nextQuestionButton = document.getElementById("next-question");
const categoryButtons = document.querySelectorAll(".category-select button");

const categoryOptions = {
    strength: ["Session / Low", "Standard", "Standard+", "Strong", "Very Strong"],
    bitterness: ["Malt-forward", "Balanced", "Firm Bitter", "Hop-forward", "Aggressive"],
    body: ["Bone Dry", "Dry", "Medium", "Medium-Full", "Full"],
 carbonation: ["Low", "Moderate", "Medium-High", "High"],
    color: ["Straw", "Pale Gold", "Gold", "Amber", "Copper", "Brown", "Black"]
};

let currentStyle = null;
let currentCategory = "strength";

function getRandomStyle() {
    const approvedStyles = styles.filter(style => style.anchorStatus === "approved");
    return approvedStyles[Math.floor(Math.random() * approvedStyles.length)];
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

    if (selectedAnswer === correctAnswer) {
        feedbackBox.innerHTML = `
            <strong class="correct">Correct.</strong><br>
            ${correctAnswer}<br>
            Range: ${formatRange(data)}
        `;
    } else {
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

launchFoundationButton.addEventListener("click", function () {
    drillPanel.style.display = "block";
    renderQuestion("strength");
    drillPanel.scrollIntoView({ behavior: "smooth" });
});

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        renderQuestion(button.dataset.category);
    });
});

nextQuestionButton.addEventListener("click", function () {
    renderQuestion(currentCategory);
});
