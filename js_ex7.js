// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
/*
lessons learned:
get correct tiezone using Date.UTC() static method
*/

for(let y = 2014; y <= 2050; y++){
    let d = new Date(Date.UTC(y, 0, 1));
    if (d.getDay() === 0){
        console.log(`Jan 1st, a Sunday in ${y}`);
    }
}

// fiddle | https://jsfiddle.net/matei218/uremy867/