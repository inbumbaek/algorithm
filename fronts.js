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

    display() {
        let current = this.head;
        let result = '';

        while (current !== null) {
            result += current.value;
            if (current.next !== null) {
                result += ' -> ';
            }
            current = current.next;
        }

        return result;
    }
}



var SLL1 = new SLL();


SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1)

SLL1.removeFront();
console.log(SLL1)
