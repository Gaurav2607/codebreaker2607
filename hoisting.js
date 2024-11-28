/**
 * Hoisting in Javascript
 * Interview question asked in most of the company
 * What is hoisting in Javascript
 * Temporarl dead zone
 */

console.log('Hoisting in Javascript');

console.log(a);
console.log(c);
var a = '10';
let b = '30';
const c = 40;
console.log(b);
getChannelName();
function getChannelName() {
    console.log('Code Breaker');
}

