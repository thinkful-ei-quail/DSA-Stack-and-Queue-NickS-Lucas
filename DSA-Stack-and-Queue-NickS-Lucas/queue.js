'use strict';

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue() {
        node = this.first;
        this.first = this.first.next;
    if (node === this.ast) {
        this.last = null;
    }
    return node.value;
    }

}

function peek(queue) {
    return queue.first.value;
}

function isEmpty(queue) {
return queue.first === null
}

function display(queue) {
    
}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
console.log(peek(starTrekQ));
