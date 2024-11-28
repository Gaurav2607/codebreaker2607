/**
 * Reduce
 */

let arr = [2,3,4,5];

function sumOfArray(current, previousValue) {
   // 0 + 2=> 2
   // 2 + 3=> 5
   // 5 + 4 => 9
   // 9 + 5 => 14
    return current + previousValue;
}
let result = arr.reduce(sumOfArray, 0);
console.log(result);