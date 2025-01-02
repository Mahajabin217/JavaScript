// JSON = JavaScript Object Notation
// JSON is a text format for storing and transporting data

// Converting an object into a JSON string:
const shop = {
    owner: 'Ritu',
    address: {
        street: 'south mousundhi',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['pc', 'laptop', 'phone'],
    isOpen: true,
    isNew: false
};

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);