/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dataInches = 144;
const dataFeet = dataInches / 12;
console.log('Data Feet',dataFeet); */


function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const dadiInches = 70;
const dadiFeet = inchToFeet(dadiInches);
console.log(dadiFeet.toFixed(2));