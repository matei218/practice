// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  
function removeCh(str, pos){
    return str.slice(0, pos) + str.slice(pos + 1);
}

console.log(removeCh('Matthew', 2));

// fiddle | to come