// How To Reverse A String:

// Way-1:
const letter = 'I am learning Web';
let reverse = ''
for (const sentence of letter) {
    reverse = sentence + reverse;
}
console.log(reverse);

// Output: beW gninrael ma I

// Way-2:
let rev = ''
for (let i = 0; i < letter.length; i++) {
    const sen = letter[i];
    rev = sen + rev;
}
console.log(rev);

// Output: beW gninrael ma I

// Way-3:
const reversed = letter.split('').reverse();
console.log(reversed);

/*
Output:
[
  'b', 'e', 'W', ' ', 'g',
  'n', 'i', 'n', 'r', 'a',
  'e', 'l', ' ', 'm', 'a',
  ' ', 'I'
]
*/