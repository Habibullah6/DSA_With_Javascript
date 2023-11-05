// function characterMap(inputString) {
//   const charMap = {};

//   for (let char of inputString.replace(/[^\w]/g, "")) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// const inputString = "Habibullah Nomani@@@!!";
// const characterFrequency = characterMap(inputString);
// console.log(characterFrequency);

// function anagramFunc(strOne, strTwo) {
//   const anaOne = characterMap(strOne);
//   const anaTwo = characterMap(strTwo);
//   console.log(anaOne, anaTwo);
//   if (Object.keys(anaOne).length !== Object.keys(anaTwo).length) {
//     return false;
//   }

//   for (let char in anaOne) {
//     if (anaOne[char] !== anaTwo[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// const result = anagramFunc("debit card", "bad credit");
// console.log(result);

// function sortStr(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// function anaFunc(strOne, strTwo) {
//   const anaOne = sortStr(strOne);
//   const anaTwo = sortStr(strTwo);
//   return anaOne === anaTwo;
// }

// const result = anaFunc("debit card", "bad credit");
// console.log(result);

// const anagram = function (s, t) {
//   const a = s.split("").sort().join("");
//   const b = t.split("").sort().join("");
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const res = anagram("res", "erdds");
// console.log(res);

function characterMap(inputString) {
  const charMap = {};

  for (let char of inputString.replace(/[^\w]/g, "")) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const one = characterMap(s);
  const two = characterMap(t);
  for (let char in one) {
    if (one[char] !== two[char]) {
      return false;
    }
  }
  return true;
}

const res = isAnagram("div", "vid");
console.log(res);
