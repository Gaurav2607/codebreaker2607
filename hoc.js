/**
 * High Order function
 * High order function are the function which accept another function as an argument or return a function or it can do both
 */

// function wrapper() {
//     return 'this is high order function'
// }

// //high order function
// function getMessage(wrapper) {
//     console.log('calling high order function', wrapper());
// }

// getMessage(wrapper);

// //return function
// function displayMessage() {
//     return function() {
//         console.log('This is the inner function')
//     }
// }

// const output = displayMessage();
// output();



// function squareNumber(arg) {
//     let result = [];
//     for(let val of arg) {
//         result.push(val * val);
//     }
//     return result;
// }

// function cubeNumber(arg) {
//     let result = [];
//     for(let val of arg) {
//         result.push(val ** 3);
//     }
//     return result;
// }
let arr = [1,2,3, 4, 5];
//modifying into hoc function
function squareNumber(val) {
    return val*val;
}

function cubeNumber(val) {
    return val ** 3;
}

//high order function
function powerNumber(wrapper, arg) {
    let result = [];
    for(let val of arg) {
        result.push(wrapper(val));
    }
    return result;
}

const squareResult = powerNumber(squareNumber, arr);
const cubeResult = powerNumber(cubeNumber, arr);
console.log(cubeResult);
console.log(squareResult);

// const output = squareNumber(arr);
// const output1 = cubeNumber(arr);
// console.log(output1);