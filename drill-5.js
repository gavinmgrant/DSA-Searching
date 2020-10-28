'use strict';

// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 
// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. 
// Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

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

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key < this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    preOrder(values=[]) {
        // pre-order sequence: visit node, traverse left, traverse right
        values.push(this.value);
        if (this.left) {
            values = this.left.preOrder(values);
        }
        if (this.right) {
            values = this.right.preOrder(values);
        }
        return values;
    }

    inOrder(values=[]) {
        // in-order sequence: traverse left, visit node, traverse right
        if (this.left) {
            values = this.left.inOrder(values);
        }
        values.push(this.value);
        if (this.right) {
            values = this.right.inOrder(values);
        }
        return values;
    }

    postOrder(values=[]) {
        // post-order sequence: traverse left, traverse right, visit node
        if (this.left) {
            values = this.left.postOrder(values);
        }
        if (this.right) {
            values = this.right.postOrder(values);
        }
        values.push(this.value);
        return values;
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    _findMax() {
        if (!this.right) {
            return this;
        }
        return this.right._findMax();
    }
}

const tree = new BinarySearchTree();

const makeTree = t => {
    t.insert(25, 25);
    t.insert(15, 15);
    t.insert(50, 50);
    t.insert(10, 10);
    t.insert(24, 24);
    t.insert(35, 35);
    t.insert(70, 70);
    t.insert(4, 4);
    t.insert(12, 12);
    t.insert(18, 18);
    t.insert(31, 31);
    t.insert(44, 44);
    t.insert(66, 66);
    t.insert(90, 90);
    t.insert(22, 22);

    return t;
}

console.log(makeTree(tree));
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());