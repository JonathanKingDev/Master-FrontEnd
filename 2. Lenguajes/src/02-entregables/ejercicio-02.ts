console.log("************** DELIVERABLE 02 *********************");

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const concat = (a, b) => {
  return [...a, ...b];
};

console.log(concat(firstArray, secondArray));
