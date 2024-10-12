// const useremail = "rasudb@34"

// if (useremail) {
//    console.log("got user email"); 
// } else {
//     console.log("dont have user email");
// }

// output=>got user email

// const useremail = ""

// if (useremail) {
//     console.log("got user email"); 
// } else {
//     console.log("dont have user email");
// }
// output=>dont have user email

// falsy value
// false , 0 , -0 , BigInt , On , "" , null , undefined , NaN

// truty values
// "0" , 'false' , " " , [] , {} , function(){}
// agar string ke andar kuch bhi hua to truthy value hoga 

const useremail = ""

if (useremail) {
    console.log("got user email"); 
}
else if(useremail.length === 0){
    console.log("Array is empty");
} 
else {
    console.log("dont have user email");
}
// output=>Array is empty

// false == 0
// output => true

// false == ''
// output => true

// 0 == ''
// output => true

const emptyobj ={}
if(Object.keys(emptyobj).length === 0)
{
    console.log("Object is empty");
}
// output=>Object is empty

// logical operator
// &&,||

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10 //output=>5
val1 = null ?? 10 //output=>10 
var1 = undefined ?? 15  //output=>15
val1 = null ?? 10 ?? 20  //output=>10

console.log(val1);

// ternary operator

// condition ? true : false

const iceteaprice = 100
iceteaprice >= 80 ? console.log("more than 80") : console.log("less than 80");