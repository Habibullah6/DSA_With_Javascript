function maxChar(str) {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }

  return {
    maxChar,
    maxCount,
  };
}

const max = maxChar("I love my Bangladesh");
console.log(max.maxChar);
console.log(max.maxCount);
