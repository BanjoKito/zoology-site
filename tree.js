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
    getFamiliesByOrder: function (orderName) {thet
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

// Testing
console.log("Classes:", ClassificationHelper.getClasses());