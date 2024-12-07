// How to Build Calculator:

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'divide') {
        const result = divide(a, b);
        return result;
    }
    else {
        return "Invalid input";
    }
}

const result1 = calculator(10, 20, 'add');
const result2 = calculator(40, 20, 'subtract');
const result3 = calculator(10, 20, 'multiply');
const result4 = calculator(50, 10, 'divide');
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

/* Output: 30
           20
           200
           5
*/