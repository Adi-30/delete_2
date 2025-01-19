// Function to display charts
function generateChart(chartType) {
    const chartContainer = document.getElementById("chart-container");
    const chartURL = `charts/${chartType}.png`; // Adjust the path as per your hosting setup
    chartContainer.innerHTML = `<img src="${chartURL}" alt="${chartType} Chart">`;
}

// Function to predict loan default
function predictDefault() {
    const form = document.getElementById("prediction-form");
    const formData = new FormData(form);
    const inputs = Object.fromEntries(formData.entries());

    const prediction = Math.random() > 0.5 ? "Defaulter" : "Non-Defaulter";

    const resultDiv = document.getElementById("prediction-result");
    resultDiv.textContent = `Prediction: ${prediction}`;
    resultDiv.style.color = prediction === "Defaulter" ? "red" : "green";
}
