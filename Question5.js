console.log("-------------------- Question 5 --------------------");

// Define ListNode class
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteMiddleNode(head) {
  if (!head || !head.next) return null; // If empty or single node, return null

  let slow = head,
    fast = head,
    prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Delete the middle node
  if (prev !== null) {
    prev.next = slow.next;
  }

  return head;
}

// Function to print LinkedList
function printLinkedList(head) {
  let current = head;
  let result = "";
  while (current) {
    result += current.value + " -> ";
    current = current.next;
  }
  result += "NULL";
  console.log(result);
}

// Example Usage
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
printLinkedList(head2);

head2 = deleteMiddleNode(head2);

console.log("\nLinked List after deleting middle node:");
printLinkedList(head2);
