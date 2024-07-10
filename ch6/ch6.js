// -------------- What is Debugging?
/*
    Debugging - The process of tracking down errors in a program.
*/

//--------------- Categories of Errors
/*
    There are two stages of execution: Parsing and Execution
    parsing - before the code is run it is validated and prepared for execution. The syntax is verified.
    execution - when all the actions written in the code are actually carried out.

    syntax error - violation of th formal rules for a given language
    runtime error - do not apear until the program runs. Also called exceptions.
        Common error is tryging to use a variable that has not been created yet

    logic error - the program runs successfully but does not behave as expected
*/

//--------------- Diagnosing Error Messages

//--------------- Error Types
/*
     error type - the classification that JavaScript uses to group errors based on their cause. Also called a built-in object.
     Other error types: 

        TypeError - Occurs when trying to use a value in an invalid way.
            1(); - TypeError: 1 is not a function

        RangeError - Occurs when passing an invalid value to a function.
            let nums = Array(-1); - RangeError: Invalid array length

        URIError - ‘URI’ = Uniform Resource Identifier. Occurs when improperly using a global URI-handling function. 
            decodeURI('%');

        Error - 	Manually triggers an error with the given message.
            throw Error("Something bad happened!");
*/

//-------------- Debugging Logic Errors
/*  
    Use typeof and console.log
        Remember to remove all debugging console.logs when done
*/
//-------------- How to Avoid Debugging
/*
    Start small - Begin coding one very small part—even if that’s just 2 lines of code. Then make sure the program runs properly before adding the next small part.

    Keep it working - keep adding small pieces to the program, one at a time, it is much easier to figure out what went wrong.
        New mantra, “Get something working and keep it working.”
 */

//-------------- Asking Good Questions
/*
    What is the problem with your code?
        Good: “There is a ReferenceError on line 23, but it’s not clear to me what’s causing it.”

    What have you done to try to address the problem?
        Good: “I added user input validation, but I am still seeing the problem.”

    Where have you looked for an answer?
        Good: “I Googled ‘js range error boolean expression’ and found a question on Stack Overflow that seemed relevant. I tried the recommended solution, but it didn’t fix my problem.”
*/

//-------------- Excercises: Debugging

//-------------- Next Steps: Read additional two sources and jot down anything noteworthy