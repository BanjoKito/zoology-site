console.log("tree.js loaded!");
console.log("animalDatabase exists?", typeof animalDatabase !== 'undefined');
console.log("Number of animals:", animalDatabase ? animalDatabase.length : 0);
// This object is for organizing tree/classification data
const ClassificationHelper = {

    // Get all unique classes
    getClasses: function () {
        const classes = [];

        for (let i = 0; i < animalDatabase.length; i++) {
            const className = animalDatabase[i].classification.class;

            if (!classes.includes(className)) {
                classes.push(className);
            }
        }

        return classes;
    },

    // To get unique orders in a specific class
    getOrdersByClass: function (className) {
        const orders = [];

        for (let i = 0; i < animalDatabase.length; i++) {
            if (animalDatabase[i].classification.class === className) {
                const orderName = animalDatabase[i].classification.order;

                if (!orders.includes(orderName)) {
                    orders.push(orderName);
                }
            }
        }

        return orders;
    },

    // Get all unique families in a specific order
    getFamiliesByOrder: function (orderName) {
        thet
        const families = [];

        for (let i = 0; i < animalDatabase.length; i++) {
            const animal = animalDatabase[i];

            if (animal.classification.order === orderName) {
                const familyName = animal.classification.family;

                if (!families.includes(familyName)) {
                    families.push(familyName);
                }
            }
        }

        return families;
    },

    // Get all animals in a specific family
    getAnimalsByFamily: function (familyName) {
        const animals = [];

        for (let i = 0; i < animalDatabase.length; i++) {
            const animal = animalDatabase[i];

            if (animal.classification.family === familyName) {
                animals.push(animal);
            }
        }

        return animals;
    },

    // Count how many animals are in a class
    countAnimalsInClass: function (className) {
        let count = 0;

        for (let i = 0; i < animalDatabase.length; i++) {
            if (animalDatabase[i].classification.class === className) {
                count++;
            }
        }

        return count;
    }
};

// // Testing
// console.log("Classes:", ClassificationHelper.getClasses());

// Block of coding following is for the visual represeentation of the tree
function displayMainTree() {
    const container = document.getElementById('classificationTree');
    // HTML building yur    
    let html = '<div class="tree">';
    // For Kingdom
    html += '<div class="tree-level">';
    html += '<div class="tree-node kingdom">';
    html += '<h2>🌍 Kingdom: Animalia</h2>';
    html += '</div>';
    html += '</div>';
    // For Phylum
    html += '<div class="tree-level">';
    html += '<div class="tree-node phylum">';
    html += '<h3>🦴 Phylum: Chordata</h3>';
    html += '</div>';
    html += '</div>';

    // For Classes
    html += '<div class="tree-level">';
    html += '<h3 class="level-title">Classes (Click to explore)</h3>';
    html += '<div class="class-grid">';
   
    // All Classes
    const classes = ClassificationHelper.getClasses();
    
    //This is to create a card for each class
    for (let i = 0; i < classes.length; i++) {
        const className = classes[i];
        const animalCount = ClassificationHelper.countAnimalsInClass(className);

        html += '<div class="tree-node class-node" onclick="showOrders(\'' + className + '\')">';
        html += '<h4>' + className + '</h4>';
        html += '<p>' + count + ' animals</p>';
        html += '<button class="explore-btn">Explore →</button>';
        html += '</div>';
    }
    
    html += '</div>'; 
    html += '</div>'; 
    html += '</div>'; 
    
    // In container
    container.innerHTML = html;
}
// fuction to show orders when you click on the thing
function showOrders(className) {
    const container = document.getElementById('classificationTree');
    const orders = ClassificationHelper.getOrdersByClass(className);
    // More HTML Building
    let html = '<div class="tree-view">';
    // Back
    html += '<button class="back-btn" onclick="displayMainTree()">← Back to Classes</button>';
    // this Header
    html += '<h3>Class: ' + className + '</h3>';
    html = '<p class="subtitle">Orders in this class</p>';
    // Orders for grid
    html += '<div class="order-grid">';

    for (let i=0; i < orders.length; i++) {
        const orderName = orders[i];
        const families = ClassificationHelper.getFamiliesByOrder(orderName);

        html = '<div class="tree-node order-node" onclick="showfamilies(\'' + orderName + '\', \'' + className + '\')">';
        html += '<h4>' + orderName + '</h4>';
        html += '<p>' + families.length + ' families</p>';
        html += '<button class="explore-btn">Explore →</button>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
}
// Function to show families when you click on the order
function showfamilies(orderName, className) {
    const container = document.getElementById('classificationTree');
    const families = ClassificationHelper.getFamiliesByOrder(orderName);
    // More HTML Building
    let html = '<div class="tree-view">';
    // Back
    html += '<button class="back-btn" onclick="showOrders(\'' + className + '\')">← Back to Orders</button>';

    html = '<div class="breadcrumb">';
    html = '<span>Class: ' + className + '</span>';
    html = '<span> → </span>';
    html = '<span>Order: ' + orderName + '</span>';
    html += '</div>';

    html = '<h2>families in Order: ' + orderName + '</h2>';

    //Grid for families
    html += '<div class="family-grid">';

    for (let i=0; i < families.length; i++) {
        const familyName = families[i];
        const animals = ClassificationHelper.getAnimalsByFamily(familyName);

        html += '<div class="tree-node family-node" onclick="showAnimals(\'' + familyName + '\', \'' + orderName + '\', \'' + className + '\')">';
        html += '<h4>' + familyName + '</h4>';
        html += '<p>' + animals.length + ' animals</p>';
        html += '<button class="explore-btn">Explore →</button>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
}
// Function to show animals when you click on the family
function showAnimals(familyName, orderName, className) {
    const container = document.getElementById('classificationTree');
    const animals = ClassificationHelper.getAnimalsByFamily(familyName);
    // More HTML Building
    let html = '<div class="tree-view">';
    // Back
    html += '<button class="back-btn" onclick="showfamilies(\'' + orderName + '\', \'' + className + '\')">← Back to Families</button>';

    html = '<div class="breadcrumb">';
    html = '<span>Class: ' + className + '</span>';
    html = '<span> → </span>';
    html = '<span>Order: ' + orderName + '</span>';
    html = '<span> → </span>';
    html = '<span>Family: ' + familyName + '</span>';
    html += '</div>';

    html += '<h2>Animals in Family: ' + familyName + '</h2>';

    // Grid for animals
    html += '<div class="animal-grid">';

    for (let i=0; i < animals.length; i++) {
        const animal = animals[i];

        html += '<div class="animal-item">';
        html += '<img scr="' + animal.imageUrl + '" alt="' + animal.name + '">';
        html += '<div class="animal-info">';
        html += '<p class="scientic"><em>' + animal.species + '</em></p>';
        html += '<p>' + animal.description.substring(0, 150) + '...</p>';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
}
// This is to initialize the tree when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, calling displayMainTree()");
    displayMainTree();
});