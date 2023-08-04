var numbers = [73,45,98,45];
// add element use push in the last index of an array
numbers.push(63);
console.log(numbers);
var friends = ['balam','kalam','salam'];
friends.push('gelam');
friends.push('pailam');
// console.log(friends)
//use pop to get last element
numbers.pop();
// numbers.pop();
console.log(numbers);

// numbers = numbers.indexOf(98);
console.log(numbers);
numbers[2] = 100;
console.log(numbers);
numbers.unshift(50); //unshift use for add element in the beggining of an array
console.log(numbers);
numbers.splice(2,2,30); // add element in the specific index of an array
console.log(numbers);