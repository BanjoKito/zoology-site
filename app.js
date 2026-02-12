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
// Now we do the search functionality
function searchAnimals() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = animalDatabase.filter(function(animal) {
        return animal.name.toLowerCase().includes(searchTerm) ||
               animal.species.toLowerCase().includes(searchTerm);
    });
    
    displayAnimalCards(filtered);
}
document.addEventListener('DOMContentLoaded', function() {
    // Display animals
    displayAnimalCards(animalDatabase);
    
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchAnimals);
    
    // Search on Enter key
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchAnimals();
        }
    });
});
// Functioon to filter by class
function filterByClass() {
    const classFilter = document.getElementById('classFilter');
    const selectedClass = classFilter.value;
    
    if (selectedClass === 'all') {
        displayAnimalCards(animalDatabase);
        return;
    }
    const filtered = animalDatabase.filter(function(animal) {
        return animal.classification.class === selectedClass;
    });
    
    displayAnimalCards(filtered);
}
document.addEventListener('DOMContentLoaded', function() {
    const classFilter = document.getElementById('classFilter');
    classFilter.addEventListener('change', filterByClass);
});

// Save data to local storage

// LocalStorage helpers
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Failed to save to localStorage', e);
    }
}

function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : defaultValue;
    } catch (e) {
        console.error('Failed to load from localStorage', e);
        return defaultValue;
    }
}

function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error('Failed to remove from localStorage', e);
    }
}

// Example: persist `animalDatabase` (keeps it as an array if present)
const STORAGE_KEY_ANIMALS = 'animalDatabase';

function saveAnimals() {
    if (typeof localStorage === 'undefined') return;
    saveToLocalStorage(STORAGE_KEY_ANIMALS, window.animalDatabase || []);
}

function loadAnimals() {
    if (typeof localStorage === 'undefined') return;
    const data = loadFromLocalStorage(STORAGE_KEY_ANIMALS, null);
    if (Array.isArray(data)) {
        if (Array.isArray(window.animalDatabase)) {
            window.animalDatabase.length = 0;
            window.animalDatabase.push(...data);
        } else {
            window.animalDatabase = data;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadAnimals();
    // Save when the page is unloaded
    window.addEventListener('beforeunload', saveAnimals);
});
