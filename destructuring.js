/**
 * Destructuring and spread operator
 */
const arr = [2, 3, 4];
// let a = arr[0];
// let b = arr[1];
// [a, b, c, ...rest] = arr;

// console.log(a, b, c);
// console.log(rest);

function add(a, b, c) {
    return a + b + c;
}

console.log(add(...arr));

const {x, y} = {x: 1, y: 2};
console.log('a and b value', x,y);

let employeeDetails = {
    name: 'Atul',
    address: '2/5 Delhi',
    employeeId: 2344
}
console.log(employeeDetails);
let result = {...employeeDetails, name:'Ashish'};
console.log(result);


