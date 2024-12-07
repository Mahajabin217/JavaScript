// How to Swap one number to another:

// Way-1:
let a = 5;
let b = 7;

console.log(a, b);

const temp = a;
a = b;
b = temp;

console.log(a, b);

/* Output: 5 7
           7 5
*/


// Way-2:
let x = 10;
let y = 20;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);

/* Output: 10 20
           20 10
*/