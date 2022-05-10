import * as blueCheeses from './cheeses/blue-cheese.json';

function selected_event_type(eventType){
    switch (eventType){
        case 'repas':
            document.getElementById('event-type-selected').innerText = "L'événement est un V&F";
            break;
        case 'apero':
            document.getElementById('event-type-selected').innerText = "L'événement est un apéro";
            break;
        case 'degustation':
            document.getElementById('event-type-selected').innerText = "L'événement est un plateau de dégustation";
            break;
    }
}

function cheese_types_quantity(nbPersonnes){
    if (nbPersonnes <4){
        return 3;
    } else 
    if (nbPersonnes < 15){
        return ~~(nbPersonnes/3)*3;
    } else 
        return 15;
}

function check_cheese_types_selection(){
    var checkboxes = document.getElementsByName('cheese-type');
    var cheeses = [];
    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked == true){
            cheeses.push(checkboxes[i].value);
        }
    }
    console.log(cheeses);
}

console.log(blueCheeses);
