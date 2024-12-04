// How to Sort an array:

const name = ['akib', 'sakib', 'rakib', 'wakib', 'mokib'];
const sort_name = name.sort();
console.log(sort_name);

// Output: [ 'akib', 'mokib', 'rakib', 'sakib', 'wakib' ]

const num = [4, 8, 7, 10, 16, 20];
const sort_num = num.sort();
console.log(sort_num);

// Output: [ 10, 16, 20, 4, 7, 8 ] this way we can't appropriate results

num.sort((a, b) => a - b); // Ascending order 
num.sort((a, b) => b - a); // Descending order
console.log(num);

// Output: [ 4, 7, 8, 10, 16, 20 ]
// Output: [ 20, 16, 10, 8, 7, 4 ]