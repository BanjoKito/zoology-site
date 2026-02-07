// // JS File for the Animals
// //Im commenting so much because I want to prove to myself that I understand what im doing😭😭

// //Constructor function for creating animal objects
// function Animal(name, species) {
//     this.name = name;
//     this.species = species;
// }

// const lion = new Animal("Lion", "Panthera leo");

// // Testing
// console.log(lion);
// console.log(lion.name);
// console.log(lion.species);


// Ok, it works. Now lemme actually start.
// function Animal(name, species, habitat, diet) {
//     this.name = name;
//     this.species = species;
//     this.habitat = habitat;
//     this.diet = diet;
// }
// const lion = new Animal(
//     "Lion", 
//     "Panthera leo",
//     "African savannas and grasslands",
//     "Carnivore - primarily large ungulates"
// );
// // Testing
// console.log(lion);
// console.log("The " + lion.name + " lives in " + lion.habitat + " and eats " + lion.diet + ".");
// //Works.


// // This method will be shared by ALL animals
// Animal.prototype.getInfo = function() {
//     return this.name + " (" + this.species + ") - Lives in: " + this.habitat + ", Diet: " + this.diet;
// };
//  console.log(lion.getInfo())

// // Ok im create an array to store all animals
// const animalDatabase = [];

// animalDatabase.push(new Animal(
//     "Lion", 
//     "Panthera leo",
//     "African savannas",
//     "Carnivore"
// ));

// animalDatabase.push(new Animal(
//     "African Elephant",
//     "Loxodonta africana", 
//     "Savannas and forests",
//     "Herbivore"
// ));

// animalDatabase.push(new Animal(
//     "Bald Eagle",
//     "Haliaeetus leucocephalus",
//     "Near water in North America",
//     "Carnivore - fish"
// ));

// // Testing
// console.log("Total animals:", animalDatabase.length);
// console.log(animalDatabase);
// // Works.

function Animal(name, species, classification, habitat, diet, description, imageUrl) {
    this.name = name;
    this.species = species;
    this.classification = classification;  // So this will be an object
    this.habitat = habitat;
    this.diet = diet;
    this.description = description;
    this.imageUrl = imageUrl;
    this.id = Date.now() + Math.random();  // Gives unique ID for each animal taht is added
}

// Because I changed my constructor, i need to change my method
Animal.prototype.getFullClassification = function() {
    return "Kingdom: " + this.classification.kingdom + "\n" +
           "Phylum: " + this.classification.phylum + "\n" +
           "Class: " + this.classification.class + "\n" +
           "Order: " + this.classification.order + "\n" +
           "Family: " + this.classification.family + "\n" +
           "Species: " + this.species;
};
// \n is to creat a new line in string

// This method will generate an HTML card for the animal
Animal.prototype.getCard = function() {
    return '<div class="animal-card" data-id="' + this.id + '">' +
               '<img src="' + this.imageUrl + '" alt="' + this.name + '">' +
               '<div class="card-content">' +
                   '<h3>' + this.name + '</h3>' +
                   '<p class="scientific-name">' + this.species + '</p>' +
                   '<p class="class-badge">' + this.classification.class + '</p>' +
                   '<button class="details-btn" onclick="showAnimalDetails(' + this.id + ')">' +
                       'View Details' +
                   '</button>' +
               '</div>' +
           '</div>';
};

// This method will generate a detailed HTML view for the animal
Animal.prototype.getDetailHTML = function() {
    return '<div class="animal-detail">' +
               '<img src="' + this.imageUrl + '" alt="' + this.name + '">' +
               '<div class="detail-info">' +
                   '<h2>' + this.name + '</h2>' +
                   '<p class="scientific"><em>' + this.species + '</em></p>' +
                   
                   '<div class="classification-box">' +
                       '<h3>Classification</h3>' +
                       '<pre>' + this.getFullClassification() + '</pre>' +
                   '</div>' +
                   
                   '<div class="info-section">' +
                       '<h3>Habitat</h3>' +
                       '<p>' + this.habitat + '</p>' +
                   '</div>' +
                   
                   '<div class="info-section">' +
                       '<h3>Diet</h3>' +
                       '<p>' + this.diet + '</p>' +
                   '</div>' +
                   
                   '<div class="info-section">' +
                       '<h3>Description</h3>' +
                       '<p>' + this.description + '</p>' +
                   '</div>' +
               '</div>' +
           '</div>';
};
// creating an empty arrya to act as a database for our animals
const animalDatabase = [];

animalDatabase.push(new Animal(
    "African Lion",
    "Panthera leo",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Carnivora",
        family: "Felidae"
    },
    "Savannas and grasslands of sub-Saharan Africa",
    "Carnivore - hunts large ungulates like zebras and wildebeest",
    "The lion is a large cat of the genus Panthera. Known as the 'king of the jungle', lions are social animals that live in groups called prides. Males are distinguished by their impressive manes.",
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400"
));

animalDatabase.push(new Animal(
    "African Elephant",
    "Loxodonta africana",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Proboscidea",
        family: "Elephantidae"
    },
    "Savannas, forests, and deserts of Africa",
    "Herbivore - grasses, leaves, bark, and fruits",
    "The African elephant is the largest living terrestrial animal. They are highly intelligent and social, living in matriarchal family groups. Their trunk contains over 40,000 muscles.",
    "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400"
));

animalDatabase.push(new Animal(
    "Bald Eagle",
    "Haliaeetus leucocephalus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Accipitriformes",
        family: "Accipitridae"
    },
    "Near large bodies of water in North America",
    "Carnivore - primarily fish, also waterfowl and small mammals",
    "The bald eagle is a bird of prey found in North America. It is the national bird and symbol of the United States. Despite the name, bald eagles are not actually bald - their white head feathers make them appear so.",
    "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400"
));

animalDatabase.push(new Animal(
    "Green Sea Turtle",
    "Chelonia mydas",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Testudines",
        family: "Cheloniidae"
    },
    "Tropical and subtropical oceans worldwide",
    "Herbivore - primarily seagrasses and algae",
    "Green sea turtles are large sea turtles named for the greenish color of their fat and cartilage. They can hold their breath for hours and migrate thousands of miles between feeding grounds and nesting beaches.",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400"
));

animalDatabase.push(new Animal(
    "Emperor Penguin",
    "Aptenodytes forsteri",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Sphenisciformes",
        family: "Spheniscidae"
    },
    "Antarctic ice and surrounding waters",
    "Carnivore - fish, squid, and krill",
    "The emperor penguin is the tallest and heaviest of all penguin species. They can dive to depths of over 500 meters and hold their breath for more than 20 minutes. Males incubate eggs on their feet during the harsh Antarctic winter.",
    "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400"
));

// Testing
console.log("Total animals:", animalDatabase.length);
console.log(animalDatabase[0].name);
console.log(animalDatabase[0].getCard());

// Oh Lord, it works😭🙏🏽

// Ok, thats done now I need to add the thing thingy to make sure the details are actually displayed. But this file is done, no im going to app.js