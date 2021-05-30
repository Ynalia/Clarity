produits = JSON.parse(localStorage["Panier"]);

/* Caroussel Maillot */
var Caroussel = 0;
const Fleche_droite = document.getElementById('Fleche_droite');
const Fleche_gauche = document.getElementById('Fleche_gauche');
const Maillot = document.getElementById('Maillot');

Fleche_droite.addEventListener('click', () => {
    console.log(Caroussel);
    if (Caroussel == 0) { 
        Maillot.src = "images/equipe/Maillot_bleu.png";
        Caroussel = Caroussel + 1;
    }
    else if (Caroussel == 1) {
        Maillot.src = "images/equipe/Maillot_dos.png";
        Caroussel = Caroussel + 1;
    }
    else if (Caroussel == 2) {
        Maillot.src = "images/equipe/Maillot_violet.png";
        Caroussel = Caroussel + 1;
    }
    else { 
        Maillot.src = "images/equipe/Maillot_face.png";
        Caroussel = 0;
    };
    console.log(Caroussel)
});

Fleche_gauche.addEventListener('click', () => {
    if (Caroussel == 0) { 
        Maillot.src = "images/equipe/Maillot_violet.png";
        Caroussel = 3;
    }
    else if (Caroussel == 1) {
        Maillot.src = "images/equipe/Maillot_face.png";
        Caroussel = Caroussel - 1;
    }
    else if (Caroussel == 2) {
        Maillot.src = "images/equipe/Maillot_bleu.png";
        Caroussel = Caroussel - 1;
    }
    else { 
        Maillot.src = "images/equipe/Maillot_dos.png";
        Caroussel = Caroussel - 1;
        console.log('click')
    };
    console.log(Caroussel)
});

/* Boutons Maillot */

const Bouton_XS = document.getElementById("XS");
const Bouton_S = document.getElementById("S");
const Bouton_M = document.getElementById("M");
const Bouton_L = document.getElementById("L");
const Bouton_XL = document.getElementById("XL");
const Bouton_panier = document.getElementById("Ajouter");
var Taille = null;

Bouton_XS.addEventListener('click', () => {
    Taille = "XS";
})
Bouton_S.addEventListener('click', () => {
    Taille = "S";
})
Bouton_M.addEventListener('click', () => {
    Taille = "M";
})
Bouton_L.addEventListener('click', () => {
    Taille = "L";
})
Bouton_XL.addEventListener('click', () => {
    Taille = "XL";
})
Bouton_panier.addEventListener('click', () => {
    switch(Taille){
        case "XS" :
            produits[0].Quantité1 ++;
            break;
        case "S" :
            produits[0].Quantité2 ++;
            break;
        case "M" :
            produits[0].Quantité3 ++;
            break;
        case "L" :
            produits[0].Quantité4 ++;
            break;
        case "XL" :
            produits[0].Quantité5 ++;
            break;
    }
    localStorage.setItem('Panier', JSON.stringify(produits));
    window.location.reload();
})