// How to find out how many values we have on objects:

const person = {
    name: 'Ritu',
    age: 25,
    profession: 'Engineer',
    salary: 50000
}
const values = Object.values(person);
console.log(values);

// Output: [ 'Ritu', 25, 'Engineer', 50000 ]