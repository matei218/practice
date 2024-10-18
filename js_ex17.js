/* Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple the absolute difference if the specified number is greater than 19.   */

function computeDifference(num){
    const givenNumver = 19;
    var difference = Math.abs(num - givenNumver);
    if(num > givenNumver){
        return difference * 3;
    }else{
        return difference;
    }
}

console.log(computeDifference(18));
console.log(computeDifference(22));