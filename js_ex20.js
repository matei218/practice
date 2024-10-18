// Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
// v1

const checkInt = (a,b) =>{
    if(a < 0){
        console.log(`Given Num A, ${a}, is positive`)
    }else if(a > 0){
        console.log(`Given Num A, ${a}, is negative`)
    }else{
        console.log(`Given Num A, ${a}, is 0`)
    }

    if(b < 0){
        console.log(`Given Num B, ${b}, is positive`)
    }else if(b > 0){
        console.log(`Given Num B, ${b}, is negative`)
    }else{
        console.log(`Given Num B, ${b}, is 0`)
    }
}

checkInt(-10,10);

// v2

const checkIntVtwo = (c, d) => {
    let numA = c < 0 
        ? `Given Num C, ${c} is negative`
        : c > 0 
        ? `Given Num C, ${c} is positive`
        : `Given Num C, ${c} is 0`;

    let numB = d < 0 
        ? `Given Num D, ${d} is negative`
        : d > 0 
        ? `Given Num D, ${d} is positive`
        : `Given Num D, ${d} is 0`;

    console.log(numA);
    console.log(numB);
};

checkIntVtwo(2,-10);

// v3
const positive_negative = (x, y) => ((x < 0 && y > 0) || (x > 0 && y < 0));

// fiddle | to comea