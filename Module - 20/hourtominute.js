function getMinute(hour){
    let minute = hour * 60;
    return minute;
}

let givenHour = 32;
let minute = getMinute(givenHour);
console.log("Total minute = ",minute);