
// if
//  const isuserlogginin = true
// if(isuserlogginin){
//     console.log("user is loggined");
// }

// 3!=2
// <,>,<=,>=,==,!=,===

// if (2 == "2") {
//     console.log("executed");
//     // output=>executed
// }

// if (2 === "2") {
//     console.log("executed");
//     // output=>_____________(dint execute)
// }
// else{
//     console.log("nhi chalega");
//     // output=>nhi chalega
// }

// // short hand notation

// const balance = 1000

// if(balance>500) console.log("test");
// if(balance>500) console.log("test"),console.log("test 2");

// const balance = 1000
// if (balance<500) {
//     console.log("less than 500");
// }
// else if (balance<600) {
//     console.log("less than 600");
// }
// else if (balance<700) {
//     console.log("less than 700");
// }
// else if (balance<900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

// output=>less than 1200

const userloggedin = true
const debitcard= true
const logininfromgoogle = false
const logininfromemail = false

if (userloggedin && debitcard) {
    // console.log("allow to buy course");
}

if (logininfromemail || logininfromgoogle) {
    // console.log("user logged in");
}


// function checkage(data) {
//     if(data === {age: 18}){
//         console.log("you are an adult");
//     }
//     else if(data == {age: 18}){
//         console.log("you are still an adult");
//     }
//     else{
//         console.log('hmm... no Age');
//     }
// }

checkage({age: 18})
// first and second case will be fail because object is reference based 
