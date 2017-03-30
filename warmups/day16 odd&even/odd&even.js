var evenArray=[];
var createEvenArray=function(highesNum){
   for(i=1;i<=highesNum;i++) {
       if (i%2==0)
           {
              evenArray.push(i)
           }
   }
}
createEvenArray(10);
console.log(evenArray);
var addOdds = function(EvenOnlyArray) {
   for (var j=1;j<=evenArray.length+1 ;j++)
       if (j%2 != 0)
           {
              EvenOnlyArray.push(j)
           }
}
addOdds(evenArray);
console.log(evenArray);
function sortNumber(a,b) {
   return a - b;
}
evenArray.sort(sortNumber);
console.log(evenArray);








