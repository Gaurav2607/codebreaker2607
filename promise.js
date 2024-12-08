/**
 * Promise in javascript
 * A promise is an object representing 
 * the eventual completion or failure 
 * of an asynchronous operation.
 * It can be in one of 
 * three states: fulfilled, 
 * rejected, or pending.
 */

let promise = new Promise((resolve, reject)=> {
    fetch('http://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(data => {
        //success state
        resolve(data);
    })
    .catch(error => {
        //error state
        reject(error);
    })
    
});

console.log('check promise state', promise);

promise.then((result) => {
    console.log('result printed',result)
})
.catch((error) => {
    console.log(error);
});