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








let userAges = [18, 24, 33, 16, 40];

console.log(userAges.some(age => age < 18));
console.log(userAges.every(age => age >= 18));
console.log(userAges.some(age => age % 5 === 0));









let dataPoints = [42, 10, 500, 2, 77];

let asc = [...dataPoints].sort((a,b)=>a-b);
console.log("Ascending:", asc);

let desc = [...dataPoints].sort((a,b)=>b-a);
console.log("Descending:", desc);

let reversed = [...dataPoints].reverse();
console.log("Reversed:", reversed);







let arr1 = ["A","B"];
let arr2 = ["C","D"];
let sentenceParts = ["Hello","world","this","is","great"];

let combined = arr1.concat(arr2);
console.log(combined);

console.log(sentenceParts.join(" "));

console.log(sentenceParts.slice(1,4));








let nestedList = [1,[2,3],[4,[5,6]],7];

console.log(nestedList.flat());
console.log(nestedList.flat(Infinity));




let pricesUSD = [10.50, 20.00, 5.25];

let local = pricesUSD.map(p => p * 1.3);
console.log(local);

let strings = pricesUSD.map(p => `Item price: $${p.toFixed(2)}`);
console.log(strings);





let testScores = [45, 78, 92, 30, 65, 88];

let passing = testScores.filter(s => s >= 70);
console.log(passing);

let avg = testScores.reduce((a,b)=>a+b,0)/testScores.length;
let belowAvg = testScores.filter(s => s < avg);
console.log("Average:", avg);
console.log("Below avg:", belowAvg);




let total = pricesUSD.reduce((sum,p)=>sum+p,0);
console.log("Total:", total);

let max = pricesUSD.reduce((m,p)=> p>m?p:m);
console.log("Max:", max);

let count = pricesUSD.reduce((c,p)=> p>15?c+1:c,0);
console.log("Count >15:", count);





let users = [
  {name:"Zoe", age:30},
  {name:"Adam", age:25},
  {name:"Charlie", age:30}
];

users.sort((a,b)=>a.age-b.age);
console.log(users);

users.sort((a,b)=>{
  if(a.age===b.age) return a.name.localeCompare(b.name);
  return a.age-b.age;
});
console.log(users);




let names = users.map(u => u.name);
console.log(names);

let older = users.filter(u => u.age > 28);
console.log(older);











