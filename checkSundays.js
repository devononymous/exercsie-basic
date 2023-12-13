// var storeDate = new Date();
// var yyyy = storeDate.getFullYear()
// var gettingDate = storeDate.getDay()
function checkSundays(){
for(let year = 2014; year <=2050 ; year++){
    let date = new Date(year,0,1);
    if(date.getDay() === 0){
        console.log("1st January is being a Sunday on : " +year )
    }
}}
console.log(checkSundays())