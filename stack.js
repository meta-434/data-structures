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
    display() {
        let currNode = this.peek();
        const res = [];
        while (currNode !== null && !this.isEmpty()) {
            //console.log('node: ', currNode)
            res.push(currNode);
            currNode = currNode.next;
        }
        return res;
    }

    deStack(data) {
        let currNode = this.peek();
        let prevNode = this.peek();

        if (this.peek().data === data) this.pop();
        else {
            while (currNode !== null && !this.isEmpty()) {
                if (currNode.data === data) {
                    prevNode.next = currNode.next;
                    currNode = currNode.next;
                } else {
                    prevNode = currNode;
                    currNode = currNode.next;
                }
            }
            return -1;
        }
        return 1;
    }

}

function main() {
    const FILO = new Stack();
    // FILO.push('kirk');
    // FILO.push('spock');
    // FILO.push('mccoy');
    // FILO.push('scotty')

    FILO.push(3);
    FILO.push(8);
    FILO.push(7);
    FILO.push(23);
    FILO.push(4);

    console.log(JSON.stringify(sortStack(FILO).display(), null, 2));

    // FILO.deStack('mccoy');
    // console.log(JSON.stringify(FILO.display(), null, 2));
    // console.log(FILO.peek(), ', ', FILO.isEmpty())
    // console.log(JSON.stringify(FILO, null, 2));

}

main();


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const stackStr = []
    const PAL = new Stack();

    s.split('').forEach(letter => {
        PAL.push(letter);
    })

    PAL.display().forEach(node => {
        stackStr.push(node.data);
    })


    return stackStr.join('') === s;

}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function checkParentheses(input) {
    let PAR = new Stack();
    if (input[0] === ')' || input[input.length - 1] === '(') {
        return false
    }
    input.split('').forEach(ltr => {
        if (ltr === '(') {
            PAR.push(ltr)
        }
        else if (ltr === ')') {
            PAR.pop()
        }
    })
    return PAR.top === null;
}

// console.log(checkParentheses('(((((((((((((())))))))))))))'))
// console.log(checkParentheses('()(())()()((())())'))
// console.log(checkParentheses('(((()))'))

function sortStack(stack) {
    let asc = new Stack();
    while (!stack.isEmpty()) {
        let currNode = stack.top;
        stack.pop()
        while (!asc.isEmpty() && asc.top.data < currNode.data) {
            stack.push(asc.top.data)
            asc.pop()
        }
        asc.push(currNode.data)
    }
    return asc
}