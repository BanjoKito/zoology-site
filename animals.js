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
function Animal(name, species, habitat, diet) {
    this.name = name;
    this.species = species;
    this.habitat = habitat;
    this.diet = diet;
}
const lion = new Animal(
    "Lion", 
    "Panthera leo",
    "African savannas and grasslands",
    "Carnivore - primarily large ungulates"
);
// Testing
console.log(lion);
console.log("The " + lion.name + " lives in " + lion.habitat + " and eats " + lion.diet + ".");
//Works.


// This method will be shared by ALL animals
Animal.prototype.getInfo = function() {
    return this.name + " (" + this.species + ") - Lives in: " + this.habitat + ", Diet: " + this.diet;
};
 console.log(lion.getInfo())

// Ok im create an array to store all animals
const animalDatabase = [];

animalDatabase.push(new Animal(
    "Lion", 
    "Panthera leo",
    "African savannas",
    "Carnivore"
));

animalDatabase.push(new Animal(
    "African Elephant",
    "Loxodonta africana", 
    "Savannas and forests",
    "Herbivore"
));

animalDatabase.push(new Animal(
    "Bald Eagle",
    "Haliaeetus leucocephalus",
    "Near water in North America",
    "Carnivore - fish"
));

// Testing
console.log("Total animals:", animalDatabase.length);
console.log(animalDatabase);
// Works.

