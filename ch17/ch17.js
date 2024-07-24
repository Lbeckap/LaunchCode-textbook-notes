// Exceptions

//* execptions - are runtime errors. Erros that happen during execution
    //like ReferenceError, TypeError

//* error oject - had a name, message properties, and an entire stacktrace

//* custom error 
    /* use the new keyword
    you can then access the error later using properties native to the error object
    */

let e = new Error('A custom message!');

console.log(1, e.name); //prints "Error"
console.log(2, e.message); //prints only 'A custom message!'
console.log(3, e); //prints the e.name and e.message and the entire stacktrace like e.stack
console.log(4, e.stack);

//* throw - to raise an exeption

if (condition) {
    throw new TypeError("Height must be a number!");
}
     //Will stop the program from running 
    //throw new - must be used together
    //TypeError() - is the error type (could also be Error, or ReferenceError)
    //the error type is then passed the error message "Height must be a number!"

//* try/catch/finally - used for error handling. Allows the program to keep running even if errors are caught

try {
    //Code that may cause an error goes here
    if ( `an object contains a certain key`) {
        console.log('Yes this key exists');

    }
    else {

    let customError = new Error('This key is not valid');
    throw customError; //This line gets caught be the catch block

    }
} catch (error) { //can also be called 'e' instead of 'error'
    //This code only runs if the code in the try block throws and errr
    // I can access the error object 'error' and its properties
    //* the try/catch block keeps the program from stopping but doesn't nessecarily print the error

    console.log(error.message); //Will print the error message that was caught

} finally {
    //This is optional and will always execute. It ensures certain code will run afterward whether there was an error or not
    console.log('*** RECON PLAN CHARLIE ***');
}

//* toThrow matcher - It is possible to write a test for a thrown error using this

describe("The function name", function (){
    test("should throw an error", function () {
    expect( function() {
            checkThrow(); 
        }).toThrow(new Error('You cannot divide by zero!'));
    });
});

//* control flow - the control flow of a program is the order in which the statements are executed. 
    /*
    *An exception breaks the normal flow and stops the program. A stopped program can no longer interact with the user. Luckily JavaScript provides a way to anticipate and handle exceptions.
    */

 //* handling an exception - another way of saying "catching an exception"   


 //---------An execellent example----------------
 const input = require('readline-sync');

let animals = [{name: 'cat'}, {name: 'dog'}];
let index = Number(input.question("Enter index of animal:"));

try {
    console.log('animal at index:', animals[index].name);
} catch(err) { //This only executes if an exception is thrown
    console.log("We caught a TypeError, but our program continues to run!");
} finally { //ALWAYS runs, even if an exception in NOT thrown
    console.log("You tried to access an animal at index:", index);
}

console.log("the code goes on...");
//-------------------end------------------------

//TODO -------- STUIDO - Strategic Debugging

// Summary

// At this point, we have seen a lot of different types of errors. We have possibly created logic errors or syntax errors and now, we have just learned about the Error object in JavaScript. The goal of this studio is for us to develop strategies for debugging so that we can get rid of the bugs and get back to coding!
// Activity

// Think of a bug you have seen in your code. This could be the time you dropped a keyword when initializing a variable or misused a method.

//     Take some time to discuss with the group what your error was and how you solved it.

//     Did you talk to a TA to get it?
//     Did you find a great resource online that was helpful?

// Your TA will go over the pros and cons of different resources that can help you resolve the error. You will then go over a general strategy to start debugging your errors.
// Debugging Process

// Your TA will go over this process with you and how it could help you debug more strategically. This process reflects what we have found works best for us and many students, however, as you grow as a programmer, you may find something works better for you. That is fine! Every programmer has their own process for debugging based off of their experiences and how their mind works.

// 1  Check the stacktrace to read the error message and see where it occurred.
// 2  If you see the error, fix it on that line and recompile.
// 3  If you cannot see the error, Google the error message.
// 4  Check any relevant StackOverflow posts in the results.
// 5  If the error is related to built-in methods or objects, also search for those in the official documentation.
// 6  If the error is related to something that cannot be done in that particular language, look at the responses to each comment before trying to replicate proposed solutions. Solutions can oftentimes go out of date and responses will tell you if that is the case or simply if it is a bad solution.