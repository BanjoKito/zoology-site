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

animalDatabase.push(new Animal(
    "Cheetah",
    "Acinonyx jubatus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Carnivora",
        family: "Felidae"
    },
    "Grasslands and savannas of Africa",
    "Carnivore - primarily small to medium-sized ungulates",
    "The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph. Unlike other big cats, cheetahs cannot roar but can purr. They have distinctive black tear marks running from their eyes to their mouths.",
    "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D"
));

animalDatabase.push(new Animal(
    "Bottlenose Dolphin",
    "Tursiops truncatus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Cetacea",
        family: "Delphinidae"
    },
    "Temperate and tropical oceans worldwide",
    "Carnivore - fish, squid, and crustaceans",
    "Bottlenose dolphins are highly intelligent marine mammals known for their playful behavior and complex social structures. They use echolocation to navigate and hunt, and can recognize themselves in mirrors.",
    "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=400"
));

animalDatabase.push(new Animal(
    "Giant Panda",
    "Ailuropoda melanoleuca",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Carnivora",
        family: "Ursidae"
    },
    "Mountain forests of central China",
    "Herbivore - primarily bamboo (99% of diet)",
    "Despite being classified in the order Carnivora, giant pandas are almost exclusively herbivorous. They spend 12-16 hours a day eating bamboo and must consume 26-84 pounds daily to meet their energy needs.",
    "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400"
));

animalDatabase.push(new Animal(
    "Polar Bear",
    "Ursus maritimus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Carnivora",
        family: "Ursidae"
    },
    "Arctic ice and surrounding waters",
    "Carnivore - primarily seals",
    "Polar bears are the largest land carnivores and are perfectly adapted to life in the Arctic. Their white fur provides camouflage, and they have black skin underneath to absorb heat. They are excellent swimmers and can swim for days.",
    "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400"
));

animalDatabase.push(new Animal(
    "Red Kangaroo",
    "Macropus rufus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Diprotodontia",
        family: "Macropodidae"
    },
    "Arid and semi-arid regions of Australia",
    "Herbivore - grasses and shrubs",
    "The red kangaroo is the largest marsupial in the world. Males can reach speeds of 35 mph and leap up to 30 feet in a single bound. Females have a permanent pouch where their young (joeys) develop.",
    "https://images.unsplash.com/photo-1763580996364-2348be80e33f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZCUyMGthbmdhcm9vfGVufDB8fDB8fHww"
));

animalDatabase.push(new Animal(
    "Peregrine Falcon",
    "Falco peregrinus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Falconiformes",
        family: "Falconidae"
    },
    "Worldwide except Antarctica",
    "Carnivore - primarily other birds",
    "The peregrine falcon is the fastest animal on Earth, reaching speeds over 240 mph during hunting dives called stoops. They have been recorded on every continent except Antarctica and have adapted to urban environments.",
    "https://images.unsplash.com/photo-1633001111711-838ae665ca8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZWdyaW5lJTIwZmFsY29ufGVufDB8fDB8fHww"
));

animalDatabase.push(new Animal(
    "Blue Jay",
    "Cyanocitta cristata",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Passeriformes",
        family: "Corvidae"
    },
    "Forests of eastern North America",
    "Omnivore - nuts, seeds, insects, small vertebrates",
    "Blue jays are intelligent and adaptable birds known for their striking blue plumage and loud calls. They are excellent mimics and can imitate the calls of hawks. They play an important role in forest regeneration by caching acorns.",
    "https://images.unsplash.com/photo-1576121267872-1c0c5c24e7f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMGpheXxlbnwwfHwwfHx8MA%3D%3D"
));

animalDatabase.push(new Animal(
    "Great Horned Owl",
    "Bubo virginianus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Strigiformes",
        family: "Strigidae"
    },
    "Forests, deserts, and urban areas of the Americas",
    "Carnivore - small mammals, birds, reptiles",
    "Great horned owls are powerful nocturnal hunters with exceptional vision and hearing. Their signature 'horns' are actually tufts of feathers. They can exert a grip strength of 28 pounds and are one of the few predators of skunks.",
    "https://plus.unsplash.com/premium_photo-1661833889500-c39c8644f1a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
));

