// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

// v1

const sumOfTwo = (n1, n2) =>{
    if(n1 === n2){
        return (n1 + n2) * 3;
    }else{
        return n1 + n2
    }
}

console.log(sumOfTwo(1,2));

// v2

const sum = (x, y) =>{
    const sum = x + y;
    return (x === y) ? sum * 3 : sum;
}

console.log(computeSum(5, 5)); 
console.log(computeSum(3, 4)); 

// fiddle | to come