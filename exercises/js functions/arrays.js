var students = [ {name : "omar" , grade : 1 } , 
                {name : " mohamad" , grade :70},
                {name : "khaled" , grade : 60},
                {name : " ali" , grade : 5},
                {name : "khalil" ,grade : 96}
               ];

var excellent=[];
var failed = [];
var good=[];

function splitStudents(students){
    
    for(var i =0 ; i<students.length  ; i++){
    
    if(students[i].grade< 60){
        
    failed.push(students[i] , "failed");
    
        
    } else if ( students[i].grade >=60 && students[i].grade <= 90){
        
        good.push(students[i] , "good");
       
    } else {
        excellent.push(students[i] , "excellent")
    
        
    }
    
    
}
    console.log( excellent);
    console.log(failed);
    console.log(good);


}

splitStudents(students);
