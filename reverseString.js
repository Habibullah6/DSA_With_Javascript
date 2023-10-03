// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);
// console.log(reversedString);

// function reverseString(str) {
//   let reversed = "";
//   for (let item of str) {
//     reversed = item + reversed;
//   }
//   return reversed;
// }

// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);
// console.log(reversedString);

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);
// console.log(reversedString);

function reverseString(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

// Example usage
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
