/* Arrow function */

let substract = function(x, y) {
    let result = 0;
    if(x > y) {
        result = x - y;
    }else {
        result = y - x;
    }
    return result;
    
}

function employeeDetail() {
    this.employeeId = 12;
}

let arrowSubstract = (x, y) => (x>y) ? x-y : y-x;

let squareRoot = x => x*x;

console.log('arrow function',arrowSubstract(4,5));

console.log('anonymous function',substract(5, 3));

console.log('arrow function to get the square root of the number',squareRoot(5));