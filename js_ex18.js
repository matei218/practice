// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

// vq
function checkPair(a,b){
    const givenNumber = 50;
    var addition = a + b;
    if(addition === 50 || a === 50 || b === 50){
        return true
    }else{
        return false;
    }
}

// v2

function checkPair(a, b) {
    const givenNumber = 50;
    var addition = a + b;
    
    return addition === givenNumber || a === givenNumber || b === givenNumber;
}

// fillde | to come