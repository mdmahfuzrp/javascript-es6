// regular function
function regular(num1, num2){
    return num1 + num2;
}
const regularResult = regular(10, 20);
console.log(regularResult);

// Anonymouse function
const anonymouse = function(num1, num2){
    return num1 + num2;
}
const anonymouseResult = anonymouse(20, 30);
console.log(anonymouseResult);

// Arrow function
const arrowFunction = (num1, num2) => num1 + num2;
const arrowResult = arrowFunction(50, 50);
console.log(arrowResult);

// More arrow function
const moreArrow = (num1, num2, num3) => {
    const total = num1 + num2 + num3;
    const result = total / 2;
    return result;
}
const moreArrowResult = moreArrow(10, 50, 20);
console.log(moreArrowResult);