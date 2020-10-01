'use strict';

const Stack = require('./stack');
const utilities = require('./utilities')

const stack = new Stack()
stack.push(6);
stack.push(1);
stack.push(3);
stack.push(18);
stack.push(4);
stack.push(499);

// stack 1
// 6-1-3-18-4-499
// LIFO
// temp 6-1-3-18-4-499

// tempStack 499-18-6-4-3-1
function sort(unsorted) {
    const tempStack = new Stack();
    let temp
    while(unsorted.top !== null){
        temp = unsorted.pop();
        while(tempStack.top !== null && tempStack.top.data > temp){
            unsorted.push(tempStack.pop());
        }
        tempStack.push(temp)
    }
    return tempStack;
}
utilities.display(stack)
const sorted = sort(stack)
utilities.display(sorted)