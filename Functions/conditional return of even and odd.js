// How to return odd and even number by using condition in function:

function odd_even(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const num1 = odd_even(33);
console.log(num1);

const num2 = odd_even(50);
console.log(num2);

/* Output: false
           true
*/