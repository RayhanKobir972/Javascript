function getAverage(a,b,c,totalAssignment){
    var total = a + b + c;
    var mark = total / totalAssignment;
    return mark; 
}


var assignment1 = 60;
var assignment2 = 60;
var assignment3 = 60;
var numOfAssignment = 3;
var averageMark = getAverage(assignment1,assignment2,assignment3,numOfAssignment)
console.log("Average Mark = ",averageMark);