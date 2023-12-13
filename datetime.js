let  checkDay =  new Date();
let today = checkDay.getDay();

var daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = daysArr[checkDay.getDay()];
console.log(`Today is : ${day}`)