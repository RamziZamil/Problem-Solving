console.log("-------------------- Question 3 --------------------");

function sumArray(arr, index = 0) {
  if (index === arr.length) return 0; // Base case: if index reaches the end, return 0
  return arr[index] + sumArray(arr, index + 1);
}

// Example Usage
const arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);
const sum = sumArray(arr);
console.log("Sum of Array:", sum); // Output: 15
