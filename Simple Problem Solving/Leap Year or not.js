// How to check if the year is leap year or not:

// Logic-1: If the year is divisible by 4 then it is leapyear
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLipi = isLeapYear(2044);
console.log(isLipi);

// Output: true

// Logic-2: If the year is not divisible by 100 and divisible by 4,then it is leap year

function leapyear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

const isLipi2 = leapyear(2025);
console.log(isLipi2);

// Output: false