const mijnArray = [42, "Hallo", true, [1, 2, 3], { naam: "John" }];

console.log("Oorspronkelijke array:");
console.log(mijnArray);

mijnArray.push("Nieuw item");
console.log("Array na push():");
console.log(mijnArray);

mijnArray.pop();
console.log("Array na pop():");
console.log(mijnArray);

mijnArray.unshift("Eerste item");
console.log("Array na unshift():");
console.log(mijnArray);

mijnArray.shift();
console.log("Array na shift():");
console.log(mijnArray);

const index = mijnArray.indexOf("Hallo");
console.log("Index van 'Hallo' in de array: " + index);

if (index !== -1) {
  mijnArray.splice(index, 1);
  console.log("Array na splice():");
  console.log(mijnArray);
}

const kopieArray = mijnArray.slice();
console.log("Kopie van de array:");
console.log(kopieArray);
