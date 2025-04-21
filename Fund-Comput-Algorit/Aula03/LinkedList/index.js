class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }
    // Adiciona um elemento no final da lista
    push(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.count++;
    }

    getElementAt(index) {
        if (index < 0 || index >= this.count) {
            return undefined;
        }
        if(index == 0) {
            return this.head;
        }
        if(index == this.count - 1) {
            return this.tail;
        }

        let node = this.head;
        for (let i = 0; i < index && node != null; i++) { // percorre a lista até o índice desejado
            node = node.next;
        }
        return node;
    }

    insert(element, index) {
        if(index < 0 || index > this.count) {
            return false;
        }
        const node = new Node(element);
        if(index === 0) {
            node.next = this.head; // o head atual vai ser o next do novo nó
            this.head = node; // o head agora é o novo nó
        } else if(index == this.count) {
            this.tail.next = node; // o next do nó anterior vai ser o novo nó
            this.tail = node; // o tail agora é o novo nó
        } else {
            const previous = this.getElementAt(index - 1); // pega o nó anterior
            node.next = previous.next; // o next do novo nó vai ser o next do nó anterior
            previous.next = node; // o next do nó anterior vai ser o novo nó
        }
        this.count++;
        return true;
    }

    removeAt(index) {
        if(index < 0 || index > this.count) {
            return undefined;
        }
        let node = this.head;
        if(index == 0) {
            this.head = node.next;
        } else if(index == this.count - 1) {
            node = this.tail;
            let previous = this.getElementAt(index - 1);
            previous.next = null; // o next do nó anterior vai ser nulo
            this.tail = previous; // o tail agora é o nó anterior
        } else {
            const previous = this.getElementAt(index - 1);
            node = previous.next; // pega o nó que vai ser removido
            previous.next = node.next; // o next do nó anterior vai ser o next do nó que vai ser removido
        }
        this.count--;
        return node.element; // retorna o elemento que foi removido
    }

    remove(element) {
        const index = this.indexOf(element); // pega o índice do elemento
        return this.removeAt(index);
    }

    indexOf(element) {
        let node = this.head;
        for (let i = 0; i < this.size() && node != null; i++) {
            if(node.element == element) {
                return i; // se o elemento for encontrado, retorna o índice
            }
            node = node.next; // se não, vai para o próximo nó
        }
        return -1;
    }

    isEmpty() {
        return this.count == 0;
    }

    size() {
        return this.count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    
    toString() {
        if(this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString} ${current.element}`;
            current = current.next;
        }
        return console.log(objString);
    }
}

let myLL = new LinkedList();

myLL.push(1);
myLL.toString();

console.log("--------------");

myLL.push(2);
myLL.toString();

console.log("--------------");

myLL.push(3);
myLL.toString();

console.log("--------------");

myLL.push(4);
myLL.toString();

console.log("--------------");

myLL.insert(5, 2);

myLL.insert(6, 5);

console.log(myLL.getElementAt(5));
console.log(myLL.size());