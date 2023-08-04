/* function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result); */


//factorial reverse way
function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);