class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// FI,FO

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    // enqueue
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node
    }
    // dequeue
    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;

        if (node === this.last) {
            this.last = null;
        }

        return node.value
    }

    peek() {
        if(this.first !== null) {
            return this.first.data;
        }
        return 'queue is empty'
    }

    isEmpty() {
        return this.first == null;
    }
}

function main(){
    const QUEUE = new Queue();

    QUEUE.enqueue('hi');
    QUEUE.enqueue(',');
    QUEUE.enqueue('how');
    QUEUE.enqueue('are');
    QUEUE.enqueue('ya');
    QUEUE.enqueue('?');

    console.log(JSON.stringify(QUEUE, null, 2));
}

// main();

function mainQ() {
    const starTrekQ = new Queue();
    starTrekQ.enqueue("Kirk");
    starTrekQ.enqueue("Spock");
    starTrekQ.enqueue("Uhura");
    starTrekQ.enqueue("Sulu");
    starTrekQ.enqueue("Checkov");
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    starTrekQ.enqueue("Kirk");
    console.log(JSON.stringify(starTrekQ, null, 2))
}

mainQ();