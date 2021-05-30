var requestURL = 'JS/produits.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    if (localStorage["Panier"]){
        produits = JSON.parse(localStorage["Panier"]);
    }
    else {
        var produits = request.response;
    }
    main(produits)
}

function main(produits) {

    /* Caroussel Homepage */

    const Caroussel = document.getElementById('Caroussel');
    const Fleche_droite = document.getElementById('Fleche_droite');
    const Fleche_gauche = document.getElementById('Fleche_gauche');

    Fleche_droite.addEventListener('click', () => {
        Caroussel.style.transform = 'translateX(-59%)';
    });

    Fleche_gauche.addEventListener('click', () => {
        Caroussel.style.transform = 'translateX(0%)';
    });
    console.log(produits)
    localStorage.setItem('Panier', JSON.stringify(produits));
}