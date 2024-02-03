//make a tree
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
}
const tree=new binaryTree("a");
console.log(tree.root);
console.log(tree.leftChild);
console.log(tree.rightChild);


tree.insertLeftChild("b");
tree.insertRightChild("c");
console.log(tree)
tree.leftChild.insertRightChild("d");
tree.rightChild.insertLeftChild("e")
tree.rightChild.insertRightChild("f")
console.log(tree)



