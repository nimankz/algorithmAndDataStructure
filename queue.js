class Queue{
    constructor() {this.queue = [];}
    enqueue(element) {return this.queue.push(element);}
    dequeue() {if(this.queue.length){return this.queue.shift();}}
    peek() {return this.queue[this.queue.length-1];}
    isEmpty() {return this.queue.length===0;}
    clear() {this.queue=[]}
}

const myQueue = new Queue;
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
console.log(myQueue.peek())
console.log(myQueue.queue)
myQueue.dequeue()
console.log(myQueue.queue)
myQueue.dequeue()
console.log(myQueue.queue)
myQueue.dequeue()
console.log(myQueue.queue)
myQueue.dequeue()
console.log(myQueue.queue)
myQueue.dequeue()
console.log(myQueue.queue)
