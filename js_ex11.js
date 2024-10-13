/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

const fahrenheitToCelcius = (f) => {
    let celcius = ((f - 32) / 9) * 5;
    console.log(`${f}°F is equal to ${celcius}°C;`);
}

fahrenheitToCelcius(45);

const celciusToFahrenheit = (c) => {
    let fahrenheit = ((c / 5) * 9) + 32;
    console.log(`${c}°C is equal to ${fahrenheit}°F`);
}

celciusToFahrenheit(60);

// fiddle | to come