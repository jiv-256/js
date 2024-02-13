
let score = "33"

// console.log(typeof (score));
// here the type is string 

// if we write "let score = 33" then score will be Number

let valueInNumber = Number(score)
// here we pass the score in Number so the score (whatever the data type it will be) after passing from the Number it will be converted into Number

// console.log(typeof valueInNumber);
// output => Number

// what if the user have given the score = "33sdf"
// if we convert this in number and store in any variable (suppose valueInNumber) then if we want to print the datatype of the no it will give "NaN" - not a number 

// summary
// "33" => 33
// "33acd" => NaN
// true => 1 ; false=>0

let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);

/*
summary
1 => true
"" => false
"hitesh" => true
*/

//***************Operations****************/

let value = 3
let negval = -value
// console.log(negval);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); 2 to the power 2 
// console.log(2/2);
// console.log(2%2);

let str1= "hello"
let str2 = " rajiv"
let str3 =str1+str2
// console.log(str3);

/*
console.log("1"+2+2); => 122
console.log("1"+"2"); =>12
console.log(1+"2" ); =>12
console.log(1+2+"2"); => 32
*/
