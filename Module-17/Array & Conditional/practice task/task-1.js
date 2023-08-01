var fruits = ['apple','banana','orange'];
var position = fruits.indexOf('banana');
console.log(position);
fruits[position] = 'mango';
console.log(fruits);
fruits.pop();
fruits.push('watermelon');
console.log(fruits);