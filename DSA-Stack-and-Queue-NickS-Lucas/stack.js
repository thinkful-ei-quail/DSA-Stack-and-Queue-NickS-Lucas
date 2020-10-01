'use strict';

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        this.top = new _Node(data, this.top)

        // if (this.top === null) {
        //     this.top = new _Node(data, null);
        //     return this.top;
        // }
        // const node = new _Node(data, this.top);
        // this.top = node;
    }
    pop() {
        if (!this.top) return;
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

module.exports = Stack;

const starTrek = new Stack()
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');