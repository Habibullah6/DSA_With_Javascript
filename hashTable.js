// given an array of integers and an integer target return indices of the two numbers such that they add up to the target

function twoSum(nums, target) {
  const numIndices = {}; // Create an empty object to store number indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in numIndices
    if (numIndices.hasOwnProperty(complement)) {
      // If yes, return the current index and the complement's index
      return [numIndices[complement], i];
    }

    // If not, store the current number and its index in numIndices
    numIndices[nums[i]] = i;
  }

  // If no such pair is found, return an empty array or handle it as per your requirements
  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log("Indices of the two numbers:", result);
