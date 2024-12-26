/**
 * hoisting a variable
 * Javascript interview question
 */

const a = 10;

function getData() {
    //var a;
    console.log(a);
    var a = 20;
}

getData();