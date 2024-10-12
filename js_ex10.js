// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

let userInputFirstNum = parseFloat(prompt("Enter the first number:"));
let userInputSecondNum = parseFloat(prompt("Enter the second number:"));

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Division:", divide(userInputFirstNum, userInputSecondNum));
console.log("Multiplication:", multiply(userInputFirstNum, userInputSecondNum));

// Do also a UI interaction

/*
<!DOCTYPE html>
<html> 
<head>
<meta charset=utf-8 />
<title>JavaScript program to calculate multiplication and division of two numbers </title>
<style type="text/css">
body {margin: 30px;}
</style> 
</head>
<body>
<form>
1st Number : <input type="text" id="firstNumber" /><br>
2nd Number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>
</body>
</html>
*/