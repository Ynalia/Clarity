produits = JSON.parse(localStorage["Panier"]);

panier();
function panier(){
    const articles = document.getElementById("articles");
    if (produits[0]["Quantité1"] + produits[0]["Quantité2"] + produits[0]["Quantité3"] + produits[0]["Quantité4"] + produits[0]["Quantité5"] > 0) {
        let article1 = document.createElement("article");
        articles.appendChild(article1);
        let image1 = document.createElement("img");
        image1.src = produits[0]["Face"];
        article1.appendChild(image1);
        let div1 = document.createElement("div");
        article1.appendChild(div1);
        let tableau1 = document.createElement("table");
        div1.appendChild(tableau1);
        let thead1 = document.createElement("thead");
        tableau1.appendChild(thead1);
        let tr1 = document.createElement("tr");
        thead1.appendChild(tr1);
        let th1 = document.createElement("th");
        th1.innerHTML = produits[0]["Taille1"];
        tr1.appendChild(th1);
        let th2 = document.createElement("th");
        th2.innerHTML = produits[0]["Taille2"];
        tr1.appendChild(th2);
        let th3 = document.createElement("th");
        th3.innerHTML = produits[0]["Taille3"];
        tr1.appendChild(th3);
        let th4 = document.createElement("th");
        th4.innerHTML = produits[0]["Taille4"];
        tr1.appendChild(th4);
        let th5 = document.createElement("th");
        th5.innerHTML = produits[0]["Taille5"];
        tr1.appendChild(th5);

        let tbody1 = document.createElement("tbody");
        tableau1.appendChild(tbody1);
        let tr2 = document.createElement("tr");
        tbody1.appendChild(tr2);
        let td1 = document.createElement("td");
        td1.innerHTML = produits[0]["Quantité1"];
        tr2.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = produits[0]["Quantité2"];
        tr2.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerHTML = produits[0]["Quantité3"];
        tr2.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerHTML = produits[0]["Quantité4"];
        tr2.appendChild(td4);
        let td5 = document.createElement("td");
        td5.innerHTML = produits[0]["Quantité5"];
        tr2.appendChild(td5);

        let div2 = document.createElement("div");
        div1.appendChild(div2);
        let p1 = document.createElement("p");
        p1.innerHTML = "Prix : " + produits[0]["Prix"] + "€";
        div2.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerHTML = "Sous-total : " + (produits[0]["Quantité1"]*produits[0]["Prix"] + produits[0]["Quantité2"]*produits[0]["Prix"] + produits[0]["Quantité3"]*produits[0]["Prix"] + produits[0]["Quantité4"]*produits[0]["Prix"] + produits[0]["Quantité5"]*produits[0]["Prix"]) + "€";
        div2.appendChild(p2);

        let fermer1 = document.createElement("button");
        fermer1.setAttribute("type", "button");
        fermer1.id = "fermer1";
        fermer1.innerHTML = "X";
        article1.appendChild(fermer1);
    }

    if (produits[1]["Quantité1"] + produits[1]["Quantité2"] > 0) {
        let article2 = document.createElement("article");
        articles.appendChild(article2);
        let image2 = document.createElement("img");
        image2.src = produits[1]["Face"];
        article2.appendChild(image2);
        let div3 = document.createElement("div");
        article2.appendChild(div3);
        let tableau2 = document.createElement("table");
        div3.appendChild(tableau2);
        let thead2 = document.createElement("thead");
        tableau2.appendChild(thead2);
        let tr3 = document.createElement("tr");
        thead2.appendChild(tr3);
        let th6 = document.createElement("th");
        th6.innerHTML = produits[1]["Taille1"];
        tr3.appendChild(th6);
        let th7 = document.createElement("th");
        th7.innerHTML = produits[1]["Taille2"];
        tr3.appendChild(th7);

        let tbody2 = document.createElement("tbody");
        tableau2.appendChild(tbody2);
        let tr4 = document.createElement("tr");
        tbody2.appendChild(tr4);
        let td6 = document.createElement("td");
        td6.innerHTML = produits[1]["Quantité1"];
        tr4.appendChild(td6);
        let td7 = document.createElement("td");
        td7.innerHTML = produits[1]["Quantité2"];
        tr4.appendChild(td7);

        let div2 = document.createElement("div");
        div3.appendChild(div2);
        let p3 = document.createElement("p");
        p3.innerHTML = "Prix : " + produits[1]["Prix"] + "€";
        div2.appendChild(p3);
        let p4 = document.createElement("p");
        p4.innerHTML = "Sous-total : " + (produits[1]["Quantité1"]*produits[1]["Prix"] + produits[1]["Quantité2"]*produits[1]["Prix"]) + "€";
        div2.appendChild(p4);

        let fermer2 = document.createElement("button");
        fermer2.setAttribute("type", "button");
        fermer2.id = "fermer2";
        fermer2.innerHTML = "X";
        article2.appendChild(fermer2);
    }

    if (produits[2]["Quantité1"] + produits[2]["Quantité2"] + produits[2]["Quantité3"] + produits[2]["Quantité4"] + produits[2]["Quantité5"] > 0) {
        let article3 = document.createElement("article");
        articles.appendChild(article3);
        let image3 = document.createElement("img");
        image3.src = produits[2]["Extérieur"];
        article3.appendChild(image3);
        let div5 = document.createElement("div");
        article3.appendChild(div5);
        let tableau3 = document.createElement("table");
        div5.appendChild(tableau3);
        let thead3 = document.createElement("thead");
        tableau3.appendChild(thead3);
        let tr5 = document.createElement("tr");
        thead3.appendChild(tr5);
        let th8 = document.createElement("th");
        th8.innerHTML = produits[2]["Taille1"];
        tr5.appendChild(th8);
        let th9 = document.createElement("th");
        th9.innerHTML = produits[2]["Taille2"];
        tr5.appendChild(th9);
        let th10 = document.createElement("th");
        th10.innerHTML = produits[2]["Taille3"];
        tr5.appendChild(th10);
        let th11 = document.createElement("th");
        th11.innerHTML = produits[2]["Taille4"];
        tr5.appendChild(th11);
        let th12 = document.createElement("th");
        th12.innerHTML = produits[2]["Taille5"];
        tr5.appendChild(th12);

        let tbody3 = document.createElement("tbody");
        tableau3.appendChild(tbody3);
        let tr6 = document.createElement("tr");
        tbody3.appendChild(tr6);
        let td8 = document.createElement("td");
        td8.innerHTML = produits[2]["Quantité1"];
        tr6.appendChild(td8);
        let td9 = document.createElement("td");
        td9.innerHTML = produits[2]["Quantité2"];
        tr6.appendChild(td9);
        let td10 = document.createElement("td");
        td10.innerHTML = produits[2]["Quantité3"];
        tr6.appendChild(td10);
        let td11 = document.createElement("td");
        td11.innerHTML = produits[2]["Quantité4"];
        tr6.appendChild(td11);
        let td12 = document.createElement("td");
        td12.innerHTML = produits[2]["Quantité5"];
        tr6.appendChild(td12);

        let div6 = document.createElement("div");
        div5.appendChild(div6);
        let p5 = document.createElement("p");
        p5.innerHTML = "Prix : " + produits[2]["Prix"] + "€";
        div6.appendChild(p5);
        let p6 = document.createElement("p");
        p6.innerHTML = "Sous-total : " + (produits[2]["Quantité1"]*produits[2]["Prix"] + produits[2]["Quantité2"]*produits[2]["Prix"] + produits[2]["Quantité3"]*produits[2]["Prix"] + produits[2]["Quantité4"]*produits[2]["Prix"] + produits[2]["Quantité5"]*produits[2]["Prix"]) + "€";
        div6.appendChild(p6);

        let fermer3 = document.createElement("button");
        fermer3.setAttribute("type", "button");
        fermer3.id = "fermer3";
        fermer3.innerHTML = "X";
        article3.appendChild(fermer3);
    }


    let fermer1 = document.getElementById("fermer1")
    if (fermer1 != null) {
        fermer1.addEventListener('click', () => {
            produits[0]["Quantité1"] = 0;
            produits[0]["Quantité2"] = 0;
            produits[0]["Quantité3"] = 0;
            produits[0]["Quantité4"] = 0;
            produits[0]["Quantité5"] = 0;
            localStorage.setItem('Panier', JSON.stringify(produits));
            window.location.reload()
        });
    }

    let fermer2 = document.getElementById("fermer2")
    if (fermer2 != null) {
        fermer2.addEventListener('click', () => {
            produits[1]["Quantité1"] = 0;
            produits[1]["Quantité2"] = 0;
            localStorage.setItem('Panier', JSON.stringify(produits));
            window.location.reload()
        });
    }

    let fermer3 = document.getElementById("fermer3")
    if (fermer3 != null) {
        fermer3.addEventListener('click', () => {
            produits[2]["Quantité1"] = 0;
            produits[2]["Quantité2"] = 0;
            produits[2]["Quantité3"] = 0;
            produits[2]["Quantité4"] = 0;
            produits[2]["Quantité5"] = 0;
            localStorage.setItem('Panier', JSON.stringify(produits));
            window.location.reload()
        });
    }
}

