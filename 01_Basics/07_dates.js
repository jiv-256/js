
let mydate = new Date()
/*
console.log(mydate);
 //output=> 2023-12-28T12:07:17.866Z

 console.log(mydate.toString());
// output=>Thu Dec 28 2023 17:37:17 GMT+0530 (India Standard Time)

console.log(mydate.toLocaleString());
//output=> 28/12/2023, 5:39:24 pm

console.log(mydate.toJSON());
// output=>2023-12-28T12:10:56.523Z

console.log(mydate.toDateString());
//output=>Thu Dec 28 2023

console.log(mydate.toISOString());
//output =>2023-12-28T12:14:38.834Z

console.log(mydate.toLocaleString());
// output =>28/12/2023, 5:44:38 pm

console.log(mydate.toLocaleDateString());
// output=>28/12/2023

console.log(typeof mydate);
// output=> obeject

// let mycreatedDate = new Date(2023,0,23)
let mycreatedDate = new Date(2023,0,23,5,3)
// let mycreatedDate = new Date("2023-01-23")
// let mycreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleString);

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})