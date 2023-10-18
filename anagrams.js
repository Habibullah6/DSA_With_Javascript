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

function sortStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anaFunc(strOne, strTwo) {
  const anaOne = sortStr(strOne);
  const anaTwo = sortStr(strTwo);
  return anaOne === anaTwo;
}

const result = anaFunc("debit card", "bad credit");
console.log(result);
