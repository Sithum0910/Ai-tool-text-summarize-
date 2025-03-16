document.getElementById("summarizeButton").addEventListener("click", async function() {
    const inputText = document.getElementById("inputText").value;

    if (inputText.trim() === "") {
        alert("Please enter some text to summarize!");
        return;
    }

    // Call Hugging Face API to summarize text
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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", // Your Hugging Face API Key
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: inputText })
    });

    const result = await response.json();

    if (result.error) {
        alert("Error: " + result.error);
        return;
    }

    // Display the summary
    document.getElementById("summaryText").textContent = result[0].summary_text;
});
