function checkOddEven(number){
    const reminder = number % 2;
    if(reminder == 0){
        console.log('Number Is Even');
    }
    else{
        console.log('Number Is Odd');
    }
}

const myNumber = checkOddEven(123);
