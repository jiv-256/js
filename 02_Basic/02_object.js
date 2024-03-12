//singleton - if obj made of constructor
//object.create

// object literal

const mysym = Symbol("key1")
const jsuser = {
    name:"raj",
    //key:value
    [mysym]:"mykey1",
    //if you have to refer mymbol then you have to use square brackets
    age:18,
    email:"reretrter@gmail.com"
}
/*
// how to access object elements
// most of the time we access the values by dot but their are some special cases in which we have to use square brackets
//1.
    console.log(jsuser.email)
//2.
    console.log(jsuser["email"]);
    //output=>reretrter@gmail.com
    
    console.log(jsuser[mysym]);
    // output=>mykey1

    // you can change the value of the obeject
    jsuser.email = "hitu@gmail.com"
    // you can also freez your value 
    Object.freeze(jsuser)
*/
    // function in object
    jsuser.greeting = function(){
        console.log("kya re bhikhmangya jsuser kya dekh rha hai");
    }
    
    //now lets access the function named as greeting 
    console.log(jsuser.greeting);
    //output=>[Function (anonymous)]
    
    console.log(jsuser.greeting());
    // output=>kya re bhikhmangya jsuser kya dekh rha hai
    jsuser.greetingtwo = function(){
        console.log(`kya re bhikhmangya jsuser ${this.name} , kya dekh rha `);
    }
    console.log(jsuser.greeting());
    // output=>kya re bhikhmangya jsuser kya dekh rha hai

console.log(jsuser.greetingtwo());
// output=>kya re bhikhmangya jsuser raj , kya dekh rha 