// Student Data
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];


// Task 1: Print All Students
console.log("All Students:");
for(let i=0; i<students.length; i++){
 let s = students[i];
 console.log(s.id, s.name, s.mark, s.course);
}


// Task 2: Pass / Fail
console.log("\nPass / Fail:");
for(let s of students){
 if(s.mark >= 50){
  console.log(s.name + " - Pass");
 } else {
  console.log(s.name + " - Fail");
 }
}


// Task 3: Grade System
console.log("\nGrades:");
for(let s of students){
 if(s.mark >= 90){
  console.log(s.name + " - A Grade");
 } else if(s.mark >= 75){
  console.log(s.name + " - B Grade");
 } else if(s.mark >= 50){
  console.log(s.name + " - C Grade");
 } else {
  console.log(s.name + " - Fail");
 }
}


// Task 4: Topper Student
let topper = students[0];

for(let s of students){
 if(s.mark > topper.mark){
  topper = s;
 }
}

console.log("\nTopper is " + topper.name + " - " + topper.mark);


// Task 5: Course Search (React)
console.log("\nReact Student:");
for(let s of students){
 if(s.course === "React"){
  console.log(s.id, s.name, s.mark, s.course);
 }
}


// Task 6: Add New Student
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

console.log("\nAfter Adding Student:");
for(let s of students){
 console.log(s.id, s.name, s.mark, s.course);
}


// Task 7: Attendance System
let status = "present";

switch(status){
 case "present":
  console.log("\nAttendance: Welcome");
  break;
 case "absent":
  console.log("\nAttendance: Mark Absent");
  break;
 case "leave":
  console.log("\nAttendance: Approved Leave");
  break;
}


// Task 8: Login System
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
 console.log("\nLogin Success");
} else {
 console.log("\nInvalid User");
}