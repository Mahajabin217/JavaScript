// How to find out the sum of an array of function:

function sum_number(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}

const numbs = [4, 6, 4, 5, 7];
const sums = sum_number(numbs);
console.log('The sum is:', sums);

// Output: The sum is: 26