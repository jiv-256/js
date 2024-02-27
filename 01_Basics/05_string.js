const name = "raj"
const repocount = 40

// old method
console.log("hello my name is " + name + " and my repocount is "+ repocount);

// new method
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

// another method to declare string
 const gamename = new String(`rajiv`)

 console.log(gamename[4])   //find the element on the place 4

 console.log(gamename.length)   //it print the length of string

 console.log(gamename.toUpperCase()); //make all leter capital

//  note=> touppercase() make all letter capital but it does not change the original value of string gamename because string is a stack datatype 

console.log(gamename.charAt(2)); //print character present at position 2

console.log(gamename.indexOf(`j`)); //print index of j

//supose you have to diveide a string in 2 substring 
const newstring = gamename.substring(0,2)//only 0 ,1 index will be printed
console.log(newstring);//output => ra

//similarly
const newstring1 = gamename.substring(1,4)//only 1 ,3 index will be printed
console.log(newstring1);//output => aji

// start from first given value and ends before given index value

//trim=>remove all spacing
const newstrone = "   rajni   "
console.log(newstrone)//output=>  rajni       
console.log(newstrone.trim()) //output =>rajni {remove all spacing}

//replace
const url = "https://rajvic.com/rijiv%20pathak"
console.log(url.replace('%20','-'))
// output => https://rajvic.com/rijiv-pathak {replace (%20) by (-)}

//find
console.log(url.includes('raj')); //output=> true
console.log(url.includes('anshi')); //output=> false