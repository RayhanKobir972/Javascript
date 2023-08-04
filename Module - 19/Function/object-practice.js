var car = {
    brand : 'Tesla',
    model : 'Model 3',
    speed : '211 miles',
    wheel : 4,
    price : '$32,740'
}
const x = 'model';
console.log(car.brand);
console.log(car[x]);
console.log(car['price']);
console.log(car);
car.model = 'Model S';
console.log(car);