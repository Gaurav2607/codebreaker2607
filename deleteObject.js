/**
 * Delete Object 
 */
let object = {
    name: 'codebreaker',
    likes: 2,
    comments: 4,
    source: 'youtube'
}
delete object.source;
console.log(object);