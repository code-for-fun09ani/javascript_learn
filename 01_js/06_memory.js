// Two types of memory : Stack(Primitive) and Heap(Non-Primitive)

let myName = "Aniket"

let anotherName = myName
anotherName = "Rudraksh"


console.log(myName);
console.log(anotherName);


let studentOne = {
    studentName : "Vicerys",
    email : "vic@google.com",
    phone_num : 9383975944

};

let studentTwo = studentOne;

studentTwo.email = "user@google.com"

console.log(studentOne,studentTwo);



