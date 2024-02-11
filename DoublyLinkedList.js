class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToFront(value) {
        const newNode = new Node(value);

        // The list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // The list is not empty
            this.head.prev = newNode; // Set the current head's previous pointer to the new node
            newNode.next = this.head; // Set the new node's next pointer to the current head
            this.head = newNode; // Update the head to be the new node
        }

        this.length++; // Increase the list length

        return newNode
    }

    addToBack(value) {
        const newNode = new Node(value);

        if (!this.tail) {
            // The list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // The list is not empty
            this.tail.next = newNode; // Set the current tail's next pointer to the new node
            newNode.prev = this.tail; // Set the new node's prev pointer to the current tail
            this.tail = newNode; // Update the tail to be the new node
        }

        this.length++;
    }

    removeNode(node) {
        if (!node) return; // If the node is null, do nothing

        if (node === this.head) {
            // The node is the head
            this.head = this.head.next; // Move head pointer to the next node
            if (this.head) {
                this.head.prev = null; // Set the new head's prev to null
            } else {
                this.tail = null; // If the list is now empty, also set tail to null
            }
        } else if (node === this.tail) {
            // The node is the tail
            this.tail = this.tail.prev; // Move tail pointer to the previous node
            this.tail.next = null; // Set the new tail's next to null
        } else {
            // The node is in the middle
            const prevNode = node.prev;
            const nextNode = node.next;
            prevNode.next = nextNode; // Link previous node to next node
            nextNode.prev = prevNode; // Link next node to previous node
        }

        this.length--; // Decrease the list length
        node.prev = null; // Clear the removed node's pointers
        node.next = null;
    }

    popFront() {
        if (!this.head) return null; // List is empty

        const removedNode = this.head;
        if (this.head === this.tail) {
            // There's only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            // There are more than one nodes in the list
            this.head = this.head.next; // Move the head pointer to the next node
            this.head.prev = null; // Set the new head's prev to null
        }

        this.length--; // Decrease the list length
        removedNode.next = null; // Clear the removed node's pointers
        return removedNode.value; // Return the removed node's value
    }

    popBack() {
        if (!this.tail) return null; // List is empty

        const removedNode = this.tail;
        if (this.head === this.tail) {
            // There's only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            // There are more than one nodes in the list
            this.tail = this.tail.prev; // Move the tail pointer to the previous node
            this.tail.next = null; // Set the new tail's next to null
        }

        this.length--; // Decrease the list length
        removedNode.prev = null; // Clear the removed node's pointers
        return removedNode.value; // Return the removed node's value
    }
}


