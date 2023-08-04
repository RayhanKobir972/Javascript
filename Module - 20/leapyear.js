function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    else{
        return false
    }
}
const givenYear = isLeapYear(1933);
console.log('Is given year leap year = ',givenYear);