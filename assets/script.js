// Struttura gerarchica del sito (cartelle e file)
var siteStructure = {
    "posts": [
        {% for post in site.posts %}
        {
            "name": "{{ post.title }}",
            "path": "{{ post.url }}"
        },
        {% endfor %}
    ],
    "pages": [
        {% for page in site.pages %}
        {
            "name": "{{ page.title }}",
            "path": "{{ page.url }}"
        },
        {% endfor %}
    ],
    "static_files": [
        {% for file in site.static_files %}
        {
            "name": "{{ file.path }}",
            "path": "{{ file.path | relative_url }}"
        },
        {% endfor %}
    ]
};

// Funzione per creare la lista dinamica della struttura del sito
function createSiteStructure() {
    const folderStructure = document.getElementById("folder-structure");

    // Aggiungi "Posts" alla lista
    let postsList = document.createElement("ul");
    postsList.innerHTML = "<li><b>Posts</b></li>";
    siteStructure.posts.forEach(function(post) {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${post.path}">${post.name}</a>`;
        postsList.appendChild(li);
    });
    folderStructure.appendChild(postsList);

    // Aggiungi "Pages" alla lista
    let pagesList = document.createElement("ul");
    pagesList.innerHTML = "<li><b>Pages</b></li>";
    siteStructure.pages.forEach(function(page) {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${page.path}">${page.name}</a>`;
        pagesList.appendChild(li);
    });
    folderStructure.appendChild(pagesList);

    // Aggiungi "Static Files" alla lista
    let staticFilesList = document.createElement("ul");
    staticFilesList.innerHTML = "<li><b>Static Files</b></li>";
    siteStructure.static_files.forEach(function(file) {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${file.path}">${file.name}</a>`;
        staticFilesList.appendChild(li);
    });
    folderStructure.appendChild(staticFilesList);
}

// Esegui la funzione per creare la struttura
createSiteStructure();
