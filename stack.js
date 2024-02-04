class stack {
    constructor() {
        // in compiler languages you have to identify the size of array but in JS tou
        //don't need to.
        this.stack = [];}
    push(data) {this.stack.push(data);}
    pop() {
        if (this.stack.length===0){this.isEmpty()}
        else {
            console.log(this.stack[this.stack.length - 1]);
            return this.stack.pop();
        }
    }
    isEmpty() {return "the stack is empty";}
    // full() {return self.stack[this.stack.length - 1]} maybe in compiler languages you need that.

}

const mystack=new stack
console.log(mystack.stack)
mystack.push(1)
mystack.push(2)
mystack.push(3)
mystack.push(4)
console.log(mystack.stack)
mystack.pop()
console.log(mystack.stack)
mystack.pop()
console.log(mystack.stack)
mystack.pop()
console.log(mystack.stack)
mystack.pop()
console.log(mystack.stack)
mystack.pop()
console.log(mystack.stack)
