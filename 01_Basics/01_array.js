/*
const arr = [1,2,3,4,7,6]
// another way of declaring the array
const arr2 = new Array(3,5,8,"raj",9,2,5)
console.log(arr[3]); //accessing third array element 

// array methods
arr.push(10) //push 10 in the array
arr.pop() //remove last element of array

// arr.unshift(21) //add 21 at zero index of the array

// arr.shift() //remove the first element of the array
console.log(arr.includes(3));//we can check this element is present in array or not

const newarr = arr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(arr);
console.log(typeof newarr);

//slice,splice

console.log("A",arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B",arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);
*/

const marvel_heros = ["thor","ironman","hawkay"]

const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
//output=> [ 'thor', 'ironman', 'hawkay', [ 'superman', 'batman', 'flash' ] ]

// access array into array
// console.log(marvel_heros[3][2]);
//output=>flash

const all_heros =[...marvel_heros,...dc_heros]
console.log(all_heros);
// output =>[ 'thor', 'ironman', 'hawkay', 'superman', 'batman', 'flash' ]

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(/*how many depth to be solved*/Infinity)
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_arr);

console.log(Array.isArray("rajivnayanpathak"));//check that given value is array or not

console.log(Array.from("rajivnayanpathak"));


console.log(Array.from({name:"rajivnayanpathak"})); //object in an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));