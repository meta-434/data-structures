class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) this.insertFirst(item);
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertAt(idx, item) {
        if (!this.head && idx !== 0) {
            throw new Error('can\'t insert first LL @ greater than 0');
        } else if (!this.head && idx === 0) {
            this.head = new _Node(item, null);
        } else {
            let i = 0;
            let currNode = this.head;

            while (i < idx) {
                if (!currNode.next && i + 1 === idx) {
                    currNode.next = new _Node(item, null);
                    break;
                } else if (!currNode.next && idx - 1 !== i) {
                    throw new Error('bad idx')
                } else if (i + 1 === idx) {
                    item = new _Node(item, currNode.next);
                    currNode.next = item;
                    break;
                } else {
                    currNode = currNode.next;
                    i++;
                }
            }
        }
    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            // no results if LL is empty
            return null;
        }

        while (currNode.value !== item) {
            if (currNode.next === null) return null;
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {

        if (!this.head) return null; // can't delete items from an empty LL

        if (this.head.value === item) {
            this.head = this.head.next; // set head to next in line
            return;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            prevNode = currNode;
            currNode = currNode.next;
        }
    }
}

// populated: [value | next] -> [value | next] -> head (null)
// empty: head (null)

function main () {
    const LL = new LinkedList();
    LL.insertLast('orange');
    LL.insertLast('Dragon Fruit');
    LL.insertLast('Persimmon');

    LL.insertAt(1, 'apple');
    console.log(JSON.stringify(LL, null, 2));
}

main();