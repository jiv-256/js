// for of

// ["","",""]
// [{},{},{}]

// syntax for for of 
// for (const {declare random variable for accessing  element} of {name of the array/object/string/etc on which loop is applied}) {
//     console.log("just print the values");
// }

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}
// output=>
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello world!"
for (const i of greetings) {
    // to skip the space
    if (i==" ") {
        continue
    }
    // console.log(`each char is ${i}`);
}
// output=>
// each char is H
// each char is e
// each char is l
// each char is l
// each char is o
// each char is  
// each char is w
// each char is o
// each char is r
// each char is l
// each char is d
// each char is !

// Maps

const map = new Map()
map.set('IN' , "India")
map.set('FR' , "France")
map.set('US' , "United State of America")
map.set('BR' , "Britain")
map.set('GR' , "Germany")

// console.log(map);
// output=>
// Map(5) {
//   'IN' => 'India',
//   'FR' => 'France',
//   'US' => 'United State of America',
//   'BR' => 'Britain',
//   'GR' => 'Germany'
// }

// now if you have to apply for of loop on map the their is 2 way first by key{give output in array form} and second both by key and values 

// 1.by keys

// const map = new Map()
// map.set('IN' , "India")
// map.set('FR' , "France")
// map.set('US' , "United State of America")
// map.set('BR' , "Britain")
// map.set('GR' , "Germany")

for (const key of map) {
    // console.log(key);
}
// output=>
// [ 'IN', 'India' ]
// [ 'FR', 'France' ]
// [ 'US', 'United State of America' ]
// [ 'BR', 'Britain' ]
// [ 'GR', 'Germany' ]

// 2.by both key and value 
for (const [key,value] of map) {
    // console.log(key,':-', value);
}
// ou


const myobj = {
    'game1' : "GTA",
    'game2' : "BGMI",
    'game3' : "CALL OF DUTY",

}

for (const [key , value] of myobj) {
    console.log(key,"-", value);
}

// output=>it is not iterable