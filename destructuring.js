// Old method to get a property and value from object
const student = {
    name: 'Mahfuz',
    roll: 190001,
    dept: 'Computer',
    address: 'Barishal, Bangladesh'
}
const address = student.address;
console.log(address);

// ES6 method to get a property and value from object
const student2 = {
    semester: '7th',
    grade: 'A+',
    college: 'Infra Polytechnic Institute',
    marks: 680
}
const {marks, grade, college} = student2;
console.log(marks, grade, college);

// Destructuring in Array
const mahfuz = ['Md Mahfuz RP', 190001, 'Computer'];
const [myName, roll, dept] = mahfuz;
console.log(myName, roll, dept);

// Destructuring in Array using function
function myMarks(){
    return [98, 95]
}
const [bangla, english] = myMarks();
console.log(english, bangla);