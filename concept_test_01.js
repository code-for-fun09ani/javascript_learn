/* 

===== Student Report =====

Name: Rahul Sharma
Age: 20
College: ABC Engineering College

Subjects:
Math: 85
Physics: 78
Programming: 92

Total Marks: 255
Average: 85

Passed: true

Student Level: Excellent


*/
console.log("===== Student Report =====\n\n")

let studentName = "Joe"
let age = 15
let college = "MIT"
let phoneNum = "9847338473"

let math = 88
let physics = 97
let programming = 90


let totalMarks = math+physics+programming
let avgMarks = totalMarks/3
let passed = avgMarks>=40


let student = {
    name:studentName,
    age:age,
    college_name:college,
    phone:phoneNum,
    marks :{
        math:math,
        physics:physics,
        programming:programming
    },
    average:avgMarks,
    passed:passed
}

console.log
(`
     === Student Report ===

     Name : ${student.name}
     Age : ${student.age}
     College : ${student.college_name}
     Phone : ${student.phone}

     Math: ${student.marks.math}
     Physics: ${student.marks.physics}
     Programming: ${student.marks.programming}

     Total: ${totalMarks}
     Average: ${student.average}

     Passed: ${student.passed}


    
`)









