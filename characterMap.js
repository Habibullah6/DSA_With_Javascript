function createCharacterMap(inputString) {
  const charMap = {};

  for (let char of inputString.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

const inputString = "Habibullah Nomani";
const characterFrequency = createCharacterMap(inputString);

console.log(characterFrequency);
