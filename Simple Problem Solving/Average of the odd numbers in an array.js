// How to find out the average of the odd numbers in an array:

function averageOdd(numbers) {
    let odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [29, 22, 10, 21, 40];
const avg = averageOdd(numbers);
console.log(avg);

/* Output: 50 2
           25
*/