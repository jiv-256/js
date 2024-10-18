const myobj = {
    game1 : "GTA",
    game2 : "BGMI",
    game3 : "CALL OF DUTY",

}

for (const key in myobj) {
//    console.log(key);
}
// output=>
// game1
// game2
// game3

// only kry will br printed so for accesssing the both key and values we have to  write myobj[key]

for (const key in myobj) {
//    console.log(key,":-", myobj[key]);
                // or
    // console.log(`${key} :- ${myobj[key]}`);
}
// output=>
// game1 :- GTA
// game2 :- BGMI
// game3 :- CALL OF DUTY

// lets check that for in loop is used for array or not 

const arr = [1,2,3,4,5]

for (const key in arr) {
    console.log(key);
}
// output
// 0
// 1
// 2
// 3
// 4

// so for in loop just print index values , if you have access the array then you have access the array by arr[i]

// in array we cannot decide the key its start from 0 and goes till furthur and due to this problem object came in existance or made. In object we can decide the key and this is the huge diffrence between array and object

// forin is not possible on map