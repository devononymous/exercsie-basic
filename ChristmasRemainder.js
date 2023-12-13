// // 9. Write a JavaScript program to calculate the days left before Christmas.  

// function ChristmasRemainder(){
//     // Get the current date

//     today = new Date();
//     // Create a Date object for Christmas of the current year

//    var christmas  = new Date(today.getFullYear(),11,25);
//    // Check if the current date is after December 25th

//    if(today.getMonth() == 11 && today.getDate()>25){
//         // If true, set Christmas for the next year
//     christmas.setFullYear(christmas.getFullYear()+1);
//    }
//    // Calculate the difference in days between today and Christmas

//    var one_day = 1000 * 60  * 60  * 24;
//    // Log the number of days left until Christmas to the console

//    console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+ "days left until christmas !");
// }
// console.log(ChristmasRemainder());

function ChristmasRemainder() {
    today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() == 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    var one_day = 1000 * 60 * 60 * 24;

    // Return the number of days left until Christmas
    return Math.ceil((christmas.getTime() - today.getTime()) / (one_day)) + " days left until Christmas!";
}

// Log the result of the function
console.log(ChristmasRemainder());

