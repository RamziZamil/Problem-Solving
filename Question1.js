console.log("-------------------- Question 1 --------------------");

function reverseArray(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]); // Push elements onto the stack
  }

  let reversedArr = [];
  while (stack.length > 0) {
    reversedArr.push(stack.pop()); // Pop elements to reverse order
  }

  return reversedArr;
}

// Example Usage
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
