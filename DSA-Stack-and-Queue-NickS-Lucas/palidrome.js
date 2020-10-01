'use strict'
const Stack = require('./stack');

function isPalindrome(str) {
    if(!str){
        return 'string is empty'
    }
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let stack = new Stack();
    
    // add each char to stack
    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
    }

    // check each char value to the popped stack value
    for(let i = 0; i < str.length; i++){
        let stackVal = stack.pop()
        let charVal = str[i]
        if(stackVal !== charVal){
            return false
        }
    }
    return true

    // while (stackA !== null) {
    //     stackB.push(stackA.pop());
    //     if (stackB === stackA) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));
console.log(isPalindrome("Tauhida"));
isPalindrome();