
"use strict";//treat all js as newer code

// console.log("rubdu"); //print rubdu
// console.log("biscuit dega"); // print biscuit dega 
const acountid = 10  // variable declaration const it cannot be changed further 
let raj = 'fuddu' // variable declaration let it can be changed furthur
var actpas // avoiding using var, it can be changed furthur

// lets try to print in tables

// console.table([ acountid , raj])
// output=>
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ 0       │ 10      │
// │ 1       │ 'fuddu' │
// └─────────┴─────────┘

//Datatype

let name = "rajiv" // datatype=>string
let age = 39 //datatype=> integer
let logedin = false  //datatype=> boolean

//null => standalone value

// undefined => value not assigned

//symbol=> use for unique , 

//objects

// console.log(typeof null); // it tell the datadype of the value

//null is a object type datatype in js
//undefined is a object type datatype in undefined

// const and let are not hoist means moving the declaration to the top of the function
const message = 109;
function getinfo() {
    // console.log(message);
    const message = 'sadgamaya';
}
getinfo()
// output=>Cannot access 'message' before initialization

// but if we take var rather than const or let
var message1 = 109;
function getinfo() {
    console.log(message1);
    // var message1 = 'sadgamaya';
}
getinfo()
// output=>undefined
// how js read this code of line 43 to 48

// var message1 = 109;
// function getinfo() {
//     var message1;
//     console.log(message1);
//     var message1 = 'sadgamaya';
// }
// getinfo()