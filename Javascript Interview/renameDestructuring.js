/**
 * Rename using Destructuring
 */

let object = {
    name: "Code Breaker",
    channelType: "Youtube"
}
 let name = 'Atul';

let {name: channelName} = object;

console.log(channelName);
