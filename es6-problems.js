// Problems 1: write an arrow function that will take 3
// parameters, will multiply the parameters and will
// return the result.
const problem1 = (num1, num2, num3) => num1*num2*num3;
const result = problem1(20, 10, 20);
console.log(`Problems 1: ${result}`);

// Problems 2: write the following sentence in three lines
// and print the result:
// "Iam a web developer. I love to code. I love to eat biriyani."
const problem2 = `Problem 2:
Iam a web developer.
I love to code.
I love to eat biriyani.`;
console.log(problem2);

// Problems 3: Write an arrow function that will take 2 parameters:
// One parameter will come from you and the other parameter will be a
// default parameter. Add these two parameter and return the result.
const problem3 = (num1, num2 = 10) => num1 + num2;
const sum = problem3(10);
console.log(`Problems 3: ${sum}`);

// Problems 4: Writ an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name
// of your friends
// b) Check if the length of each element is even, push elements with
// even length to a new array and return the result
const problem4 = (friends)=>{
    const newArrayFriend = [];
    for(let i = 0; i<friends.length; i++){
        const friendsName = friends[i];
        if(friendsName.length % 2 == 0){
            newArrayFriend.push(friendsName);
        }
    }
    return newArrayFriend;
}
const evenFriend = problem4(['mahfuz', 'maruf', 'rahat', 'raihan']);
console.log(`Problems 4: ${evenFriend}`);

// Problems 5: Write an arrow function where it will do the following:
// a) Square each array Element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
const problem5 = (marks)=>{
    let sum = 0;
    for(let i=0; i<marks.length; i++){
        sum += marks[i];
    }
    return sum/marks.length;
}
const avgMark = problem5([20,40,50,30]);
console.log(`Problems 5: ${avgMark}`);

// Problems 6: Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result
const problem6 = (firstArray, secondArray)=>{
    const newArray = [...firstArray, ...secondArray];
    const maxNumber = Math.max(...newArray);
    return maxNumber;
}
const maxNumber = problem6([10, 20], [30, 40]);
console.log(`Problems 6: ${maxNumber}`);

