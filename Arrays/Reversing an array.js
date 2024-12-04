// How to Reverse an array with reverse() method:

const num = [4, 3, 1, 9, 5, 7, 2, 6, 8, 7];
const rev = num.reverse();
console.log(rev);

/* Output: [
    7, 8, 6, 2, 7,
    5, 9, 1, 3, 4
    ]
*/

// How to Reverse an array without reverse() method:
// Way-1:
const rev_num = [];

for (const number of num) {
    //console.log(number);
    rev_num.unshift(number);
}
console.log(rev_num);

/* Output: [
    4, 3, 1, 9, 5,
    7, 2, 6, 8, 7
    ]
*/

// Way-2:
const re_num = [];

for (let i = 0; i < num.length; i++) {
    const numbers = num[i];
    re_num.unshift(numbers);
}
console.log(re_num);

/* Output: [
    4, 3, 1, 9, 5,
    7, 2, 6, 8, 7
    ]
*/

// Way-3:

for (let i = num.length - 1; i >= 0; i--) {
    const nums = num[i];
    console.log(nums);
}

/* Output: 
4
3
1
9
5
7
2
6
8
7
*/

// Way-4:

const rev_rev_num=[];
for (let i = num.length - 1; i >= 0; i--) {
    const nums = num[i];
    console.log(nums);
    rev_rev_num.push(nums);
}
console.log(rev_rev_num);

/* Output: [
    4, 3, 1, 9, 5,
    7, 2, 6, 8, 7
    ]
*/