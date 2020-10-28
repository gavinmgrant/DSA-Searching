'use strict';

// 4. Searching in a BST

// ** No coding is needed for these drills**. 
// Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

// 1) Given a binary search tree whose in-order and pre-order traversals are respectively 
// 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
// What would be its postorder traversal?

// Answer: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

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

    dfsPre(values=[]) {
        // pre-order sequence: visit node, traverse left, traverse right
        values.push(this.value);
        if (this.left) {
            values = this.left.dfsPre(values);
        }
        if (this.right) {
            values = this.right.dfsPre(values);
        }
        return values;
    }

    dfsPost(values=[]) {
        // post-order sequence: traverse left, traverse right, visit node
        if (this.left) {
            values = this.left.dfsPost(values);
        }
        if (this.right) {
            values = this.right.dfsPost(values);
        }
        values.push(this.value);
        return values;
    }
}

const tree = new BinarySearchTree;

const makeTree = t => {
    t.insert(35, 35);
    t.insert(25, 25);
    t.insert(15, 15);
    t.insert(14, 14);
    t.insert(19, 19);
    t.insert(27, 27);
    t.insert(89, 89);
    t.insert(79, 79);
    t.insert(91, 91);
    t.insert(90, 90);

    return t
};

console.log(makeTree(tree));

console.log(tree.dfsPost());

// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
// What is its pre-order traversal?

// Answer: 8, 6, 5, 7, 10, 11, 9 

const tree2 = new BinarySearchTree;

const makeTree2 = t => {
    t.insert(8, 8);
    t.insert(6, 6);
    t.insert (5, 5);
    t.insert(7, 7);
    t.insert(10, 10);
    t.insert(11, 11);
    t.insert(9, 9);

    return t
};

console.log(makeTree2(tree2));

console.log(tree2.dfsPre());