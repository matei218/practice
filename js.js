/*
JS - Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

var date = new Date();

var today = date.getDay() - 1;

var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

console.log(`Today is ${daysOfWeek[today]}`);