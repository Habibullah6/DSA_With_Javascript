function step(n) {
  for (let row = 1; row <= n; row++) {
    let stair = "";
    for (let column = 1; column <= n; column++) {
      if (column <= row) {
        stair += "#";
      }
    }
    console.log(stair);
  }
}

const result = step(100);
console.log(result);
