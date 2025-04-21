class Node {
    constructor(element) {
        this.element = element;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(element) {
        const node = new Node(element);
        // if(root === null) {
        //     this.root = node;
        // } else {
        // }
    }
}