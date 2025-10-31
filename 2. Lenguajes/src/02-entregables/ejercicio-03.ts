console.log("************** DELIVERABLE 03 *********************");

console.log("----- Clone -----");

const Developer = {
  name: "Javi",
  age: 23,
  skills: ["JavaScript", "TypeScript", "React"],
};

function clone(source) {
  return { ...source };
}

const DeveloperClone = clone(Developer);

console.log(Developer);

console.log("--- Merge ---");

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return { ...target, ...source };
}

const merged = merge(a, b);
console.log(merged);
