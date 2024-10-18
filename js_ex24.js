// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

// v1
function mutateString(str){
    firstChar = str[0];
    return firstChar + str + firstChar;
}

console.log(mutateString('swift'));

// v2

function addFirstCharToFrontAndBack(str) {
    if (str.length === 0) {
        return "The string is empty!";
    }

    let firstChar = str.charAt(0);
    let newString = firstChar + str + firstChar;
    
    return newString;
}

let originalString = "hello";
let result = addFirstCharToFrontAndBack(originalString);
console.log(result);

// fiddle | to come