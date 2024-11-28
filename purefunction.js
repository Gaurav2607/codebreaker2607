/**
 * pure function
 * takes some parameter return the same parameter
 */

// const x = 5;
// function doubleNumber(number) {
//     return number *2 * x;
// }

// const result = doubleNumber(5);
// console.log('result',result);

function appendingNumber(arr) {
    const newArr = [];
    newArr.push(5, 6);
    arr = [...arr, ...newArr];
    return arr;
}

const numbers = [2,3,4];
const result = appendingNumber(numbers);
console.log(result);



function abc(data) {
    console.log('jlkkl');

}

