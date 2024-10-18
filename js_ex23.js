/* Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. 
The string length must be broader than or equal to 1. */

function swapFirstLast(str){
    let strLen = str.length;
    if(strLen < 1){
        return 'String Len is too small';
    }

    if(strLen === 1){
        return str;
    }

    let firstChar = str[0];
    let lastChar = str[strLen - 1];

    return lastChar + str.slice(1, -1) + firstChar;
}

console.log(swapFirstLast('Benedetta'));

// fiddle | to come 
// point to improve, you can check if the first chat is uppercasem then make sure the new first character is uppercase as well while ther last char is always lower case