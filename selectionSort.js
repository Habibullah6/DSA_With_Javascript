// Function to perform selection sort
function selectionSort(arr) {
    // Loop through the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the current index has the minimum value
        let minIndex = i;
  
        // Loop through the remaining elements to find the minimum value
        for (let j = i + 1; j < arr.length; j++) {
            // If we find a smaller value, update minIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
  
        // Swap the current element with the minimum element found
        // let temp = arr[i];
        // arr[i] = arr[minIndex];
        // arr[minIndex] = temp;
        [arr[i], arr[minIndex] ] = [arr[minIndex], arr[i]]
    }
  
    // Return the sorted array
    return arr;
  }
  
  // Example usage
  let myArray = [64, 34, 25, 5, 22, 11, 90, 12];
  console.log("Original array:", myArray);
  console.log("Sorted array:", selectionSort(myArray.slice())); // Passing a copy of the array to keep the original intact
  
  