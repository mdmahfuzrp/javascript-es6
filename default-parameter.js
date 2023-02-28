// Old method
function add(firsValue, secondValue){
    // secondValue = secondValue || 0; // parameter is undifined or not
    const sum = firsValue + secondValue;
    return sum;
}
const result = add(10); //Output - NaN, because this is old method
// const result = add(10, 20); //Output - 30
// const result = add(10); //Output - 10
console.log(result);


// ES6 method
function calculate(firsValue, secondValue = 0){
    const sum = firsValue + secondValue;
    return sum;
}
const myResult = calculate(10); //Output - 10 because default value = 0
// const myResult = calculate(10, 20); //Output - 30
console.log(myResult);


// ES6 method for string
function concatString(first, second = 'default'){
    const concatNow = first + second;
    return concatNow;
}
// const concatResult = concatString('my name is '); // Output - my name is undefined
const concatResult = concatString('my name is '); // Output - my name is default
// const concatResult = concatString('my name is ', 'Md Mahfuz RP'); // Output - my name is Md Mahfuz RP
console.log(concatResult);