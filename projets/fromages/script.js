let eventSelected; // type d'événement
let cheeseNumber; // Nombre de variétés de fromages
let cheeseQtyPP; // quantité par personne
let cheeseTypes = []; // types de variétés de fromages
let nbPersonnes;

let fromagesPersilles = [
    {
      "id": "fp1",
      "lc": "fr",
      "product_name": "Roquefort Société Cave Saveur",
      "generic_name": "ROQUEFORT AOP au lait cru de brebis",
      "brand": "Société,Lactalis",
      "categories": "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages à pâte persillée, Fromages à pâte persillée français, Fromages de brebis, Roqueforts",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:blue-veined-cheeses,en:french-blue-veined-cheeses,en:sheep-s-milk-cheeses,en:roquefort-cheeses",
      "labels": "AOP, Triman, en:aop",
      "labels_tags": "en:pdo,fr:triman,en:aop",
      "origins": "France",
      "ingredients_text": "Roquefort AOP au lait cru de brebis",
      "allergens": "Lait",
      "conservation_conditions": "",
      "warning": "",
      "link": "https://www.roquefort-societe.com/produit/roquefort-aop-societe-1863-cave-saveur/",
      "nutriscore_grade": "e",
      "nutriscore_score": 19,
      "ecoscore_grade": "c",
      "ecoscore_score": 53
    },
    {
      "id": "fp2",
      "lc": "fr",
      "product_name": "Bleu de laqueuille",
      "generic_name": "",
      "brand": "",
      "categories": "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages à pâte persillée, Fromages à pâte persillée français, Bleus de Laqueuille",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:blue-veined-cheeses,en:french-blue-veined-cheeses,fr:bleus-de-laqueuille",
      "labels": "",
      "labels_tags": "",
      "origins": "",
      "ingredients_text": "",
      "allergens": "",
      "conservation_conditions": "",
      "warning": "",
      "link": "",
      "nutriscore_grade": "e",
      "nutriscore_score": 19,
      "ecoscore_grade": "d",
      "ecoscore_score": 34
    },
    {
      "id": "fp3",
      "lc": "fr",
      "product_name": "Roquefort",
      "generic_name": "",
      "brand": "",
      "categories": "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages à pâte persillée, Fromages à pâte persillée français, Fromages de brebis, Roqueforts",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:blue-veined-cheeses,en:french-blue-veined-cheeses,en:sheep-s-milk-cheeses,en:roquefort-cheeses",
      "labels": "",
      "labels_tags": "",
      "origins": "",
      "ingredients_text": "",
      "allergens": "",
      "conservation_conditions": "",
      "warning": "",
      "link": "",
      "nutriscore_grade": "e",
      "nutriscore_score": 19,
      "ecoscore_grade": "d",
      "ecoscore_score": 24
    },
    {
      "id": "fp4",
      "lc": "en",
      "product_name": "bleu au lait de vache",
      "generic_name": "Fromage à pâte persillée au lait pasteurisé",
      "brand": "Lys bleu,Aldi",
      "categories": "Dairies, Fermented foods, Fermented milk products, Cheeses, Blue-veined cheeses, French blue-veined cheeses",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:blue-veined-cheeses,en:french-blue-veined-cheeses",
      "labels": "",
      "labels_tags": "",
      "origins": "France",
      "ingredients_text": "_Lait_ pasteurisé (92%) (origine France), _Crème_ pasteurisée (6%) (origine France), sel, présure, ferments (contient du _lait_),",
      "allergens": "Milk",
      "conservation_conditions": "",
      "warning": "",
      "link": "",
      "nutriscore_grade": "d",
      "nutriscore_score": 14,
      "ecoscore_grade": "c",
      "ecoscore_score": 58
    },
    {
      "id": "fp5",
      "lc": "fr",
      "product_name": "Fourme D'ambert AOP ~2,8kg",
      "generic_name": "",
      "brand": "",
      "categories": "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages à pâte persillée, Fromages de France, Fromages à pâte persillée français, Fourme d'Ambert",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:blue-veined-cheeses,en:french-cheeses,en:french-blue-veined-cheeses,en:fourme-d-ambert-cheese-from-cow-s-milk",
      "labels": "AOP",
      "labels_tags": "en:pdo",
      "origins": "France",
      "ingredients_text": "",
      "allergens": "",
      "conservation_conditions": "",
      "warning": "",
      "link": "",
      "nutriscore_grade": "",
      "nutriscore_score": null,
      "ecoscore_grade": "c",
      "ecoscore_score": 58
    },
    {
      "id": "fp6",
      "lc": "fr",
      "product_name": "Roquefort Papillon AOP 1/2 ~1,3kg",
      "generic_name": "",
      "brand": "",
      "categories": "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages à pâte persillée, Fromages à pâte persillée français, Fromages de brebis, Roqueforts",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:blue-veined-cheeses,en:french-blue-veined-cheeses,en:sheep-s-milk-cheeses,en:roquefort-cheeses",
      "labels": "AOP",
      "labels_tags": "en:pdo",
      "origins": "France",
      "ingredients_text": "",
      "allergens": "",
      "conservation_conditions": "",
      "warning": "",
      "link": "",
      "nutriscore_grade": "",
      "nutriscore_score": null,
      "ecoscore_grade": "c",
      "ecoscore_score": 48
    },
    {
      "id": "fp7",
      "lc": "fr",
      "product_name": "Bleu D'Auvergne AOP 1/2 Pain ~1,2kg",
      "generic_name": "",
      "brand": "",
      "categories": "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de vache, Fromages à pâte persillée, Fromages à pâte persillée français, Bleus d'Auvergne",
      "categories_tags": "en:dairies,en:fermented-foods,en:fermented-milk-products,en:cheeses,en:cow-cheeses,en:blue-veined-cheeses,en:french-blue-veined-cheeses,en:auvergne-blue-cheese-from-cow-s-milk",
      "labels": "AOP",
      "labels_tags": "en:pdo",
      "origins": "France",
      "ingredients_text": "",
      "allergens": "",
      "conservation_conditions": "",
      "warning": "",
      "link": "",
      "nutriscore_grade": "",
      "nutriscore_score": null,
      "ecoscore_grade": "c",
      "ecoscore_score": 58
    }
]

