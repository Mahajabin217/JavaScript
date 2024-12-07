// How to remove duplicate numbers/values from an array:

const biryanikhabe = ['abul', 'babul', 'chabul', 'dabul', 'babul', 'abul', 'kabul'];
const num = [22, 10, 20, 8, 22, 10, 55, 90];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const unique_array = noDuplicate(biryanikhabe);
console.log(unique_array);

// Output: [ 'abul', 'babul', 'chabul', 'dabul', 'kabul' ]