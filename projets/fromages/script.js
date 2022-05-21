let eventSelected; // type d'événement
let cheeseNumber; // Nombre de variétés de fromages
let cheeseQtyPP; // quantité par personne
let cheeseTypes = []; // types de variétés de fromages
let nbPersonnes;


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
    let box = document.createElement("p");

    switch (cheese_type){
        case 'blue-cheese':
            box.innerText = 'Ici seront des exemples de fromages bleus';
            break
        case 'fresh-cheese':
            box.innerText = 'Ici seront des exemples de fromages frais';
            break
        case 'goat-cheese':
            box.innerText = 'Ici seront des exemples de fromages de chèvre';
            break

        case 'pressed-cheese':
            box.innerText = 'Ici seront des exemples de fromages à pâtes pressées';
            break

        case 'rind-washed-cheese':
            box.innerText = 'Ici seront des exemples de fromages à croûte lavée';
            break

        case 'sheep-cheese':
            box.innerText = 'Ici seront des exemples de fromages de brebis';
            break

        case 'soft-ripened-cheese':
            box.innerText = 'Ici seront des exemples de fromages à pâte molle';
            break

        case 'uncooked-pressed-cheese':
            box.innerText = 'Ici seront des exemples de fromages à pâte pressée non cuite';
            break
    }
    return box

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