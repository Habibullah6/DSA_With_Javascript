// Big O(n)^2 example

function multipleArray(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    console.log("i=", i);
    for (let j = 1; j <= n; j++) {
      console.log("j=", j);
      total++;
    }
  }

  return total;
}

const result = multipleArray(5);
console.log(result);
