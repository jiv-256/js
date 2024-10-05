/*
const user = {
    username:"Anshika",
    price:435,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        this refer current contest
        console.log(this);
        output=>{
            username: 'Anshika',
            price: 435,
            welcomemessage: [Function: welcomemessage]
          }
    }


}
user.welcomemessage()
output=>Anshika,welcome to website

if someone change the user name 

user.username="sam"
user.welcomemessage()
output=>sam,welcome to website

console.log(this);//output=>{}(it refer to empty object)

in node environment the "this" refer to an empty object 

function chai(){
    console.log(this);
}
chai()

*/




/*
normal function
const chai = function(){
    let username = "rajiv"
    console.log(this.username);
}

arrow function
const chai = () => {
    let username = "rajiv"
    console.log(this.username);
}

chai()

question- diffrence between normal function and arrow function 

*/




/*
function addtwo(num1, num2) {
    return num1 + num2
}
this is called explicit return  

console.log(addtwo(4,6))

you also need not to write return keyword , you ca write your statement in single line eg:

const addtwo1 = (num1,num2) => num1+num2
this is called implicit return
note=> when you use curly bracket the you have to use return keyword but when you use parenthesis then no need of return 

suppose you have to return a object at a place of num then you have to wrap it in parenthesis ()

const addtwo2 = (num1,num2) => ({username:"tanu"})

console.log(addtwo2(4,6))
*/