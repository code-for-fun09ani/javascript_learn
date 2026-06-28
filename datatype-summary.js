/* Primitive Datatype
   7 types : string, number, boolean, null, undefined, symbol, bigInt

   Reference type/Non primitive
   arrays, objects(master-it), functions

   Dynamically typed language


*/

// for javascript master webevents and objects for leveling to the top tier

let userEmail
const id = Symbol('124')
const anotherId = Symbol('124')
const bigNumber = 2n


console.log(id==anotherId)

console.log(typeof bigNumber);


const newArray = ["ani",3,true,"what is this"];  //array

let newObj = {      //object
    name: "new",
    age : 343
};

let newfun = function(){         //function datatype
    console.log("hello world!")
}
newfun()


console.log(newArray);

console.log(typeof newObj);

console.log(typeof newfun)


