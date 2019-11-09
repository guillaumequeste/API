// La variable articlesElt correspond à la div 'articles'
var articlesElt = document.getElementById("articles");
// J'utilise la fonction ajaxGet() définie dans le fichier 'ajax.js', la fonction callback est function(reponse)
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function(reponse) {
    // Transforme la réponse en un tableau d'articles, transforme la chaîne de caractères JSON en objet JavaScript
    var articles = JSON.parse(reponse);
    // JSON.stringify(reponse) joue le rôle inverse : elle transforme un objet JavaScript en chaîne de caractères conforme au format JSON
    // Je fais une boucle pour afficher chaque article
    articles.forEach(function(article) {
        // Je crée un titre h2
        var titreElt = document.createElement("h2");
        // Ce titre h2 est le titre récupéré dans le fichier json (url)
        titreElt.textContent = article.titre;
        // Je crée un paragraphe
        var contenuElt = document.createElement("p");
        // Ce paragraphe est le contenu récupéré dans le fichier json (url)
        contenuElt.textContent = article.contenu;
        // J'ajoute à la fin dans la variable articlesElt (c'est-à-dire dans la div articles) le titre créé au-dessus
        articlesElt.appendChild(titreElt);
        // J'ajoute à la fin dans la variable articlesElt (c'est-à-dire dans la div articles) le paragraphe créé au-dessus
        articlesElt.appendChild(contenuElt);
    });
});

var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function(reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});

// Accès à la météo de Lyon avec la clé d'accès 51fc8505d55fe845e4c757ea6b9ff0cf
ajaxGet("http://api.openweathermap.org/data/2.5/weather?q=Dieppe&units=metric&lang=fr&appid=51fc8505d55fe845e4c757ea6b9ff0cf", function(reponse) {
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    var temperature = meteo.main.temp;
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Il fait actuellement " + temperature;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);
});