animalDatabase.push(new Animal(
    "Atlantic Puffin",
    "Fratercula arctica",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Charadriiformes",
        family: "Alcidae"
    },
    "North Atlantic coasts and islands",
    "Carnivore - small fish, especially sand eels",
    "Atlantic puffins are seabirds with colorful beaks that brighten during breeding season. They are excellent swimmers, using their wings to 'fly' underwater at speeds up to 55 mph. They can carry up to 60 small fish in their beaks at once.",
    "https://plus.unsplash.com/premium_photo-1667955010210-6b6f2eeb5be9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVmZmlufGVufDB8fDB8fHww"
));

animalDatabase.push(new Animal(
    "American Flamingo",
    "Phoenicopterus ruber",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Aves",
        order: "Phoenicopteriformes",
        family: "Phoenicopteridae"
    },
    "Caribbean, northern South America, Galapagos",
    "Filter feeder - algae, small crustaceans, mollusks",
    "Flamingos get their pink color from carotenoid pigments in their diet. They feed with their heads upside down, using their uniquely shaped beaks to filter food from water. They can stand on one leg for hours to conserve body heat.",
    "https://images.unsplash.com/photo-1539418561314-565804e349c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxhbWluZ298ZW58MHx8MHx8fDA%3D"
));

animalDatabase.push(new Animal(
    "King Cobra",
    "Ophiophagus hannah",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Squamata",
        family: "Elapidae"
    },
    "Forests of India and Southeast Asia",
    "Carnivore - primarily other snakes",
    "The king cobra is the world's longest venomous snake, capable of growing up to 18 feet. Despite their fearsome reputation, they are generally shy and avoid humans. Females are one of the few snakes that build nests and guard their eggs.",
    "https://images.unsplash.com/photo-1727897615247-004493410607?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2luZyUyMGNvYnJhfGVufDB8fDB8fHww"
));

animalDatabase.push(new Animal(
    "American Alligator",
    "Alligator mississippiensis",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Crocodilia",
        family: "Alligatoridae"
    },
    "Freshwater environments in southeastern United States",
    "Carnivore - fish, birds, mammals, turtles",
    "American alligators are apex predators that play a crucial role in their ecosystems. They can live 30-50 years in the wild and their bite force is one of the strongest in the animal kingdom at over 2,000 pounds per square inch.",
    "https://images.unsplash.com/photo-1595433409683-943ded8e7b1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxsaWdhdG9yfGVufDB8fDB8fHww"
));

animalDatabase.push(new Animal(
    "Komodo Dragon",
    "Varanus komodoensis",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Squamata",
        family: "Varanidae"
    },
    "Indonesian islands (Komodo, Rinca, Flores, Gili Motang)",
    "Carnivore - deer, pigs, water buffalo, smaller dragons",
    "The Komodo dragon is the largest living lizard, growing up to 10 feet long. They have venomous bites and can detect carrion from up to 6 miles away. Despite their size, they can run up to 13 mph in short bursts.",
    "https://plus.unsplash.com/premium_photo-1661898166024-7d141970335b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29tb2RvJTIwZHJhZ29ufGVufDB8fDB8fHww"
));

animalDatabase.push(new Animal(
    "Leatherback Sea Turtle",
    "Dermochelys coriacea",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Testudines",
        family: "Dermochelyidae"
    },
    "All tropical and temperate oceans",
    "Carnivore - primarily jellyfish",
    "The leatherback is the largest sea turtle and can weigh up to 2,000 pounds. Unlike other sea turtles, they lack a hard shell and instead have a leathery skin. They can dive to depths of 4,000 feet and regulate their body temperature.",
    "https://images.unsplash.com/photo-1509747129352-c4244f0b9bf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcmJhY2slMjB0dXJ0bGV8ZW58MHx8MHx8fDA%3D"
));

animalDatabase.push(new Animal(
    "Green Iguana",
    "Iguana iguana",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Squamata",
        family: "Iguanidae"
    },
    "Rainforests of Central and South America",
    "Herbivore - leaves, flowers, and fruit",
    "Green iguanas are large, arboreal lizards that can grow up to 6 feet long including their tail. They are excellent swimmers and can stay submerged for up to 30 minutes. Males develop large dewlaps and head crests during breeding season.",
    "https://images.unsplash.com/photo-1610604695612-ae85d1a6e54e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBpZ3VhbmF8ZW58MHx8MHx8fDA%3D"
));

