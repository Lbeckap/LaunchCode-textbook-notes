////////// Loops

/*
        for (initial expression; loop condition; update expression) {
            loop body
        }

         for (let i = 0; i < 51; i++) {
            loop body
        }

*/

//An infinite loop - stop your program with ctrl + c in the terminal and then figure out why your program will never stop.

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

//pattern -  a commonly-used approach to solve a group of similar programming problems.

//Below is an accumulator pattern -pattern of initializing a variable to some basic, or empty value, and updating it within a loop
let n = 6;
let total = 0; //total is the accumulator AND must be initialized BEFORE the interation loop

for (let i = 1; i <= n; i++) {
   total += i;
}

console.log(total);


//the accumulator can be used to reverse a string too
let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed; //by putting the string first and the "" second , each index gets added to the BEGINNING of "" starting with b
}

console.log(reversed);

console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join(''));

//While loop - does not have intial and update expressions

/*
    while (boolean expression) {
        body
    }

*/

//Will continue as long as the expression evaluates as true

/*
    The Flow of Execution of the while loop
        1. Evaluate if the condition is true or false
        2. if false, exit the loop
        3. if true, execute the loop body then do step 1 again

*/

//*** test: Who to pronounce familyName[4]? familyName at index 4 */

// for loops can also be written as while loops

/*
     for (let i = 0; i < 51; i++) {
            loop body
        }

    OR

    let i = 0;
    while (i < 51) {
        loop body
        i++;
    }

*/

//While loos are more flexible than for loops. An example is using a while loop for input validation.

const input = require('readline-sync');

let num = input.question('Please enter a positive number:');
num = Number(num);

while (num <= 0) {
   num = input.question('Invalid input. Please enter a positive number:');
   num = Number(num);
}


// Tip: use ctrl-c to terminate an infinite loop

//The break keyword:  Will immediately terminate the execution of any loop. Execution then continues at the next line of code BELOW the loop.

/*
    for (let i = 0; i < 42; i++) {
    
        // rest of loop body

        if (i > 10) {
            break;
        }

    }

*/

//A while loop can be used with break to search for an element in an array.

let numbers = [3, 5, 42, 53];
let searchVal = 42;
let i = 0; //NOTICE the i variable is used outside the loop. We must this to be able to evalute it for the if else statement located outside the loop

while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}

//remember: the loop variable i only exists within for loops and cannot be accessed outside the loop.

//for loops - when to use? for definte iteration
    //To Iterate through a fixed set of values that can be      determined before the loop executes.

//while loops - when to use? for indefinite iteration
    //When validating user input
    //When can not determine in advance how many times the loop will iterate


/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

    for (let i = 0; i < 21; i++) {
        console.log(i);
      }
      
      //i starts at 3, i += 2 counts upward adding 2, therefore i would be 3, 5, 7, etc..
      for (let i = 3; i < 30; i+=2) {
        console.log(i);
      }
      
      //i starts at 12, i -= 2 counts downward subracting 2, therefore i would be 12, 10, 8, etc..
      for (let i = 12; i > -15; i-=2) {
          console.log(i);
      }
      
      for (let i = 50; i > 19; i--) {
        if (i % 3 === 0) {
          console.log(i);
        }
      }
      //OR Another possible way is below...
      //How to stop from printing the first iteration of 50? Maybe not possible in this syntax because the initial expression executes once before any loop interations.
      for (let i = 50; i > 19; i -= 2 + (i % 3 === 0)) {
          console.log('.',i);
      }
      