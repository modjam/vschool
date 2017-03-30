for(var i=1; i<=100; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log(i+" Fizzbuzz");
	} else if(i % 5 === 0) {
		console.log(i+" buzz");
	} else if (i % 3 === 0) {
		console.log(i+" Fizz");
	}
  else {
    	console.log(i);
  }
}