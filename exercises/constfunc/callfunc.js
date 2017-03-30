var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(names,dontCall,call,sendText){
  var countA=0;
  for(var i=0; i<names.length; i++) {
    var nameCount = names[i].toUpperCase();
    for(var j=0 ; j<nameCount.length ; j++) {
      if(nameCount[j]==='A') {
        countA++;
      }
    }
    
    if(countA>1){
      sendText(names[i]);
      countA=0;
    }
    else if(names[i].length%2 !==0)
      {
        dontCall(names[i]);
      }
    else if (names[i].length%2 ===0)
     { 
       call(names[i]);
     
     
     }
     
  }
}
function dontCall(name){
  console.log("You did not call "+name);
}
function call(name){
  console.log("You did  call "+name);
}
function sendText(name){
  console.log("You send a text to "+name);
}
attemptCall(names,dontCall,call,sendText);
