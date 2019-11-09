1 - J'ai accès à une URL qui est en fait un fichier json qui contient les données que je veux récupérer
    ex : https://oc-jswebsrv.herokuapp.com/api/articles

2 - Dans le fichier HTML, je crée une div avec un id qui contiendra les données que je vais récupérer
    ex : <div id="articles"></div>

3 - Dans le fichier HTML, je fais appel au fichier 'ajax.js' qui contient la fonction ajaxGet(),
    si on a accès à l'url, on appelle la fonction callback (fonction qui sera détaillée dans le fichier 'api.js'),
    sinon on met un message d'erreur.

4 - Dans le fichier HTML, je fais appel au fichier 'api.js' qui va déterminer les données que l'on va récupérer
    et insérer dans le fichier HTML (fonction callback).



https://oc-jswebsrv.herokuapp.com/api/articles :

[
    {
        "id": "113891",
        "titre": "Test chapitre 10",
        "contenu": "C'est le test de David du 09/10/2019 15h17"
    },
    {
        "id": "113881",
        "titre": "Test chapitre 10",
        "contenu": "C'est le test de David"
    },
    {
        "id": "113871",
        "titre": "Titre - 5",
        "contenu": "Hello"
    },
    {
        "id": "113861",
        "titre": "Titre",
        "contenu": "Hello"
    },
    {
        "id": "113851",
        "titre": "Roger",
        "contenu": "Bien reçu !"
    }
]