function add(number1,number2){
    var sum = number1 + number2;
    return sum;
}

var total = add(20,80);
//console.log('Total:',total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(200);
console.log("Total singara:",singaras);