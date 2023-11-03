// function isPalindrome(str) {
//   const reverseStr = str.split("").reverse().join("");
//   if (reverseStr.toLowerCase() === str.toLowerCase()) {
//     return "this is palindrome word";
//   } else {
//     return "this is not palindrome";
//   }
// }
// const output = isPalindrome("nin");
// console.log(output);

function isPalindrome(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse("").join("");
}

const res = isPalindrome(13);
console.log("====================================");
console.log(res);
console.log("====================================");
