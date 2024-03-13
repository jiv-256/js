/*// last video we read about object literals in this we study object singleton

// decalaration of object singleton{two type}
const tinderuser=new Object()
                // or
// const tinderuser = {}
// put values
tinderuser.id="24fs"
tinderuser.name="samasya"
tinderuser.isLoogedIn=false

// lets print that object
console.log(tinderuser);
// output=>{ id: '24fs', name: 'samasya', isLoogedIn: false }

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
                firstname:"hitesh",
                latsname:"pathak"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);
// output=>hitesh{you can access the nesting by dot(.)}

// merging the object 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// same similar problem like array obeject within an object 

// console.log(obj3);
// output=>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({ //this parenthisis is optional},obj1,obj2)

// console.log(obj3);
// output=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3= {...obj1,...obj2}
// console.log(obj3);
// output=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// which syntax did you use when value comes from database

const user =[
    {
        id:1,
        email:"hui@gmail.com"
    },
    {
        id:1,
        email:"hui@gmail.com"
    },
    {
        id:1,
        email:"hui@gmail.com"
    },
    {
        id:1,
        email:"hui@gmail.com"
    }
]

// suppose you have to access the first value
user[1].email
console.log(tinderuser);
// output=>{ id: '24fs', name: 'samasya', isLoogedIn: false }

console.log(Object.keys(tinderuser));
// all the key of object tinderuser stores in a array now you can use loop on that array or perfoms array operation on the data
// output=>[ 'id', 'name', 'isLoogedIn' ]

console.log(Object.values(tinderuser));
// all the values of object tinderuser stores in a array now you can use loop on that array or perfoms array operation on the data
// output=>[ '24fs', 'samasya', false ]

console.log(Object.entries(tinderuser));
// all the entries of object tinderuser stores in a array now you can use loop on that array or perfoms array operation on the data
// output=>[ [ 'id', '24fs' ], [ 'name', 'samasya' ], [ 'isLoogedIn', false ] ]

console.log(tinderuser.hasOwnProperty('isLoogedIn'));
// output=>true
// it tells us that, the give property is in the object or not
*/
const course = {
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh ji"
}

// you have to access the element of obj then their are two syntax
// 1.
// console.log(course.courseinstructor);
// output=>hitesh ji

// 2
// const{courseinstructor}= course
// console.log(courseinstructor);
// output=>hitesh ji
// if you think courseinstructor is a big name so you can name it accordingly 
// const{courseinstructor:instuctor}= course
// console.log(instuctor);
// output=>hitesh ji

// +++++++++++++++++++++APIs+++++++++++++++++
// apna kaam kisi aur ke sar dal dena
