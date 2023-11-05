// Brute fore method

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// const res = twoSum([2, 8, 7, 5, 6], 12);
// console.log(res);

function twoSum(nums, target) {
    const numMap = {}; // Create an empty object to store numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement for the current number
        
        if (numMap.hasOwnProperty(complement)) {
            // If complement exists in the numMap, return its index along with the current index
            return [numMap[complement], i];
        }
        
        // Store the current number and its index in the numMap
        numMap[nums[i]] = i;
    }
    
    // If no solution is found
    return null;
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
if (result !== null) {
    console.log(`Indices of the two numbers: ${result[0]}, ${result[1]}`);
} else {
    console.log("No solution found.");
}

  