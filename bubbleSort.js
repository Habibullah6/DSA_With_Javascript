// let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
// let n = myArray.length;

// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (myArray[j] > myArray[j + 1]) {
//             let temp = myArray[j];
//             myArray[j] = myArray[j + 1];
//             myArray[j + 1] = temp;
//         }
//     }
// }

// console.log("Sorted array:", myArray);


// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
        
//         for (let j = 0; j < arr.length - i - 1; j++) {
           
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }

            
//         }
        
//     }

//     return arr;
// }

// const result = [5, 1, 3, 4, 2];
// const output = bubbleSort(result);
// console.log(output)


const myArray = [7, 3, 9, 12, 11];

function bubbleSort(array) {
  let swapped = false;
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements using destructuring assignment
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    // If no swaps occurred in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return array;
}

const sortedArray = bubbleSort(myArray);
console.log("Sorted array:", sortedArray);
