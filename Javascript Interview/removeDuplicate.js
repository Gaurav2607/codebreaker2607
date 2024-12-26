/**
 * Remove duplicate value
 * Javascript interview question
 */

let val = [2,4,5,2,9,3,7,4,5];

//without using set
function removeDuplicate(arr) {
    let result = [];
    for(let val of arr) {
        if(!result.includes(val)) {
            result.push(val);
        }
    }
    return result;
}

console.log("using for loop",removeDuplicate(val));

//using set
function removeDuplicateUsingSet(arr) {
    let result = new Set(arr);
    return Array.from(result);
}

console.log("using set",removeDuplicateUsingSet(val));

