let  checkToday =  new Date();

let dd = checkToday.getDate();

let mm = checkToday.getMonth();

let yyyy = checkToday.getFullYear();

if (dd<10){
    dd='0'+dd
}
if (mm<10){
    mm='0'+mm
}

today = mm+'-'+dd+'-'+yyyy;
console.log(today)

today = mm+'/'+dd+'/'+yyyy;
console.log(today)

today = dd+'-'+yyyy+'-'+mm
console.log(today)

today = dd+'/'+yyyy+'/'+mm
console.log(today)