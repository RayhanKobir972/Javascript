function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
function minInArray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const heights = [167,190,120,265,137];
const tallest = maxInArray(heights);
console.log('tallest person is : ',tallest);
const smallest = minInArray(heights);
console.log('Smallest person is : ',smallest);