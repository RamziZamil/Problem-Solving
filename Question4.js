console.log("-------------------- Question 4 --------------------");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ") ;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
}

// Create a Linked List
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Original Linked List:");
console.log(linkedList.printList());

linkedList.reverse();

console.log("\nReversed Linked List:");
console.log(linkedList.printList());
