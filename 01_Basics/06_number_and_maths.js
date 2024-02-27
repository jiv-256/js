
const score = 400
console.log(score); //output => 400

//another way for declaring nunber
const balance = new Number(2000)
console.log(balance) //output => [Number: 2000]
console.log(balance.toString().length); // output =>4
console.log(balance.toFixed(2)); //give the fixed value {output=2000.00}

const newnum = 234.456
// console.log(newnum.toPrecision(5)); //output=>234.46


// ++++++++++++++++++Maths+++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //abs conver negative integer into positive

console.log(Math.round(4.7)); // output=> 5
console.log(Math.ceil(4.2)); // output=> round off to maximum value => 5
console.log(Math.floor(4.9)); // output=> round off to minimum value => 4
console.log(Math.min(4,9,5,6,2,3,4,5,678,8,232,454)); // output=> 2, gives the minimum value of the array

console.log(Math.max(4,9,5,6,2,3,4,5,678,8,232,454)); // output=> 678 gives the maximum value of the array

//you can also generate random value between two numbers 

console.log(Math.random());//generate ramdom value between 0 to 1
console.log((Math.random()*10) + 1); //multiply by 10 to make the outcome between 0 - 10 , but their is a posibility of outcome which gives 0
console.log(Math.floor((Math.random()*10) + 1));//for avoding 0 we use +1 and also use floor to get lowest value{as in line no 22}


//v.imp for generating random value between two numbers
const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min +1))+ min);
//max-min for the range of output and +1 for avoiding 0 , now for makin the output lying between 10 to 20 we add min and put whole equation in Math.floor 
