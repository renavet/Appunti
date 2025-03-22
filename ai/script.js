// URL del Webhook Pipedream (da sostituire con il tuo)
const WEBHOOK_URL = "https://eomhnmt29ggtp1o.m.pipedream.net";

// Funzione per caricare i file Markdown locali
async function loadMarkdownData() {
    let response = await fetch("contenuti.json");
    let data = await response.json();
    return data;
}

// Funzione per interrogare Gemini AI con i tuoi appunti
async function askGemini() {
    let query = document.getElementById("query").value;
    let responseDiv = document.getElementById("response");

    // Carica il contenuto dei file Markdown
    let markdownData = await loadMarkdownData();
    let context = Object.values(markdownData).join("\n");

    // Prompt per Gemini (includendo i tuoi appunti)
    let prompt = `Basandoti sugli appunti seguenti:\n${context}\n\nRispondi alla domanda: ${query}`;

    // Chiamata API tramite Webhook Pipedream
    let response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });

    let data = await response.json();
    let answer = data.candidates[0]?.content?.parts[0]?.text || "Errore nella risposta";

    // Mostra la risposta
    responseDiv.innerHTML = `<p><strong>Risposta:</strong> ${answer}</p>`;
}
