// Problem 1: Find even number from array
const numbers = [20, 405, 99, 190, 208, 40, 67, 88];
const evenNumber = numbers.filter(number => number%2==0);
console.log('Problem 1: ', evenNumber);


// Problem 2: Square roots of numbers in an array
const allNumber = [4, 9, 16, 25, 36];
const sqrtNumber = allNumber.map(number => Math.sqrt(number));
console.log('Problem 2: ', sqrtNumber);


// Problem 3: Finding students who have a grade point average above 3.5
const students = [
    { name: "Alice", grades: [90, 85, 95], gpa: 3.8 },
    { name: "Bob", grades: [70, 80, 75], gpa: 3.2 },
    { name: "Charlie", grades: [95, 90, 100], gpa: 4.0 },
    { name: "David", grades: [80, 75, 85], gpa: 3.5 },
    { name: "Emma", grades: [90, 95, 85], gpa: 3.9 }
  ];

const goodStudent = students.filter(student => student.gpa >= 3.5);
console.log('Problem 3: ', goodStudent)


// Problem 4: Calculate all marks and show me the average using reduce
const marks = [78, 80, 91, 55, 70, 83];
const inititalValue = 0;
const studentMarks = marks.reduce((sum, myElement) => {
    return sum + myElement;
}, inititalValue);
const avgMark = Math.round(studentMarks / marks.length);
console.log('Problem 4: ', avgMark);