// 3. Write a JavaScript program to get the current date.  
const getCurrentDate = () =>{
    let newDate = new Date();

    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    const yyyy = newDate.getFullYear();
    
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    
    console.log(`Today's date is: ${dd}/${mm}/${yyyy}`);
}

getCurrentDate();
// fiddle | https://jsfiddle.net/matei218/br0c5mvs/1/
