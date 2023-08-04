let first = 5;
let second = 7;
console.log(first, second);

//Approach =1:
// const temp = first;
// first = second;
// second = temp;

// Approach :2----Destructuring
[first, second] = [second, first];
console.log(first, second);