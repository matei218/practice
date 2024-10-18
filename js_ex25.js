// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
function checkMultiple(n){
    if((n > 0) && n % 3 === 0 || n % 7 === 0){
        return `${n} is a multiple of either 3 or 7`;
    }else{
        return `${n} is not a multiple of either 3 or 7`;
    }
}

console.log(checkMultiple(21));