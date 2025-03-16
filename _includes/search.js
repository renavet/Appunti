// Funzione per cercare i file in tutta la directory
function searchFiles() {
    var input, filter, resultsDiv;
    input = document.getElementById("search-input");
    filter = input.value.toLowerCase();
    resultsDiv = document.getElementById("search-results");

    // Aggiungi qui i nomi dei file (senza estensione, raccolti tramite Liquid)
    var fileNames = [
        {% for post in site.posts %}
        "{{ post.url | remove: '.html' }}",  // Ottieni il percorso del file senza estensione
        {% endfor %}
        {% for page in site.pages %}
        "{{ page.url | remove: '.html' }}",  // Ottieni il percorso della pagina senza estensione
        {% endfor %}
        {% for file in site.static_files %}
        "{{ file.path | remove: '.html' }}", // Aggiungi anche file statici come immagini, CSS, JS
        {% endfor %}
    ];

    // Filtraggio dei risultati
    var filteredFiles = fileNames.filter(function(file) {
        return file.toLowerCase().includes(filter); // Filtra per nome del file
    });

    // Visualizzazione dei risultati
    if (filteredFiles.length > 0) {
        resultsDiv.innerHTML = "<ul>" + filteredFiles.map(function(file) {
            return "<li><a href='" + file + ".html'>" + file.split('/').pop().replace('-', ' ') + "</a></li>";
        }).join("") + "</ul>";
    } else {
        resultsDiv.innerHTML = "<p>Nessun risultato trovato</p>";
    }
}

