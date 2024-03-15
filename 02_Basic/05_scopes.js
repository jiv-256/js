// concept of scope of variables

// let a = 10
// const b =20
// var c= 30
// console.log(a); //output=>10
// console.log(b);//output=>20
// console.log(c);//output=>30

var c=9
function access_value() {
    let a = 10
    const b =20
    var c= 30
}
// console.log(a);//output=> error-a not defined
// console.log(b);//output=>error-b not defined
// console.log(c);//output=>30

// hence the var did't affected by scope 

var c=9
function access_value() {
    let a = 10
    const b =20
    var c= 30
}
// console.log(c);//output=>9

let a =300
 if (true) {
    let a = 10
    // console.log("inner : ",a);
}
// console.log(a);
// output =>inner :  10
// 300

function one(){
    const username = "Rajbeer"

    function two() {
        const website = "youtube"
        // console.log(username);
        // output=>Rajbeer
    }
    two()
    // console.log(website);
    // output=>website is not defined
    
}
one()

// another example
if(true){
    const username ="hitubhai"
    if(username === "hitubhai"){
        const website = "youtube"
        // console.log(username + website);
        //output=> hitubhai youtube
    }
    // console.log(website);
    // error - website is not defined
}
// console.log(username);//error

// +++++++++++++++ Interesting ++++++++++++

    // you can declare a funtion by two type first the tradisnal way  

    // in this tradisnal way you can asses the function before declaring 
    addone(5)
    function addone(num) {
        return num+1
    }

    // secont way is to store the function in the variable
    // the second method has some limitations you cant asses it before initialization or declarelation

    addtwo(5)
    const addtwo = function addtwo(num) {
        return num+2
    }
    // error - cannot access 'addtwo' before initialization