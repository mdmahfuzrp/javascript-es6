// The output is 950 and it's working
const bigNumber = Math.max(20,30,950,40);
console.log(bigNumber);

// // Because this is a array not that's why the output is NaN
// const numbers = [20, 30, 40, 100, 21, 99, 1083];
// const largestNumber = Math.max(numbers);
// console.log(largestNumber);

// numbers is array but it's still working
// Because if you use (...) spread operator then array not just array
//it's recived only number from array
const numbers = [30, 109, 21];
const largestNumber = Math.max(...numbers);
console.log(largestNumber);

const numbers2 = [...numbers];
const numbers3 = numbers;
numbers.push(222);
numbers2.push(999);
console.log(numbers2);
console.log(numbers3);
console.log(numbers);