class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = {
            value: value,
            next: this.head
        };
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (this.head === null) {
            return null;
        }
        const newHead = this.head.next;
        this.head = newHead;
        return this.head;
    }

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.value;
    }
}



var SLL1 = new SLL();


// SLL1.addFront(18);
// console.log(SLL1)
// // SLL1.addFront(5);
// // SLL1.addFront(73);

// SLL1.removeFront();
// console.log(SLL1)
