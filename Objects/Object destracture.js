// How Destructions work on objects:

const actor = {
    name: 'Sakib',
    age: 40,
    money: 19376862,
    phn: '01826735032'
}

const { phn } = actor;
console.log(phn);

// Output: 01826735032

// Function a use korbo je bhabe:
function mul(a, b) {
    return [a * 2, b * 2];
}
const [first, second] = mul(5, 6);
console.log(first, second);

// Output: 10 12