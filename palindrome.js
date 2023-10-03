function isPalindrome(str) {
  // Convert the input string to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the cleaned string with its reverse
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === reversedStr;
}

// Example usage
const word = "1261";
if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
