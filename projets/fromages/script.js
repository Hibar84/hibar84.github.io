let eventSelected; // type d'événement
let cheeseNumber; // Nombre de variétés de fromages
let cheeseQtyPP; // quantité par personne
let cheeseTypes = []; // types de variétés de fromages
let nbPersonnes; // nombre de personne prévues

// Instanciation des listes de fromages par type
let blue_cheeses = [];
let fresh_cheeses = [];
let uncooked_pressed_cheeses = [];
let cooked_pressed_cheeses = [];
let rind_washed_cheeses = [];
let soft_ripened_cheeses = [];
let mixed_cheeses = [];
let stretched_curd_cheeses = [];


// Fonction de génération d'un entier random inférieur au nombre spécifié
function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max +1));
  }



// Tri des fromages et stockage dans les listes associées
for (var i=0; i<fromages.length; i++){
    let currentCheese = fromages[i];

    switch (currentCheese.type_fromage){
        case 'blue-cheese':
            blue_cheeses.push(currentCheese);
            break;
        case 'fresh-cheese':
            fresh_cheeses.push(currentCheese);
            break;
        case 'uncooked-pressed-cheese':
            uncooked_pressed_cheeses.push(currentCheese);
            break;
        case 'cooked-pressed-cheese':
            cooked_pressed_cheeses.push(currentCheese);
            break;
        case 'rind-washed-cheese':
            rind_washed_cheeses.push(currentCheese);
            break;
        case 'soft-ripened-cheese':
            soft_ripened_cheeses.push(currentCheese);
            break;
        case 'mixed-cheese':
            mixed_cheeses.push(currentCheese);
            break;
        case 'stretched-curd-cheese':
            stretched_curd_cheeses.push(currentCheese);
            break;
    }

}

// Fonctionsde configuration du plateau
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

// Fonctions de générations du plateau
function generate_cheese_type_box(cheese_type){
    var template = document.querySelector("#cheese-type-bloc");
    var box = document.importNode(template.content, true);
    
    var header = box.querySelector('h1.box-header');
    var list = box.querySelector('div.box-cheese-list');

    switch (cheese_type){
        case 'blue-cheese':
            header.textContent = "Fromages persillés";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('blue-cheese');
                list.appendChild(card);
            }
            break
        
        case 'fresh-cheese':
            header.textContent = "Fromages frais";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('fresh-cheese');
                list.appendChild(card);
            }
            break

        case 'mixed-cheese':
            header.textContent = "Fromages forts";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('mixed-cheese');
                list.appendChild(card);
            }
            break

        case 'cooked-pressed-cheese':
            header.textContent = "Fromages pressés cuits";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('cooked-pressed-cheese');
                list.appendChild(card);
            }
            break

        case 'rind-washed-cheese':
            header.textContent = "Fromages à croûte lavée";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('rind-washed-cheese');
                list.appendChild(card);
            }
            break

        case 'stretched-curd-cheese':
            header.textContent = "Fromages à pâte filée";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('stretched-curd-cheese');
                list.appendChild(card);
            }
            break

        case 'soft-ripened-cheese':
            header.textContent = "Fromages à croûte fleurie";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('soft-ripened-cheese');
                list.appendChild(card);
            }
            break

        case 'uncooked-pressed-cheese':
            header.textContent = "Fromages pressés non cuits";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('uncooked-pressed-cheese');
                list.appendChild(card);
            }
            break
    }
    return box

}

function generate_cheese_card(cheese_type){

    var template = document.querySelector("#cheese-example");
    var card = document.importNode(template.content, true);

    var name = card.querySelector('h2.cheese-card-header');
    var origin = card.querySelector('p.cheese-card-origin');

    switch (cheese_type){
        case 'blue-cheese':      
            var randomCheese = blue_cheeses[getRandomInt(blue_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card;        

        case 'fresh-cheese':
            var randomCheese = fresh_cheeses[getRandomInt(fresh_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card; 

        case 'mixed-cheese':
            var randomCheese = mixed_cheeses[getRandomInt(mixed_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card; 

        case 'cooked-pressed-cheese':
            var randomCheese = cooked_pressed_cheeses[getRandomInt(cooked_pressed_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card; 

        case 'rind-washed-cheese':
            var randomCheese = rind_washed_cheeses[getRandomInt(rind_washed_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card;

        case 'stretched-curd-cheese':
            var randomCheese = stretched_curd_cheeses[getRandomInt(stretched_curd_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card;

        case 'soft-ripened-cheese':
            var randomCheese = soft_ripened_cheeses[getRandomInt(soft_ripened_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card;

        case 'uncooked-pressed-cheese':
            var randomCheese = uncooked_pressed_cheeses[getRandomInt(uncooked_pressed_cheeses.length)];
            name.textContent = randomCheese.nom;
            origin.textContent = randomCheese.departement;
            return card;
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

// Déclenchement de la génération avec l'événement du bouton
btnGeneration = document.getElementById('btn-generation-plateau');
btnGeneration.addEventListener('click', generatePlateau);