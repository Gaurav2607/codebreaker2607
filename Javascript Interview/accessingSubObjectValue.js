/**
 * Accessing SubObject Value
 * using destructuring
 */

let obj = {
    name: 'code breaker',
    channel: 'Youtube',
    channelDetails: {
        likes: 100,
        comments: 200
    }
}

let {channelDetails} = obj;
console.log(channelDetails.likes);