/**
 * Rest parameters
 */
function getTotal(a, b, ...rest) {
    console.log(a, b);
    console.log(rest);
    let total = 0;
    for(let val of rest) {
        total += val;
    }
    console.log(total);
}

getTotal(1,2,3,4,5);
