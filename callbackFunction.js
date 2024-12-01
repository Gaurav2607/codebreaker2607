/**
 * Callback function
 */
const calculate = (num1, num2, callback) => {
    //let result = num1 + num2;
    //console.log(result);
    return callback(num1, num2);
}

//asynchronous operation example
setTimeout(()=> {
    console.log('async operation')
}, 5000);

let operation = true;
async function asyncOperation() {
    await new Promise((resolve, reject) => {
        if(operation) {
            resolve('success')
        }else {
            reject('error')
        }
    })
}

asyncOperation().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error); 
})


const addition = calculate(2, 3, function(num1, num2) {
    return num1 + num2;
});

const subtraction = (a, b) => a - b;

const subtractionResult = calculate(11, 5, subtraction);

const multiply = function(a, b) {
    return a *b;    
}
const multiplyResult = calculate(12, 5, multiply);
//Helpful
//api call
//read or write

//arr methods 

let arr = [1,2,3,4,5];

let resultFilter = arr.filter(num => num > 2);

//button clicked
// document.getElementById('test').addEventListener('click', function() {
//     console.log('button clicked');
// })



console.log(resultFilter);

