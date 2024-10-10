// 3. Write a JavaScript program to get the current date.  
const getCurrentDate = () =>{
    var newDate = new Date();

    var dd = newDate.getDate();
    var mm = newDate.getMonth() + 1;
    var yyyy = newDate.getFullYear();
    
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    
    console.log(`Today's date is: ${dd}/${mm}/${yyyy}`);
}

getCurrentDate();
// fiddle | https://jsfiddle.net/matei218/br0c5mvs/1/
