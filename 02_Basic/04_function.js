
// function saymyname() {
//     console.log("r");
//     console.log("a");
//     console.log("j");
//     console.log("n");
//     console.log("e");
//     console.log("r");
    
// }
// saymyname()

function addtwonumbers(number1,number2) {
    // let result=number1+number2
    // return result
    //when you write return comand then the code written after return the code will not be readed
    
    return number1+number2
}

const result = addtwonumbers(4,7)
// console.log(result);
/*
function loginusermessage(username){

    return `${username} just logged in`
}
*/

// console.log(loginusermessage("rajinikant"));
// output=>rajinikant just logged in

// console.log(loginusermessage());
// output=> undefined {when you cannot pass anything from the function then it gives undefined(not null its undefined) }

function loginusermessage(username){
    if (username === undefined) {
        // console.log("plz enter the user name");
        return
     }
    return `${username} just logged in`
}

console.log(loginusermessage());
// output=>plz enter the user name

// supose you are making an ekart website and user is adding things to cart so how can you pass multiple value to function for furture oprations

// function calculatecartprice(num1) {
//     return num1
// }

calculatecartprice(200,300,400,300,500)

// console.log(calculatecartprice(200,300,400,300,500));
// output=> 200 {rest of the value are left} 
// so we use rest operator

function calculatecartprice(...num1) {
    return num1
}

console.log(calculatecartprice(200,300,400,300,500));

// output=>[ 200, 300, 400, 300, 500 ]

const user ={
    username: "rajan pathak",
    price:2394
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
// output=>username is rajan pathak and price is 2394
// or
handleobject({
    username:"samu",
    price:384
})
// output=>username is samu and price is 384
const mynewarray =[200,300,400]
function returnsecondvalue(getarray) {
    return getarray[1]
}

// console.log(returnsecondvalue(mynewarray));
// output=>300

function sum() {
    return 2+2;
}
function sq() {
    return 4*4;
}
let a= (sum(),sq())
console.log(a);