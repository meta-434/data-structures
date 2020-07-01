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

    insertBefore(nextNode, item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            let prevNode = this.head;

            while ((currNode !== null) && (currNode.value !== nextNode)) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = new _Node(item, currNode);
        }
    }

    insertAfter(prevNode, item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            let prevNode = this.head;

            while ((currNode !== null) && (currNode.value !== prevNode)) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            if (currNode !== null) {
                console.log('Item not found on list');
                return;
            }
            prevNode.next = new _Node(item, currNode);
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
    // const SLL = new LinkedList();
    // SLL.insertLast('orange');
    // SLL.insertLast('Dragon Fruit');
    // SLL.insertLast('Persimmon');
    //
    //
    // SLL.insertAt(1, 'apple');
    // console.log(cycleList(SLL));
    // console.log(JSON.stringify(SLL, null, 2));

    const dupList = new LinkedList();
    const dupList2 = new LinkedList();
    dupList.insertLast('B');
    dupList.insertLast('a');
    dupList.insertLast('l');
    dupList.insertLast('b');
    dupList.insertLast('o');
    dupList.insertLast('a');

    dupList2.insertLast('B');
    dupList2.insertLast('a');
    dupList2.insertLast('l');
    dupList2.insertLast('b');
    dupList2.insertLast('o');
    dupList2.insertLast('b');

    console.log(compareLLSCharWise(dupList, dupList2));
    deleteDuplicates(dupList);
    // console.log(JSON.stringify(dupList, null, 2));
}

main();



function display(list) {
    if (list.head) {
        console.log(list.head.value);
    } else {
        console.log('Empty List');
        return;
    }
}

function size(list) {

    let currNode = list.head;
    let i = 0;

    while (currNode.next !== null) {
        currNode = currNode.next;
        i++;
    }
    console.log(i);
    return i;
}


function isEmpty(list) {
    if (list.head) {
        console.log('false');
    } else {
        console.log('true');
    }
}

function findPrevious(list, key) {
    if (!list.head) {
        return;
    }

    let currNode = list.head;
    let prevNode = list.head;

    while (currNode.value !== key) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    console.log(prevNode.value);
    return prevNode.value;
}

function findLast(list) {
    if (!list.head) {
        return;
    }

    let currNode = list.head;

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    console.log(currNode.value);
    return currNode.value;
}


//Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve.What is the runtime of this algorithm ?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) { // 1
        let newNode = current;
        while (newNode.next !== null) { // 1
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// this program will look ahead to the next item in an LL. if the next node value is equal to the currNode value,
// it points the current node the the one after the duplicate. essentially removes duplicates.

// Reverse a list

function reverse(list) {
    if (!list.head) {
        return;
    }
    let currNode = list.head;
    let i = 0;

    while (currNode.next !== null) {
        currNode = currNode.next;
        i++;
    }

    console.log(list);
    return currNode.value;
}

function middleList(list) {

    let mid = size(list) / 2;
    mid = Math.round(mid);

    let currNode = list.head;
    let prevNode = list.head;
    let i = 0;

    while (i !== mid) {
        if (!currNode.next) {
            return;
        }
        prevNode = currNode;
        currNode = currNode.next;
        i++;
    }
    if (currNode === null) {
        return;
    }

    let middle = prevNode;
    //    console.log(pushedItem);
    return console.log(list.find(middle.value));
}

function cycleList(list)  {
    const visited = [];
    let currNode = list.head;

    while (currNode.next !== null) {
        visited.push(currNode.value);
        if (visited.indexOf(currNode.next.value) !== -1) {
            return 'cyclical list'
        }
        currNode = currNode.next;
    }
    return 'non-cyclical list'
}

function sortList(list) {
    // need guidance on this.
}

function deleteDuplicates(list) {
    let currNode = list.head;

    while (currNode.next !== null) {
        if (currNode.value === currNode.next.value) {
            console.log(`duplicate ${currNode.value} and ${currNode.next.value}`)
            currNode.next = currNode.next.next;
            return;
        }
        currNode = currNode.next;
    }
}

function compareLLSCharWise(list1, list2) {
    // if (!list1 || !list2) return null;
    // if (size(list1) > size(list2)) return 1;
    // if (size(list1) < size(list2)) return -1;
    // else {
    //     let charCodeTotal1 = 0;
    //     let charCodeTotal2 = 0;
    //
    //     let currNode1 = list1.head;
    //     let currNode2 = list2.head;
    //
    //     while (currNode1 !== null) {
    //         console.log('list1 value ', currNode1.value);
    //         charCodeTotal1 += currNode1.value.charCodeAt(0);
    //         currNode1 = currNode1.next;
    //     }
    //
    //     while (currNode2 !== null) {
    //         console.log('list2 value ', currNode2.value);
    //         charCodeTotal2 += currNode2.value.charCodeAt(0);
    //         currNode2 = currNode2.next;
    //     }
    //
    //     // console.log(charCodeTotal1, charCodeTotal2);
    //     if (charCodeTotal2 < charCodeTotal1) return 1;
    //     else if (charCodeTotal2 === charCodeTotal1) return 0;
    //     else if (charCodeTotal2 > charCodeTotal1) return -1;
    // }
    let currNode1 = list1.head;
    let currNode2 = list2.head;

    while (currNode1 !== null && currNode2 !== null && currNode1.value === currNode2.value) {
        currNode1 = currNode1.next;
        currNode2 = currNode2.next;
    }
    
    if (currNode1 !== null && currNode2 !== null) {
        return (currNode1.value > currNode2.value ? 1 : -1);
    }

    if (currNode1 !== null && currNode2 === null) {
        return 1;
    }
    else if (currNode1 === null && currNode2 !== null) {
        return -1;
    }
    console.log('miss')
    return 0;



}