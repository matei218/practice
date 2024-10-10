/*
JS - Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 : 30 : 38 PM
*/


//V1
const vOne = () => {
    var date = new Date();

    var today = date.getDay() - 1;
    
    var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    var prepand = (hour >= 12) ? "PM" : "AM"
    
    hour = (hour >= 12) ? hour - 12 : hour;
    
    if(hour === 0 && prepand === 'PM'){
        if(minute === 0 && second === 0){
            hour = 12;
            prepand = 'Noon'
        }else{
            hour = 12;
            prepand = 'PM'
        }
    }
    
    if(hour === 0 && prepand === 'AM'){
        if(minute === 0 && second === 0){
            hour = 12;
            prepand = 'Midnight'
        }else{
            hour = 12;
            prepand = 'AM'
        }
    }
    
    console.log(`Today is ${daysOfWeek[today]}`);
    console.log(`Current time is: ${hour}:${minute}:${second} ${prepand}`);
}

//V2 | Using modulus

const vTwo = () => {
    var date = new Date();

    var today = (date.getDay() + 6) % 7;
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var prepand = hour >= 12 ? "PM" : "AM";

    hour = (hour % 12) || 12;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    var timeDisplay = `${hour}:${minute}:${second} ${prepand}`;

    if(prepand === "AM" && hour === "0" && minute === "0" && second == "00"){
        timeDisplay = 'Midnight';
    }else if(prepand === "PM" && hour === "0" && minute === "0" && second == "00"){
        timeDisplay = 'Noon';
    }

    console.log(`Today is: ${daysOfWeek[today]}`);
    console.log(`Current time is ${timeDisplay}`);
}

return vOne(), vTwo();

// fiddle | https://jsfiddle.net/matei218/sn0uvxra/16/