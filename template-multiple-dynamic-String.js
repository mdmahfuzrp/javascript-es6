// // Old method for single line;
// let myName = 'Md Mahfuz RP';
// let age = '20';

// const summary = 'my name is ' + myName +',' + ' im ' + age + ' years old';
// console.log(summary);

// // ES6 method for single line
let myName = 'Md Mahfuz RP';
let age = '20';

const summary = `my name is ${myName}, i'm ${age} years old`;
console.log(summary);

// // Old method for multiple line
// let num1 = 20;
// let num2 = 30;

// const result = 'my first number is ' + num1 + '\n' + 'my second number is ' + num2 + '\n' + 'sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2);
// console.log(result);

// // ES6 method for multiple line
let num1 = 20;
let num2 = 30;

const result = 
`my first number is ${num1}
my second number is ${num2}
sum of ${num1} and ${num2} is ${num1+num2}`;
console.log(result);