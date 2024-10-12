/* Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". */  

function guessNumber() {
    let range = 10;
    let randomNumber = Math.ceil(Math.random() * range);
    let text;
    
    let inputValue = prompt("Enter a number between 0 and 9:");
    
    if (inputValue == null || inputValue === "") {
        text = "No number entered. Please enter a number.";
    } else {
        let value = parseInt(inputValue, 10);
        text = (randomNumber === value) ? `Good work. The random number is: ${randomNumber}` : `Not matched. The random number was: ${randomNumber}`;
    }
    
    console.log(text); 
}

guessNumber();

// fiddle || https://jsfiddle.net/matei218/hpvjL45x/1/