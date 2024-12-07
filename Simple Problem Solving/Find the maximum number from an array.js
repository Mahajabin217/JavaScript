// How to find out the maximum number from an array:

const height = [22, 10, 34, 54, 55, 76, 98];

function maxHeight(height) {
    let max = height[0];
    for (const num of height) {
        //console.log(height);
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = maxHeight(height);
console.log(max);

// Output: 98

function minHeight(height) {
    let min = height[0];
    for (const num of height) {
        //console.log(height);
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const min = minHeight(height);
console.log(min);

// Output: 10