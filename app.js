// This is the function to display all animal cards on the page
function displayAnimalCards(animals) {
    const container = document.getElementById('animalCards');
    container.innerHTML = '';
    for (let i = 0; i < animals.length; i++) {
        container.innerHTML += animals[i].getCard();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    displayAnimalCards(animalDatabase);
});
// This is the function to show animal details in modal
function showAnimalDetails(animalId) {
    let animal = null;
    for (let i = 0; i < animalDatabase.length; i++) {
        if (animalDatabase[i].id === animalId) {
            animal = animalDatabase[i];
            break;
        }
    }
    
    // If cant be found
    if (!animal) {
        console.log("Animal not found!");
        return;
    }
    
    const modal = document.getElementById('animalModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = animal.getDetailHTML();
    modal.classList.remove('hidden');
}

// So tht can close it
document.addEventListener('DOMContentLoaded', function() {
    displayAnimalCards(animalDatabase);
    
    const modal = document.getElementById('animalModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
