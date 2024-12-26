/**
 * Javascript interview question
 * Count the number of character
 */

let str = 'count the number of character';

let obj = {};
for(let val of str) {
    if(obj[val]) {
        obj[val]++;
    }else {
        obj[val] = 1;
    }
}

console.log(obj);

