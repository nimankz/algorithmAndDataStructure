class Queue{
    constructor() {this.queue = [];}
    enqueue(element) {return this.queue.push(element);}
    dequeue() {if(this.queue.length){return this.queue.shift();}}
    peek() {return this.queue[this.queue.length-1];}
    isEmpty() {return this.queue.length===0;}
    clear() {this.queue=[]}
}

class binaryTree{
    constructor(node){
        this.root=node;
        this.leftChild=null;
        this.rightChild=null;
    }
    insertLeftChild(node){
        if (this.leftChild==null) this.leftChild=new binaryTree(node);
        else {
            this.leftChild = new binaryTree(this.leftChild);
            this.leftChild.insertLeftChild(node)

        }
    }
    insertRightChild(node){
        if (this.rightChild==null) this.rightChild=new binaryTree(node);
        else {
            this.rightChild = new binaryTree(this.rightChild);
            this.rightChild.insertRightChild(node)
        }
    }
    preOrder(){
        console.log(this.root)
        if (this.leftChild) this.leftChild.preOrder()
        if (this.rightChild) this.rightChild.preOrder()
    }
    inOrder(){
        if (this.leftChild) this.leftChild.inOrder()
        console.log(this.root)
        if (this.rightChild) this.rightChild.inOrder()
    }
    postOrder(){
        if (this.leftChild) this.leftChild.postOrder()
        if (this.rightChild) this.rightChild.postOrder()
        console.log(this.root)
    }
}
const tree=new binaryTree("a");
// console.log(tree.root);
// console.log(tree.leftChild);
// console.log(tree.rightChild);


tree.insertLeftChild("b");
tree.insertRightChild("c");
// console.log(tree)
tree.leftChild.insertRightChild("d");
tree.rightChild.insertLeftChild("e")
tree.rightChild.insertRightChild("f")
console.log(tree)
// tree.preOrder()
// tree.inOrder()
// tree.postOrder()



