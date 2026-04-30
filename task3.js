

// Task 1: Student Form
function studentForm(name, age, course) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Course:", course);
}

studentForm("Naveen", 22, "MERN");


// Task 2: Calculator
function calc(a, b) {
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Multiplication:", a * b);
}

calc(10, 5);


// Task 3: Greeting
function greet(name) {
  console.log("Hello", name);
}

greet("Kamal");
greet("Praveen");
greet("Sai");





// Task 4: Square
function square(num) {
  return num * num;
}

console.log("Square:", square(5));


// Task 5: Scope
function test() {
  let secret = "javascript";
  console.log("Inside:", secret);
}

test();

// console.log(secret); ❌ Error (not accessible outside)





// Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let allItems = [...boys, ...girls];
console.log("Merged:", allItems);


// Task 7: sumAll
function sumAll(...nums) {
  let total = 0;

  for (let n of nums) {
    total += n;
  }

  console.log("Sum:", total);
}

sumAll(10, 20, 30, 40);





// Task 8: Array Destructuring
let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log("Colors:", c1, c2, c3);


// Task 9: Object Destructuring
let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA"
};

let { name, role } = emp;

console.log("Employee:", name, role);





// Task 10: Offer Generator
function* offers() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try again";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// After completion
console.log(gen.next().done ? "No more offers" : "");





// Task 11: Curry Function
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Curry Result:", add(10)(20)(30));


// Task 12: Marks Analyzer
function marks(...nums) {
  let total = 0;

  for (let n of nums) {
    total += n;
  }

  let avg = total / nums.length;

  console.log("Total =", total);
  console.log("Average =", avg);
}

marks(80, 90, 70, 60);






// Employee Registration
function register(name, role, ...skills) {
  console.log("Name:", name);
  console.log("Role:", role);
  console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");



