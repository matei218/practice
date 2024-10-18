// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  
function checkWithin(num) {
    return (Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20);
}

// fiddle | to come