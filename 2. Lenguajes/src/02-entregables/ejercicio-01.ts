console.log("************** DELIVERABLE 01 *********************");

// 1. Array operations
console.log("---- Head ----");

const head = <T>([first]: T[]): T | undefined => {
  console.log(first);
  return;
};

head([1, 2, 3]);
head(["a", "b", "c"]);

console.log("---- Tail ----");

const tail = <T>([_, ...rest]: T[]): T[] => {
  console.log(rest);
  return;
};

tail([1, 2, 3]);
tail(["a", "b", "c"]);

console.log("---- Init ----");

const init = <T>(array: T[]): T[] => {
  const result = array.slice(0, -1);
  console.log(result);
  return;
};

init([1, 2, 3]);
init(["a", "b", "c"]);

console.log("---- Last ----");

const last = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log(last([1, 2, 3]));
console.log(last(["a", "b", "c"]));
