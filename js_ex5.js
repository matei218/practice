// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// using split

let string = 'w3resource';
let arrayOfString  = string.split('');

let reverseStringFe = [];

// using forEach
arrayOfString.forEach(letter =>{
    reverseStringFe.unshift(letter);
})

console.log(reverseStringFe);

// using for
let reverseStringFor = [];
let arrayLen = arrayOfString.length;

for(let i = 0; i < arrayLen; i++){
    reverseStringFor.unshift(arrayOfString[i]);
}

console.log(reverseStringFor);
