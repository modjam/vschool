var employees = [];
function Employee (name, jobtitle, salary, status) {  
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
	this.status = status || "FullTime";
	this.printEmployeeForm = function() {
		console.log("Name:" + this.name + ", " + "Job Title:" + this.jobtitle + ", " + "Salary:" + this.salary + ", " + "Status:" + this.status);
	}
}
employees.push(new Employee("ahmad", "it", 1000));
employees.push(new Employee("sami", "nurse", 800));
employees.push(new Employee("joe", "security", 700, "partTime"));
for(var i=0; i<employees.length; i++) {
	employees[i].printEmployeeForm();
}