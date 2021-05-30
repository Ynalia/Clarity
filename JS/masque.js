produits = JSON.parse(localStorage["Panier"]);

/* Caroussel Masque */
var Caroussel = 0;
const Fleche_droite = document.getElementById('Fleche_droite');
const Fleche_gauche = document.getElementById('Fleche_gauche');
const Masque = document.getElementById('Masque');

Fleche_droite.addEventListener('click', () => {
    console.log(Caroussel);
    if (Caroussel == 0) { 
        Masque.src = "images/equipe/Masque_violet.png";
        Caroussel = Caroussel + 1;
    }
    else if (Caroussel == 1) {
        Masque.src = "images/equipe/Masque_bleu.png";
        Caroussel = Caroussel + 1;
    }
    else {
        Masque.src = "images/equipe/Masque_face.png";
        Caroussel = 0;
    };
    console.log(Caroussel)
});

Fleche_gauche.addEventListener('click', () => {
    if (Caroussel == 0) { 
        Masque.src = "images/equipe/Masque_bleu.png";
        Caroussel = 2;
    }
    else if (Caroussel == 1) {
        Masque.src = "images/equipe/Masque_face.png";
        Caroussel = Caroussel - 1;
    }
    else {
        Masque.src = "images/equipe/Masque_violet.png";
        Caroussel = Caroussel - 1;
    };
    console.log(Caroussel);
});

/* Boutons Masque */

const Bouton_Enfant = document.getElementById("Enfant");
const Bouton_Adulte = document.getElementById("Adulte");
const Bouton_panier = document.getElementById("Ajouter");
var Taille = null;

Bouton_Enfant.addEventListener('click', () => {
    Taille = "Enfant";
})
Bouton_Adulte.addEventListener('click', () => {
    Taille = "Adulte";
})
Bouton_panier.addEventListener('click', () => {
    switch(Taille){
        case "Enfant" :
            produits[1].Quantité1 ++;
            break;
        case "Adulte" :
            produits[1].Quantité2 ++;
            break;
    }
    localStorage.setItem('Panier', JSON.stringify(produits));
    window.location.reload();
})