/**
 * lexical environment and closure
 */

function getChannelName() {
    let name1 = 'codebreaker';
    function show() {
        console.log(name1);
        console.log('function closure');
    }
    return show;
}

let result = getChannelName();
result();