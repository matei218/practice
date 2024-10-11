/*
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. 
For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.[8]
*/

var enterYear = '1600';

const checkLeapYear = (y) => {
    year = Number(y); 
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

console.log(checkLeapYear(enterYear));

// fiddle | https://jsfiddle.net/matei218/yao7ezjv/1/