const paiement = document.getElementById("paiement")
paiement.addEventListener('click', () => {
    const commande = {
        produits,
        "Nom" : document.getElementById("Nom").value,
        "Prénom" : document.getElementById("Prénom").value,
        "Adresse" : document.getElementById("Adresse").value,
        "Complément" : document.getElementById("Complément").value,
        "CP" : document.getElementById("CP").value,
        "Pays" : document.getElementById("Pays").value,
        "email" : document.getElementById("email").value,
        "Téléphone" : document.getElementById("Téléphone").value,
    }
    fetch("http://nimportequoirandomtestnon.html", {
        method: "POST",
        headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
        },
        body: JSON.stringify(commande)
    })
    produits[0]["Quantité1"] = 0;
    produits[0]["Quantité2"] = 0;
    produits[0]["Quantité3"] = 0;
    produits[0]["Quantité4"] = 0;
    produits[0]["Quantité5"] = 0;
    produits[1]["Quantité1"] = 0;
    produits[1]["Quantité2"] = 0;
    produits[2]["Quantité1"] = 0;
    produits[2]["Quantité2"] = 0;
    produits[2]["Quantité3"] = 0;
    produits[2]["Quantité4"] = 0;
    produits[2]["Quantité5"] = 0;
    localStorage.setItem('Panier', JSON.stringify(produits));
});