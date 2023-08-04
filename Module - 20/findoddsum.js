function getSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){     
        }
        else{
            let element = array[i];
            console.log(element);
            sum = sum + element;
        } 
    }
    return sum;
}

const myNumber = [12,65,45,78,33,45,91];
const total = getSum(myNumber);
console.log(total);