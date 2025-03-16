// Funzione per cercare i file in base al nome
function searchFiles() {
    var input, filter, resultsDiv, fileNames;
    input = document.getElementById("search-input");
    filter = input.value.toLowerCase(); // Ottieni il valore della ricerca
    resultsDiv = document.getElementById("search-results");

    // Aggiungi qui i nomi dei file (senza estensione)
    fileNames = [
        "about", // nome del file senza estensione
        "contact",
        "post-1",
        "mio-post",
        "articolo-xyz"
        // Aggiungi qui altri file
    ];

    // Filtra i file in base alla ricerca
    var filteredFiles = fileNames.filter(function (file) {
        return file.toLowerCase().includes(filter); // Filtra per corrispondenza
    });

    // Mostra i risultati
    if (filteredFiles.length > 0) {
        resultsDiv.innerHTML = "<ul>" + filteredFiles.map(function (file) {
            return "<li><a href='" + file + ".html'>" + file + "</a></li>";
        }).join("") + "</ul>";
    } else {
        resultsDiv.innerHTML = "<p>Nessun risultato trovato</p>";
    }
}
