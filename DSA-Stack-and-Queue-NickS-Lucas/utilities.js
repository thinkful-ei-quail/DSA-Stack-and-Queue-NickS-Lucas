'use strict';

function peek(stack) {
    if(stack.top){
        return stack.top.data
    }
}
function isEmpty(stack) {
    return stack.top === null
    // if (list.top === null) {
    //     return true;
    // }
    // return false;
}
function display(stack) {
    if(isEmpty(stack)) return;
    let currentTop = stack.top;
    while (currentTop !== null) {
        console.log(currentTop.data)
        currentTop = currentTop.next
    }
}

module.exports = {
    peek,
    isEmpty,
    display,
  };