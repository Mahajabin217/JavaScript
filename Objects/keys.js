// How to find out how many keys we have on objects:

const person = {
    name: 'Ritu',
    age: 25,
    profession: 'Engineer',
    salary: 50000
}
const keys = Object.keys(person);
console.log(keys);

// Output: [ 'name', 'age', 'profession', 'salary' ]