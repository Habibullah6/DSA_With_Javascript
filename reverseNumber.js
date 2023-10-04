function reverseNumber(number) {
  const isNegative = number < 0;
  const reversedNumber = parseInt(
    Math.abs(number).toString().split("").reverse().join("")
  );

  return isNegative ? -reversedNumber : reversedNumber;
}

const inputNumber = parseInt(-30);
const reversedNumber = reverseNumber(inputNumber);
console.log("Reversed number:", reversedNumber);
