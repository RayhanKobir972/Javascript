function getLeapYear(year){
    const leapyears = [];
    for(let i = 0; i < year.length; i++){
        if(year[i] % 4 == 0){
            leapyears.push(year[i]);
        }   
    }
    return leapyears;
    
}

const array = [2023,2024,2025,2028,2030];
let isLeapYear = getLeapYear(array);
 console.log(isLeapYear);