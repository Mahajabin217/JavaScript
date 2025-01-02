// Converting JSON strings into JavaScript objects:

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

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);