// We have a function called binarySearch that takes a sorted array (arr) and a target element (target) as parameters.
// Inside the function, we initialize two pointers, left and right, to represent the boundaries of the search space within the array.
// We enter a while loop that continues as long as left is less than or equal to right, which means there is a non-empty search space.
// Inside the loop, we calculate the middle index (mid) of the current search space and compare the element at mid to the target element.
// If the element at mid is equal to the target element, we return mid as the index where the element is found.
// If the element at mid is less than the target element, we adjust the left boundary to mid + 1 to search the right half of the current space.
// If the element at mid is greater than the target element, we adjust the right boundary to mid - 1 to search the left half of the current space.
// If the loop exits without finding the target element, we return -1 to indicate that the element is not in the array.

// Binary search function to find an element in a sorted array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // Adjust the left boundary
    } else {
      right = mid - 1; // Adjust the right boundary
    }
  }

  return -1; // Element not found
}

// Example usage:
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const targetElement = 14;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
