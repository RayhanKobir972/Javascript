function milesToKilometer(miles){
    const kilometer = miles * 1.609344;
    return kilometer;
}

const givenMiles = 145;
const kilometer = milesToKilometer(givenMiles);
console.log(kilometer);