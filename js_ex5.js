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

/*
// Define a function named animate_string that takes an id as a parameter
const animate_string = (id) => {
    // Get the element with the specified id
    const element = document.getElementById(id);

    // Get the text node from the first child of the element
    const textNode = element.childNodes[0]; // assuming no other children

    // Get the initial text from the text node
    let text = textNode.data;

    // Use setInterval to animate the string every 100 milliseconds
    setInterval(() => {
        // Shift the last character to the front of the text
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text node with the new text
        textNode.data = text;
    }, 100);
};

// Call the function with a sample id
animate_string('yourElementId'); 
*/