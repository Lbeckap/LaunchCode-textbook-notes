// Exceptions

//* execptions - are ru ntime errors. Erros that happen during execution
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