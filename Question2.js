console.log("Q2: Implementing a Queue Data Structure using Two Stacks");

class CustomStack {
  constructor() {
    this.container = [];
  }

  push(element) {
    this.container.push(element);
  }

  pop() {
    return this.container.pop();
  }

  peek() {
    return this.container[this.container.length - 1];
  }

  isEmpty() {
    return this.container.length === 0;
  }
}

class TwoStackQueue {
  constructor() {
    this.inputStack = new CustomStack();
    this.outputStack = new CustomStack();
  }

  enqueue(value) {
    this.inputStack.push(value);
  }

  dequeue() {
    if (this.outputStack.isEmpty()) {
      while (!this.inputStack.isEmpty()) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.pop() || "Queue is empty";
  }

  getQueueContents() {
    let queueArray = [];

    // Move elements to outputStack to maintain correct queue order
    while (!this.inputStack.isEmpty()) {
      this.outputStack.push(this.inputStack.pop());
    }

    // Copy the outputStack contents to an array
    queueArray = [...this.outputStack.container];

    // Restore elements back to inputStack
    while (!this.outputStack.isEmpty()) {
      this.inputStack.push(this.outputStack.pop());
    }

    return queueArray.length > 0 ? queueArray : "Queue is empty";
  }
}

// Testing the Queue
const queueInstance = new TwoStackQueue();
console.log("Original Queue:");
queueInstance.enqueue(10);
queueInstance.enqueue(20);
queueInstance.enqueue(30);
console.log(
  "Items in the queue after enqueueing:",
  queueInstance.getQueueContents()
);

console.log("\nDequeued Item:", queueInstance.dequeue());

console.log("Remaining items in the queue:", queueInstance.getQueueContents());
