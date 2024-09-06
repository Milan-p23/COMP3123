console.log('Hello, Milan!'); 

//object literals

var students = {
    name: 'John',
    age: 20,
    grades: [90, 85, 95],
    city: 'New York'
}


var emp = {
    empId:   101,
    empName: 'Rahul',
    empAge:  25,
    empCity: 'Delhi'
}

//object destructure
var { empId, empName, empAge, empCity } = emp;

console.log(students);
console.log(students.name);
console.log(typeof students)