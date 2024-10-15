// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }
// output=>0
// 1
// 2
// 3
// 4
// 5 is the best number
// 5
// 6
// 7
// 8
// 9
// 10

for (let i = 0; i <= 10; i++) {
        // console.log(`outer loop: ${i}`);
        for (let j = 0; j <= 10; j++) {
            // console.log(`inner loop value: ${j} and inner loop ${i}`);
            // console.log(i + '*' + j + '=' + i*j);
    }
}

let myarray = ["flash" , "baatman" , "superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}
// output=>flash
// baatman
// superman

// keywords
// break , continue

for (let i = 0; i <= 10; i++) {
        const element = i;
        if(element == 5){
            console.log("5 is the best number");
            continue
        }
        console.log(element);
    }
    // output=>0
    // 1
    // 2
    // 3
    // 4
    // 5 is the best number
    // 6
    // 7
    // 8
    // 9
    // 10

    for (let i = 0; i <= 10; i++) {
        const element = i;
        if(element == 5){
            console.log("5 is the best number");
             break
        }
        console.log(element);
    }
    // output=>0
    // 1
    // 2
    // 3
    // 4
    // 5 is the best number