animalDatabase.push(new Animal(
    "Poison Dart Frog",
    "Dendrobates tinctorius",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Amphibia",
        order: "Anura",
        family: "Dendrobatidae"
    },
    "Rainforests of Central and South America",
    "Carnivore - ants, termites, small insects",
    "Poison dart frogs are brilliantly colored to warn predators of their toxicity. Indigenous people used their toxic skin secretions to poison blow darts. In captivity, they lose their toxicity because it comes from their wild diet.",
    "https://plus.unsplash.com/premium_photo-1661895407372-fa9ae815546e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFydCUyMGZyb2d8ZW58MHx8MHx8fDA%3D"
));

animalDatabase.push(new Animal(
    "American Bullfrog",
    "Lithobates catesbeianus",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Amphibia",
        order: "Anura",
        family: "Ranidae"
    },
    "Lakes, ponds, and slow streams of North America",
    "Carnivore - insects, fish, small birds, snakes, other frogs",
    "The American bullfrog is the largest frog in North America, with some reaching 8 inches in length. Males produce a deep 'jug-o-rum' call. They are voracious predators and will eat almost anything they can swallow.",
    "https://images.unsplash.com/photo-1596913499156-73aeef8d1d67?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVsbGZyb2d8ZW58MHx8MHx8fDA%3D"
));

animalDatabase.push(new Animal(
    "Axolotl",
    "Ambystoma mexicanum",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Amphibia",
        order: "Urodela",
        family: "Ambystomatidae"
    },
    "Lake Xochimilco, Mexico City",
    "Carnivore - worms, insects, small fish",
    "Axolotls are unique salamanders that retain their larval features throughout life, including external gills. They have remarkable regenerative abilities and can regrow entire limbs, parts of their brain, and heart. Critically endangered in the wild.",
    "https://images.unsplash.com/photo-1712874364529-2d17f6111bb1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXhvbG90bHxlbnwwfHwwfHx8MA%3D%3D"
));

animalDatabase.push(new Animal(
    "Great White Shark",
    "Carcharodon carcharias",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        order: "Lamniformes",
        family: "Lamnidae"
    },
    "Coastal surface waters of all major oceans",
    "Carnivore - fish, rays, seals, sea lions, dolphins",
    "Great white sharks are apex predators with up to 300 serrated teeth arranged in rows. They can detect a single drop of blood in 25 gallons of water and can sense electrical fields produced by other animals. They can live 70+ years.",
    "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400"
));


animalDatabase.push(new Animal(
    "Clownfish",
    "Amphiprion ocellaris",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Perciformes",
        family: "Pomacentridae"
    },
    "Coral reefs of the Pacific and Indian Oceans",
    "Omnivore - algae, zooplankton, small crustaceans",
    "Clownfish live in a symbiotic relationship with sea anemones, whose stinging tentacles protect them from predators. They are immune to anemone stings. All clownfish are born male, and the dominant male can change into a female.",
    "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvd24lMjBmaXNofGVufDB8fDB8fHww"
));


animalDatabase.push(new Animal(
    "Giant Manta Ray",
    "Mobula birostris",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        order: "Myliobatiformes",
        family: "Mobulidae"
    },
    "Tropical and subtropical ocean waters worldwide",
    "Filter feeder - zooplankton, small fish",
    "Giant manta rays are the largest rays in the world, with wingspans up to 29 feet. Despite their size, they feed on tiny organisms by filter feeding. They are highly intelligent with the largest brain-to-body ratio of any fish.",
    "https://images.unsplash.com/photo-1618265909156-0507770ef0d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFudGElMjByYXl8ZW58MHx8MHx8fDA%3D"
));


animalDatabase.push(new Animal(
    "Red Lionfish",
    "Pterois volitans",
    {
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Scorpaeniformes",
        family: "Scorpaenidae"
    },
    "Indo-Pacific reefs (invasive in Atlantic)",
    "Carnivore - small fish and invertebrates",
    "Lionfish have venomous spines that can cause painful stings. They are voracious predators that can consume prey up to half their own size. Native to the Indo-Pacific, they have become invasive in the Atlantic, threatening native species.",
    "https://plus.unsplash.com/premium_photo-1684933348916-eb63726b6557?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbiUyMGZpc2h8ZW58MHx8MHx8fDA%3D"
));
// Testing
console.log("Total animals:", animalDatabase.length);
console.log(animalDatabase[0].name);
console.log(animalDatabase[0].getCard());

// Oh Lord, it works😭🙏🏽

// Ok, thats done now I need to add the thing thingy to make sure the details are actually displayed. But this file is done, no im going to app.js