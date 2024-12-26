/**
 * Async Await
 */

// fetch('http://jsonplaceholder.typicode.com/todos/2')
// .then(response => response.json())
// .then(data => {
//     //success state
//     console.log(data);
// })
// .catch(error => {
//     //error state
//     console.log(error);
// })

async function asyncOperation() {
    const response = await fetch('http://jsonplaceholder.typicode.com/todos/2')
    const data = await response.json();
    console.log(data);
}

asyncOperation();

