// function capitalization(str) {
//   let words = [];
//   for (let word of str.split(" ")) {
//     // console.log(word[0]);
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }

// const result = capitalization("i love bangladesh");
// console.log(result);

function capitalizationTwo(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }
  return result;
}

const output = capitalizationTwo("i am smith");
console.log(output);
