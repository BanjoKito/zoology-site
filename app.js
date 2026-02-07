// This is the function to display all animal cards on the page
function displayAnimalCards(animals) {
    const container = document.getElementById('animalCards');
    container.innerHTML = '';
    for (let i = 0; i < animals.length; i++) {
        container.innerHTML += animals[i].getCard();
    }
}
// this is general dispaly card fucntion
document.addEventListener('DOMContentLoaded', function() {
    displayAnimalCards(animalDatabase);
});