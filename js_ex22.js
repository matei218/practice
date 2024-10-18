// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

// v1
function removeCh(str, pos){
    return str.slice(0, pos) + str.slice(pos + 1);
}

console.log(removeCh('Matthew', 2));

// v2

function removeChTwo(str, pos){
    let character = str.charAt(pos);
    return str.replace(character,'');
}

console.log(removeChTwo('Benn', 3));

// fiddle | to come