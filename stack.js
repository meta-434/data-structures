class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// FI,LO

class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        if (!this.top) this.top = new _Node(val, null)
        else {
            this.top = new _Node(val, this.top)
        }
    }

    pop() {
        if (!this.top) {
            return new Error('can\'t pop empty stack');
        } else {
            const holdOldTop = this.top;
            this.top = this.top.next;
            return holdOldTop;
        }
    }

    // peek
    peek() {
        return this.top;
    }
    // isEmpty
    isEmpty() {
        return !this.top;

    }

    // display
}

function main() {
    const FILO = new Stack();
    FILO.push('kirk');
    FILO.push('spock');
    FILO.push('mccoy');
    FILO.push('scotty')

    FILO.pop();

    console.log(FILO.peek(), ', ', FILO.isEmpty())
    //console.log(JSON.stringify(FILO, null, 2));
}

main();