console.log(fromagesPersilles[0]);

function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max +1));
  }



function selected_event_type(eventType){
    // défini le type d'événement ainsi que la quantité par personne
    switch (eventType){
        case 'repas':
            document.getElementById('event-type-selected').innerText = " V&F.";
            eventSelected = 'repas';
            cheeseQtyPP = 200;
            break;
        case 'apero':
            document.getElementById('event-type-selected').innerText = " apéro.";
            eventSelected = 'apero';
            cheeseQtyPP = 75;
            break;
        case 'degustation':
            document.getElementById('event-type-selected').innerText = "e dégustation.";
            eventSelected = 'degustation';
            cheeseQtyPP = 125;
            break;
    }
}

function cheese_types_quantity(value){
    el = document.getElementById('nb-personnes');
    document.getElementById('nbPersonnes').innerText = value;
    nbPersonnes = value;
    // Définit le nombre de variétés de fromages en fonction du nombre de personne
    if (value <4){
        cheeseNumber = 3;
    } else
    if (value < 15){
        cheeseNumber = ~~(value/3)*3;
    } else
        cheeseNumber = 15;
} 


function check_cheese_types_selection(){
    var checkboxes = document.getElementsByName('cheese-type');
    var cheeses = [];
    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked == true){
            cheeses.push(checkboxes[i].value);
        }
    }
    cheeseTypes = cheeses;
}


function generate_cheese_type_box(cheese_type){
    var template = document.querySelector("#cheese-type-bloc");
    var box = document.importNode(template.content, true);

    var header = box.querySelector('h1.bloc-header');
    var list = box.querySelector('div.bloc-cheese-list');

    switch (cheese_type){
        case 'blue-cheese':
            header.textContent = "Fromages persillés";
            for (var i = 0; i<3; i++);
                let card = generate_cheese_card('blue-cheese');
                console.log(card);
                list.appendChild(card);
            break
        
        case 'fresh-cheese':
            header.textContent = "Fromages frais";
            break
        case 'goat-cheese':
            header.textContent = "Fromages de chèvre";
            break

        case 'pressed-cheese':
            header.textContent = "Fromages pressés cuits";
            break

        case 'rind-washed-cheese':
            header.textContent = "Fromages à croûte lavée";
            break

        case 'sheep-cheese':
            header.textContent = "Fromages de brebis";
            break

        case 'soft-ripened-cheese':
            header.textContent = "Fromages à croûte fleurie";
            break

        case 'uncooked-pressed-cheese':
            header.textContent = "Fromages pressés non cuits";
            break
    }
    return box

}

function generate_cheese_card(cheese_type){

    var template = document.querySelector("#cheese-card");
    var card = document.importNode(template.content, true);

    var name = card.querySelector('h1.cheese-card-header');
    var country = card.querySelector('p.cheese-card-country');

    switch (cheese_type){
        case 'blue-cheese':      
            var randomCheese = fromagesPersilles[getRandomInt(fromagesPersilles.length)];
            name = randomCheese.product_name;
            country = randomCheese.origins;
            return card;        

        case 'fresh-cheese':
            header.textContent = "Fromages frais";
            break
        case 'goat-cheese':
            header.textContent = "Fromages de chèvre";
            break

        case 'pressed-cheese':
            header.textContent = "Fromages pressés cuits";
            break

        case 'rind-washed-cheese':
            header.textContent = "Fromages à croûte lavée";
            break

        case 'sheep-cheese':
            header.textContent = "Fromages de brebis";
            break

        case 'soft-ripened-cheese':
            header.textContent = "Fromages à croûte fleurie";
            break

        case 'uncooked-pressed-cheese':
            header.textContent = "Fromages pressés non cuits";
            break
    }
}




function generatePlateau(){
    // Calcul de la quantité totale de fromage à prévoir
    let qtyFromageTot = cheeseQtyPP*nbPersonnes;
    if (isNaN(qtyFromageTot)){
        alert("Veuillez d'abord choisir un type d'événement!");   
    } else
        document.getElementById("qtyFromage").innerText = qtyFromageTot +'gr.'; 
        
    // Génération des listes de fromages
    document.getElementById('fromages-proposes').innerHTML='';
    if (cheeseTypes.length>0){
        for (var i = 0; i<cheeseTypes.length; i++){
            let node = generate_cheese_type_box(cheeseTypes[i]);
            document.getElementById('fromages-proposes').appendChild(node);
        }
    } else
    alert("Veuillez d'abord choisir au moins un type de fromage!");
    
}

btnGeneration = document.getElementById('btn-generation-plateau');
btnGeneration.addEventListener('click', generatePlateau);