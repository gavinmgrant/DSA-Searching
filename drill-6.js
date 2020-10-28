'use strict';

// 6. Find the next commanding officer
// Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order
// so that if officers start dropping like flies, we know who is the next person to take over command.

class _Node {
    constructor(value){
        this.value = value,
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

        if (this.first === null){
            this.first = node;
        }

        if (this.last){
            this.last.next = node;
        }
        this.last = node;
    }
    
    dequeue() {
        if (this.first === null){
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last){
            this.last = null;
        }
        return node.value;
    }
}

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key === null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    orderRanking(root) {
        if (!root.value) {
            return null;
        }

        const queue = new Queue();
        queue.enqueue(root);
        let order = [];

        // traverse the BST and remove/dequeue one officer at a time from top to bottom
        while (queue.first) {
            let node = queue.dequeue();
            order.push(node.value);
            console.log('node: ', node);

            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
        }

        return order
    }
}

const displayRanking = () => {
    const orgChart = new BinarySearchTree();

    const officers = [
        {key: 5, name: 'Captain Picard'},
        {key: 3, name: 'Commander Riker'},
        {key: 6, name: 'Commander Data'},
        {key: 2, name: 'Lt. Cmdr. Worf'},
        {key: 4, name: 'Lt. Cmdr. LaForge'},
        {key: 8, name: 'Lt. Cmdr. Crusher'},
        {key: 1, name: 'Lt. Security-officer'},
        {key: 8, name: 'Lt. Selar'}
    ];

    // populate BST with officers per array above
    officers.forEach(officer => {
        orgChart.insert(officer.key, officer.name)
    });

    console.log(orgChart.orderRanking(orgChart));
}

displayRanking();