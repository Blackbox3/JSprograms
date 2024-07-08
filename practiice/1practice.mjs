const firstLetterCapital = (input) => {
  let inputArr1 = input.split("");
  let inputArr2 = inputArr1.map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  });
  let output = inputArr2.join("");
  return output;
};
let realInput = ["my", "name", "is"];
let realOutput = realInput.map((value, i) => {
  return firstLetterCapital(value);
});

console.log(realOutput);
