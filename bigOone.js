// Function that returns the first element of an array
function getFirstElement(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  return arr[0]; // Return the first element
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
const firstElement = getFirstElement(myArray);
console.log(firstElement); // Output: 10

//   We have a function called getFirstElement that takes an array arr as its parameter.
// Inside the function, we check if the array is empty by comparing its length property to zero. This check is necessary to handle the edge case of an empty array.
// If the array is not empty, we return the first element of the array, which is arr[0].
// The key point to note here is that the time it takes to retrieve the first element of the array (arr[0]) is constant and does not depend on the size of the array. Therefore, the time complexity of this operation is O(1).

// This is a basic example of O(1) complexity, where the algorithm's performance remains constant regardless of the input size, making it very efficient.
