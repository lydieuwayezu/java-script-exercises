let productCategories = ["Electronics", "Books", "Clothes", "Shoes", "Food"];

console.log("First:", productCategories[0]);
console.log("Last:", productCategories[productCategories.length - 1]);
console.log("Total:", productCategories.length);

productCategories[1] = "Stationery";
console.log("Modified array:", productCategories);







let inventory = [10, 20, 30];
console.log(inventory);

inventory.push(40);
console.log("After push:", inventory);

inventory.pop();
console.log("After pop:", inventory);

inventory.unshift(0);
console.log("After unshift:", inventory);

inventory.shift();
console.log("After shift:", inventory);

inventory.splice(1, 1, 25, 35);
console.log("After splice:", inventory);






let originalScores = [90, 85, 78];
let referenceCopy = originalScores;

referenceCopy[0] = 100;
console.log("Original:", originalScores);
console.log("Reference:", referenceCopy);


let spreadCopy = [...originalScores];
spreadCopy[2] = 50;

console.log("Original:", originalScores);
console.log("Spread copy:", spreadCopy);




let studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];

console.log(studentNames.indexOf("Alice"));
console.log(studentNames.lastIndexOf("Alice"));
console.log(studentNames.includes("Charlie"));
console.log(studentNames.includes("Eve"));






let products = [
  {id:1, name:"Laptop", price:1200},
  {id:2, name:"Mouse", price:25},
  {id:3, name:"Keyboard", price:75}
];

let found = products.find(p => p.id === 2);
console.log(found);

let index = products.findIndex(p => p.price > 1000);
console.log(index);








