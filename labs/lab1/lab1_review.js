/*
Purpose: Review JS concepts
Prototypes vs Classes
Regular functions, anonymous functions, arrow functions
Callback functions
MERN: N stands for Node.js

*/

// var is global vs. let is local

var globalVariable = 100
let localVariable = 200
function funtcionName() {
    let varInFunc = "local"
}

// console.log(varInFunc) // WILL FAIL

// Prototype - One time use object from a prototype

const oneTimeUseObj = {
    prop1: "Jenifa",
    prop2: "comp3123",
    method1: function (param1){
        console.log(param1)
    }
}

// const OneTimeUseObj = new Object()

console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1("pizza")

// Prototype - using a constructor

function Student (student_name_p, course_p, lunch_p){
    this.student_name = student_name_p
    this.course = course_p
    this.lunch = lunch_p
    this.method1 = function (param1){
        return param1 
    }
}

const morning_student = new Student("Jenifa", "comp3123", "noodles")
console.log(morning_student)
console.log(morning_student.student_name)
console.log(morning_student.course)
console.log(morning_student.method1(morning_student.lunch))

// Classes - always have constructors

class Prof {
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }
    method1(lunch){
        console.log(lunch)
    }
}

const morning_prof = new Prof("Laily")
console.log(morning_prof.prof_name)
morning_prof.method1("burger")

// Optional homework: Practice a callback function using an array and
// the .map function
