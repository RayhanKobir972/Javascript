
/* for(var i = 30; i <= 86; i++){
    console.log(i);
    if(i >= 44){
        break;
    }
} */


var prices = [50,59,75,100,300,350,150,200,450,390];
for(var i =0;i<prices.length;i++){ 
    if(prices[i] >= 200){
        continue;
    }
    console.log(prices[i]);
}