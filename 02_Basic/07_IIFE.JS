// Immediately Invoked Function expression (IIFE)

// reson to use IIFE 
//  1.sometime some variable are delcared in global scope which effect or polute the local scope of any function so for preventing that poluution we use IIFE by making diffrent scope in the function 
//  2.  for immidiately execution of the function

// normal function
function chai() {
    console.log(`DB CONNECTED`);
}
chai();

// IIFE

(function pani() {
    // NAMED IIFE
    console.log(`DB CONNECTED`);
})();

// THE ABOBE FUNCTION IS INVOKED BUT IT DONT KNOW WHERE TO END SO WE HAVE TO STOP ITS OPERATION BY PUTTING SEMICOLLAN(;)

// (THIS FIRST PARENTHESIS IS FOR THE DEFINITION OF THE FUNCTION)(AND SECOND IS FOR EXECUTION CALL)

// WE USE IIFE FOR THE PREVENTION FROM THE POLLUTION OF THE GLOBAL SCOPE VARIABLE

// WE ALSO USE IFFI AS ARROW FUNCTION 

(()=>{
    // UNNAMED IIFE 
    console.log(`JA NA LAKDE`);
})();

// ALWAYS REMEMBER WHILE USING IIFE YOU HAVE TO ALWAYS CLOSE THE OPERATION OF FUNTION (BOTH NORMAL AND IIFE ONE) BT SEMICOLAN 

//  THE ABOBE FUNCTION IS INVOKED BUT IT DONT KNOW WHERE TO END SO WE HAVE TO STOP ITS OPERATION BY PUTTING SEMICOLLAN(;)
 
// NOW HOW YOU GIVE INPUT TO IIFE FUNCTION 

((name)=>{
    console.log(`JA NA LAKDE ${name}`);
})("RAJAN")




















































