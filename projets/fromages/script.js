let eventSelected; // type d'événement
let cheeseNumber; // Nombre de variétés de fromages
let cheeseQtyPP; // quantité par personne
let cheeseTypesSelected = []; // types de variétés de fromages
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

// Fonction de génération d'un entier random inférieur au nombre spécifié, max qui doit être un entier
function getRandomInt(max) {
    return Math.floor(Math.random()*(max));
  }



// Tri des fromages et stockage dans les listes associées
for (var i=0; i<fromages.length; i++){
    let currentCheese = fromages[i];

    switch (currentCheese.curd){
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

console.log(mixed_cheeses);

// Fonctionsde configuration du plateau
function selected_event_type(eventType){
    // défini le type d'événement ainsi que la quantité par personne
    switch (eventType){
        case 'repas':
            eventSelected = 'repas';
            cheeseQtyPP = 200;
            break;
        case 'apero':
            eventSelected = 'apero';
            cheeseQtyPP = 75;
            break;
        case 'degustation':
            eventSelected = 'degustation';
            cheeseQtyPP = 125;
            break;
    }
}

function cheese_types_quantity(value){
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
            document.getElementById(checkboxes[i].value).classList.remove('hidden');
            cheeses.push(checkboxes[i].value);
        }
    }
    cheeseTypesSelected = cheeses;
}

// Fonctions de générations du plateau
function generate_cheese_type_box(cheese_type){
    document.getElementById(cheese_type).innerHTML='';
    var template = document.querySelector("#cheese-type-bloc");
    var box = document.importNode(template.content, true);
    
    var header = box.querySelector('h3.fr-h4');
    var list = box.querySelector('div.fr-grid-row');
    var btn = box.querySelector('button.fr-btn');
    btn.onclick = function() {generate_cheese_type_box(cheese_type)};
    
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
            header.textContent = "Fromages à pâte pressée cuite";
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
            header.textContent = "Fromages à pâte pressée non cuite";
            for (var i = 0; i<3; i++){
                let card = generate_cheese_card('uncooked-pressed-cheese');
                list.appendChild(card);
            }
            break
    }
    document.getElementById(cheese_type).appendChild(box);
}

function generate_cheese_card(cheese_type){

    var template = document.querySelector("#cheese-example");
    var card = document.importNode(template.content, true);

    var name = card.querySelector('h4.fr-tile__title');
    var origin = card.querySelector('p.fr-tile__desc');
    var img = card.querySelector('img.fr-responsive-img');
    var randomCheese;

    switch (cheese_type){
        case 'blue-cheese':      
            randomCheese = blue_cheeses[getRandomInt(blue_cheeses.length)];       
            break

        case 'fresh-cheese':
            var randomCheese = fresh_cheeses[getRandomInt(fresh_cheeses.length)];
            break

        case 'mixed-cheese':
            var randomCheese = mixed_cheeses[getRandomInt(mixed_cheeses.length)];
            break 

        case 'cooked-pressed-cheese':
            var randomCheese = cooked_pressed_cheeses[getRandomInt(cooked_pressed_cheeses.length)];
            break

        case 'rind-washed-cheese':
            var randomCheese = rind_washed_cheeses[getRandomInt(rind_washed_cheeses.length)];
            break

        case 'stretched-curd-cheese':
            var randomCheese = stretched_curd_cheeses[getRandomInt(stretched_curd_cheeses.length)];
            break

        case 'soft-ripened-cheese':
            var randomCheese = soft_ripened_cheeses[getRandomInt(soft_ripened_cheeses.length)];
            break

        case 'uncooked-pressed-cheese':
            var randomCheese = uncooked_pressed_cheeses[getRandomInt(uncooked_pressed_cheeses.length)];
            break
    }

    name.textContent = randomCheese.name;
    origin.textContent = randomCheese.geo;
    if (randomCheese.img == ""){

    }   else {
        img.src = randomCheese.img;
    }
    
    return card; 
}

function generatePlateau(){
    // Calcul de la quantité totale de fromage à prévoir
    let qtyFromageTot = cheeseQtyPP*nbPersonnes;
    
    //Réinitialisation du message d'erreur
    let messageErreur = document.getElementById("message-erreur");
    messageErreur.classList.add("hidden");

    if (isNaN(qtyFromageTot)){
        messageErreur.classList.remove("hidden");
        return;   
    } else
        document.getElementById("qtyFromage").innerText = qtyFromageTot +'gr.';
        
        // Réinitialisation des divs
        document.getElementById("blue-cheese").innerHTML = '';
        document.getElementById("fresh-cheese").innerHTML = '';
        document.getElementById("mixed-cheese").innerHTML = '';
        document.getElementById("stretched-curd-cheese").innerHTML = '';
        document.getElementById("cooked-pressed-cheese").innerHTML = '';
        document.getElementById("uncooked-pressed-cheese").innerHTML = '';
        document.getElementById("rind-washed-cheese").innerHTML = '';
        document.getElementById("soft-ripened-cheese").innerHTML = '';
        
        // Génération des listes de fromages
        if (cheeseTypesSelected.length>0){
            for (var i = 0; i<cheeseTypesSelected.length; i++){
                generate_cheese_type_box(cheeseTypesSelected[i]);
            }
        } else
            messageErreur.classList.remove("hidden");
            return;
    
}

// Déclenchement de la génération avec l'événement du bouton
btnGeneration = document.getElementById('panel-result');
btnGeneration.addEventListener('click', generatePlateau);