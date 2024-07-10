let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function (n) {
    return n/2;
});

console.log(halved);


let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (n) {
    return n[0][0];
});

console.log(firstInitials);


///////Get valid input - a good peice of reusable code... If we need to get different input from the user, we can simply call getValidInput with different arguments.
//START --------------------------------------------
const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
    return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));
///END -------------------------------------------------------------------

//RECURSION
let sampleArr = ['One', 'i', 'c', 'X', 'i', 'i', 54];

function removeI(arr) {
    
    console.log(`Start recursion`);
    if (arr.indexOf('i') === -1 ){
    //return final array
    console.log(`STOP`);
    return arr;
    //end recursion
    } else {
    console.log(`Keep recursing...`);
    //remove one 'i' entry from array
    console.log(`Going to splice ${arr[arr.indexOf('i')]}`);
   
    arr.splice(arr.indexOf('i'), 1);
  
    console.log(`arr is ${arr}`);
    //call removeI function again
    return removeI(arr); 
    }
};

console.log(removeI(sampleArr));


//Another recursion example
function factorial(integer) {
    console.log(`Start recursion`);
    if (integer === 1){
    console.log(`STOP`);    
    //solve last step
    return integer;
    //end recursion
    } else {
    console.log(`Keep recursing...${integer}`);
    //call factorial function again
    return integer * (factorial(integer - 1));
    
    }
};

console.log(factorial(4));

/////////// A Lesson Learned. /////////////////////////////
//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

const minValue = function (arr) {

    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < minValue) {
        minValue = arr[i];
       }
    }
    
    return minValue;
    };
    
    //Sample arrays for testing:
    let nums1 = [5, 10, 2, 42];
    let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
    let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
    
    //Using one of the test arrays as the argument, call your function inside the console.log statement below.
    
    console.log(minValue(nums3));
    