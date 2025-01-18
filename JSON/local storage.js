//console.log('connected');

const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    showProduct(product, quantity);
    saveLocalStorage(product, quantity);
}

const showProduct = (product, quantity) => {
    const ul = document.getElementById('display-product');
    const div = document.createElement('div');
    div.innerText = `${product} : ${quantity}`;
    ul.appendChild(div);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    //console.log(cart); // object hisab a save hoilo
    const cartStringified = JSON.stringify(cart);
    //console.log(cartStringified); // object ke string hisab a save korlam
    localStorage.setItem('cart', cartStringified);
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity);
        showProduct(product, quantity);
    }
}

displayProductsFromLocalStorage();