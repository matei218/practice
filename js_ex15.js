// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// V1

const getDifference = (givenNumber) => {
    const difference = givenNumber - 13;
    
    if (givenNumber > 13) {
        return Math.abs(difference) * 2;
    }

    return difference;
};

console.log(getDifference(40));
console.log(getDifference(6));


// V2

let givenNumber;

const difference = (gNum) => {
    return gNum <= 13 ? 13 - gNum : (gNum - 13) * 2;
}

console.log(difference(40));
console.log(difference(6));

// fiddle | to come