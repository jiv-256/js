
/*
on the basis of storing and using the data 

datatype is categories in 2 type 
    1.primitive (call by value - when we copy it then the reference of original data is not provided , it give copy of the data and the changes you performs on it , you cange the copied value)
        it is of 7 type
            1.String
            2.Number
            3.Boolean
            4.null
            5.undefined
            6.symbol
            7.BigInt


    2.non primitive or reference type 
        1.Array
        2.object
        3.functions
*/

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid);
// output=> false
// value of both are same but symbol is used for uniqueness 

const bigNumber = 53463456634345645666543456n
// no is too big so we use "n" in last for converting it in BigInt

// Array,Object,functions
const heros=["shaktiman","nagu","hagimaru"]

let myobj = { //datatype object
    name:"raj",
    age:22
}
const myfunc = function(){ 
    //datatpe-object_function
    console.log("hello moto");
}

console.log(typeof id);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // stack(primitive) , heap(non-primitive)
    // stack - jo variable define hoga uska copy milega
    // heap - aur jo value heap me chala jata hai(non-primitive) uska milta hai reference original value ka matlb jo change karenge wo original value me change hoga 

// examples

let myyoutube = "rajivytgaming"
let anothername = myyoutube
anothername = "prgytim"
/*
console.log(myyoutube);//rajivytgaming
console.log(anothername);//prgytim
*/
let userone = {
    email:"user@google.com",
    age:34
}

let usertwo =  userone

usertwo.age=35

console.log(userone.age);//35
console.log(usertwo.age);//35

