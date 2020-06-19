const Memory = require('./memory');

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        const mem = new Memory();
        this.addr = mem.allocate(this.length);

        this.state = {
            mem: mem
        }
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        this.state.mem.set(this.addr + this.length, value);
        console.log('this.addr', this.addr);
        this.length++;
    }

    _resize(size) {
        const oldaddr = this.addr;
        this.addr = this.state.mem.allocate(size);
        if (this.addr === null) {
            throw new Error('Out of mem');
        }
        this.state.mem.copy(this.addr, oldaddr, this.length);
        this.state.mem.free(oldaddr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return this.state.mem.get(this.addr + index);
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Index error');
        }
        const value = this.state.mem.get(this.addr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        this.state.mem.copy(this.addr + index + 1, this.addr + index, this.length - index);
        this.state.mem.set(this.addr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        this.state.mem.copy(this.addr + index, this.addr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3;

function main(){
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(5);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push('tauhida');
    console.log(arr.get(0))
    console.log(arr);
}

main();


// 2
// length: 1, capacity 3, addr 0
// length: 6, capacity 12, addr 3
// when the 4th value is pushed, array is resized to SIZE_RATIO (3) * length + 1 (3 + 1) = capacity = 12;
// remaining 2 values are pushed, increasing length to 6
// address is reassigned to 3 on resize

// 3
// length: 3, capacity 12, addr 3
// only thing about array that changes on pop is values, so capacity and address remain the same

// 4
// the memory class uses 64-bit floating point numbers. when pushing a string to our array that uses this type of memory,
// there is no implicit type casting so the string is inserted as NaN, not a number.
// _resize is used in order to make room for new values that are over capacity. When an array is instantiated, it would
// be very wasteful of memory to give the array the entire 1024 value memory block as capacity, so size is dynamically
// increased should the array need it. It only resizes up on pushes and inserts.