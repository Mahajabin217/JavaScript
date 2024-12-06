// How to return all the even numbers from an array using function:

function even_num(number) {
    const arr = [];
    for (const num of number) {
        if (num % 2 === 0) {
            //console.log(num);
            arr.push(num);
        }
    }
    return arr;
}

const numbs = [20, 11, 15, 22, 32, 40];
const even = even_num(numbs);
console.log('The even number is: ', even);

// Output: The even number is:  [ 20, 22, 32, 40 ]