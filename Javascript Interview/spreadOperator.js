/**
 * Use of spread operator
 */

let obj = {
    name: 'code breaker',
    channel: 'Youtube'
}

let result = {comments: 100, ...obj};
console.log(result);