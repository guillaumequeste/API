// La fonction ajaxGet() permet d'exécuter une requête HTTP asynchrone
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    // Je crée un nouvel objet nommé req en utilisant le constructeur XMLHttpRequest
    var req = new XMLHttpRequest();
    // Je crée une requête HHTP GET asynchrone vers l'URL, asynchrone quand le 3ème paramètre vaut true ou est absent
    req.open("GET", url);
    // Gestion de l'évènement indiquant la fin de la requête
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            // Affichage des informations sur l'échec du traitement de la requête
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function() {
        // La requête n'a pas réussi à atteindre le serveur
        console.error("Erreur réseau avec l'URL " + url);
    });
    // J'envoie la requête vers l'URL cible
    req.send(null);
}

// Utilisation d'une API via rapidapi.com, je récupère le code (JavaScript)XMLHttpRequest
var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open("GET", "https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=EUR&to=USD");
xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        // au lieu de console.log(this.responseText), je crée une div currency dans le fichier HTML et je mets le code suivant pour afficher les données (je crée une div et j'y insère les données)
        var changeElt = document.createElement("div");
        changeElt.textContent = "1 euro =  " + this.responseText;
        var currencyElt = document.getElementById("currency");
        currencyElt.appendChild(changeElt);
    }
});
xhr.setRequestHeader("x-rapidapi-host", "currency-exchange.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "369491dfecmsh63e104874f69b9ep1bdac1jsnf8d6198d8113");
xhr.send(data);