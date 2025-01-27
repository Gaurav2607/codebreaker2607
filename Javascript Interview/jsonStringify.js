/**
 * Json stringify data
 */

let obj= {
    name: 'code breaker',
    channel: 'Youtube',
    likes: 100,
    comments: 200
}

let result = JSON.stringify(obj, ["name", "channel"]);

console.log(result);