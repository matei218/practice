// Write a JavaScript program to calculate the days left before Christmas.  

var gDate = new Date();
var year = gDate.getFullYear();

var cDay = new Date(year, 11, 25);

if (gDate > cDay) {
    cDay.setFullYear(year + 1);
}

var difference = cDay - gDate;
var count = Math.ceil(difference / (1000 * 60 * 60 * 24));

console.log(count);

// fille | https://jsfiddle.net/matei218/s9g8nxtz/
