function createCharacterMap(inputString) {
  const charMap = {};

  for (let char of inputString.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function repeatedChar(str) {
  const charObj = createCharacterMap(str);
  for (let char in charObj) {
    if (charObj[char] > 1) {
      return true;
    }
  }

  return false;
}

const result = repeatedChar("git");
console.log(result);
