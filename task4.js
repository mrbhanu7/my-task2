console.log("===== LEVEL 1 =====");

// Task 1: Array Basics
let arr1 = [10, 20, 30, 40, 50];
console.log("First:", arr1[0]);
console.log("Last:", arr1[arr1.length - 1]);
console.log("Length:", arr1.length);

// Task 2: Push & Pop
let arr2 = [1,2,3];
arr2.push(4,5);
arr2.pop();
console.log("Push & Pop:", arr2);

// Task 3: Includes Check
let arr3 = ["html","css","javascript","react"];
console.log("Includes javascript:", arr3.includes("javascript"));


console.log("===== LEVEL 2 =====");

let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

// Task 4: Filter Salaries
let filtered = emp.filter(e => e.salary > 20000);
console.log("Filtered:", filtered);

// Task 5: Map Names
let names = emp.map(e => e.name);
console.log("Names:", names);

// Task 6: Reduce Sum
let total = emp.reduce((sum, e) => sum + e.salary, 0);
console.log("Total Salary:", total);


console.log("===== LEVEL 3 =====");

// Task 7: Remove Duplicates
let arr4 = [1,2,2,3,4,4,5];
let unique = [...new Set(arr4)];
console.log("Unique:", unique);

// Task 8: Largest Number
let arr5 = [10, 200, 5, 90];
console.log("Max:", Math.max(...arr5));

// Task 9: Reverse String
let str1 = "hello";
let reversed = "";
for(let i = str1.length - 1; i >= 0; i--) {
  reversed += str1[i];
}
console.log("Reversed:", reversed);


console.log("===== LEVEL 4 =====");

// Task 10: Group by Salary
let emp2 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = emp2.reduce((acc, e) => {
  if(!acc[e.salary]) acc[e.salary] = [];
  acc[e.salary].push(e.name);
  return acc;
}, {});
console.log("Grouped:", grouped);

// Task 11: Flatten Array
let arr6 = [1,[2,[3,[4]]]];
function flatten(arr) {
  let result = [];
  for(let item of arr) {
    if(Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log("Flatten:", flatten(arr6));

// Task 12: Descending Sort
let arr7 = [5,2,9,1];
arr7.sort((a,b) => b - a);
console.log("Sorted Desc:", arr7);


console.log("===== BONUS =====");

// Task 13: Second Largest
let arr8 = [10, 50, 20, 40];
let sorted = [...new Set(arr8)].sort((a,b) => b - a);
console.log("Second Largest:", sorted[1]);

// Task 14: Count Characters
let str2 = "aabbccdde";
let count = {};
for(let char of str2) {
  count[char] = (count[char] || 0) + 1;
}
console.log("Character Count:", count);