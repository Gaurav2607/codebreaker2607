/**
 * Move zero at end
 * Javascript interview question
 */

let number = [2, 0, 9, 0, 8];

function moveZero(arr) {
    let result = [];
    for(let val of arr) {
        if(val === 0) {
            result.push(val);
        }else {
            result.unshift(val);
        }
    }
    return result;
}

console.log(moveZero(number));