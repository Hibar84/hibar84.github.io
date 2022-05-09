
function selected_event_type(eventType){
    switch (eventType){
        case 'repas':
            document.getElementById('fromages-proposes').innerText = "L'événement est un V&F";
            break;
        case 'apero':
            document.getElementById('fromages-proposes').innerText = "L'événement est un apéro";
            break;
        case 'degustation':
            document.getElementById('fromages-proposes').innerText = "L'événement est un plateau de dégustation";
            break;
        default:
            document.getElementById('fromages-proposes').innerText = "Veuillez sélectionner un type d'évenement";
    }
}