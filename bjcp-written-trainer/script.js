const launchFoundationButton = document.getElementById("launch-foundation");
const drillPanel = document.getElementById("drill-panel");

launchFoundationButton.addEventListener("click", function () {
    drillPanel.style.display = "block";
    drillPanel.scrollIntoView({ behavior: "smooth" });
});
