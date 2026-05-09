const launchFoundationButton = document.getElementById("launch-foundation");
const drillPanel = document.getElementById("drill-panel");

const questionTitle = document.querySelector(".question-box p");
const answerContainer = document.querySelector(".answers");
const categoryButtons = document.querySelectorAll(".category-select button");

const categoryData = {
    strength: {
        question: "Question: Strength Identity?",
        answers: ["Session / Low", "Standard", "Standard+", "Strong", "Very Strong"]
    },
    bitterness: {
        question: "Question: Bitterness Identity?",
        answers: ["Malt-forward", "Balanced", "Firm Bitter", "Hop-forward", "Aggressive"]
    },
    body: {
        question: "Question: Body Identity?",
        answers: ["Bone Dry", "Dry", "Medium", "Medium-Full", "Full"]
    },
    carbonation: {
        question: "Question: Carbonation Identity?",
        answers: ["Low", "Moderate", "Crisp", "High"]
    },
    color: {
        question: "Question: Color Identity?",
        answers: ["Straw", "Pale Gold", "Gold", "Amber", "Copper", "Brown", "Black"]
    },
    mixed: {
        question: "Question: Mixed Mode (coming later)",
        answers: ["Coming Soon"]
    }
};

launchFoundationButton.addEventListener("click", function () {
    drillPanel.style.display = "block";
    drillPanel.scrollIntoView({ behavior: "smooth" });
});

categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        const category = button.dataset.category;
        const data = categoryData[category];

        questionTitle.textContent = data.question;
        answerContainer.innerHTML = "";

        data.answers.forEach(answer => {
            const answerButton = document.createElement("button");
            answerButton.textContent = answer;
            answerContainer.appendChild(answerButton);
        });
    });
});const launchFoundationButton = document.getElementById("launch-foundation");
const drillPanel = document.getElementById("drill-panel");

launchFoundationButton.addEventListener("click", function () {
    drillPanel.style.display = "block";
    drillPanel.scrollIntoView({ behavior: "smooth" });
});
