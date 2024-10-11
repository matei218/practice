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
// Define a function that animates the characters of a string
function animate_string(id) {
    // Get the HTML element by its id
    var element = document.getElementById(id);

    // Access the text node inside the element (assuming no other children)
    var textNode = element.childNodes[0];
    
    // Extract the initial text content of the text node
    var text = textNode.data;

    // Set up an interval to rotate the characters in the text every 100 milliseconds
    setInterval(function () {
        // Move the last character to the beginning of the string
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text content of the text node with the modified string
        textNode.data = text;
    }, 100);
} 
*/