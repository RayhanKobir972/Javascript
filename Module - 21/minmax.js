function getMax(a,b,c){
    if(a > b && a > c){
        return ('Jim is get the delicious cake');
    }
    else if(b > a && b > c){
        return ('Della is get the delicious cake');
    }
    else{
        return ('Chinku is get the delicious cake');
    }
}

function getMin(a,b,c){
    if(a < b && a < c){
        return ('Jim is get the minimum number');
    }
    else if(b < a && b < c){
        return ('Della is get the minimum number');
    }
    else{
        return ('Chinku is get the minimum number');
    }
}

function getMax(a,b,c){
    const max = Math.max(a,b,c);
    return max;
}


function getMin(a,b,c){
    const min = Math.min(a,b,c);
    return min;
}

const jim = 97;
const della = 17;
const chinku = 87;
let isMax = getMax(jim,della,chinku);
let isMin = getMin(jim,della,chinku);
console.log(isMin)
console.log(isMax);