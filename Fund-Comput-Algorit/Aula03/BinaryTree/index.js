class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            // Se não existe raiz, novo nó vira a raiz
            this.root = newNode;
        } else {
            // Senão, vamos inserir de forma recursiva
            this._insertNode(this.root, newNode);
        }
    }
      
    _insertNode(current, newNode) {
        if (newNode.value < current.value) {
            // Se o valor é menor, vai para a esquerda
            if (current.left === null) {
                current.left = newNode;
            } else {
                this._insertNode(current.left, newNode);
            }
        } else {
            // Se o valor é maior ou igual, vai para a direita
            if (current.right === null) {
                current.right = newNode;
            } else {
                this._insertNode(current.right, newNode);
            }
        }
    }
    
    // Método para fazer uma busca (opcional, só pra praticar)
    search(value) {
        return this._searchNode(this.root, value);
    }
    
    _searchNode(current, value) {
        if (current === null) return false;
    
        if (value === current.value) return true;
    
        if (value < current.value) {
            return this._searchNode(current.left, value);
        } else {
            return this._searchNode(current.right, value);
        }
    }
    
    // (opcional) Método para imprimir a árvore (em ordem crescente)
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();

tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);

console.log("Árvore em ordem:");
tree.inOrderTraversal();

console.log("Buscando 6:", tree.search(6)); 
console.log("Buscando 20:", tree.search(20));