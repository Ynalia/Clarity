produits = JSON.parse(localStorage["Panier"]);

let quantite = 0;
if (produits[0] != null) {
    quantite = (produits[0]["Quantité1"] + produits[0]["Quantité2"] + produits[0]["Quantité3"] + produits[0]["Quantité4"] + produits[0]["Quantité5"]);
};
if (produits[1] != null) {
    quantite = quantite + (produits[1]["Quantité1"] + produits[1]["Quantité2"]);
};
if (produits[2] != null) {
    quantite = quantite + (produits[2]["Quantité1"] + produits[2]["Quantité2"] + produits[2]["Quantité3"] + produits[2]["Quantité4"] + produits[2]["Quantité5"]);
};

const NavPanier = document.getElementById("NavPanier");
NavPanier.innerHTML = "Panier " + quantite;