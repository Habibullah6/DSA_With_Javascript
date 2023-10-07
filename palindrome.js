function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  if (reverseStr.toLowerCase() === str.toLowerCase()) {
    return "this is palindrome word";
  } else {
    return "this is not palindrome";
  }
}

const output = isPalindrome("nin");
console.log(output);
