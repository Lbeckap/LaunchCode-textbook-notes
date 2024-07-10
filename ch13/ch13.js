//! error or warning
//* important things and terms to remember
//? questions
// normal comment
//TODO 
//// Delete these comments or DONE

//Chapter 13 - Modules

//* Modules - allow us to keep the features of our program in separate, smaller pieces. keep us from reinventing the wheel.
    //We code these smaller chunks and then connect the modules together to create the big project.
    //if we design our quiz module in a generic way, then we can use that same module in other programs.
    //someone in the coding community might already have modules that we can immediately incorporate into our own project
    //readline -sync - just like this module. We don't need all the code behind how readline-sync works, we just need to be able to pull it into our projects and use its functions.

//* require - command to import modules
    const input = require('readline-sync'); //imports the readline-sync module and assigns its functions to the input variable
    let name = input.question("What is your name?"); //dot notation is used to call the question function stored in the, mutliple function, readline-sync module.
    console.log(`Hello, ${name}`);

//* Single function module - return a variable. use the variable name to call that function

//* Multiple function module - returns an object. use dot notation to call the functions stored in the object 

//Modules come from three places
    //*Node knows where to look based on the string passed into require().
    //1. A local file on my computer
    //2. Node itself, known as Core modules
    //3. An external registry such as NPM

//? What is Node? It depends on the circumstance.
    //The DOM (Document Object Model) is an API (Application Programming Interface) and has a Node interface, an abstract base class upon which many other DOM API objects are based.

//? What is Node.js?
    //Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript.

    //npm(node package manager) - used to download, configure and create packages for use in Node.js projects. Downloaded packages can be imported by ES imports and CommonJS require().

    //CommonJS can be recognized by the use of the require() function and module.exports, while ES modules use import and export statements for similar (though not identical) functionality.

//* Tip - keep local modules either in the same folder as your project or only one level from your project.
    /*
        ./   tells Node to search current folder
        ../  tells Node to search the folder one level UP from the current project
    */

        //The module is in the same folder
        const hello = require('./hello.js');

        //The module is one level up
        const hello = require('../hello.js');

        //The module is one level down
        const hello = require('./Projects/myCoolApp.js');

//* If the file name does not have ./ or ../ Node will instead look for a Core module first then for a module installed from an external source like npm.

//* Package.json - list of all modules imported into the project (usually under "dependencies")

//* NPM - node package manager. A tool for finding and installing Node modules. NPM has two major parts: a registry of modules & command line tools to install modules

//* package - Every Node.js file is treated as a module (also called a package).

/* EXPORTING MODULES
Insert the code below into the bottom of the js file contain the function I want to export
*   module.exports = isPalindrome;
    Makes the isPalidrome function avaiable to other files.

*   module.exports = {
*   isPalindrome: isPalindrome,
*   evenOrOdd: evenOrOdd,
*   randomArrayElement: randomArrayElement
*   }
    Used to export multiple functions where the key is the function name and the value is the function itself

Import the modules exported from practiceExports.js below:

 *   const palindromeCheck = require('./practiceExports'); //pull the function in and assign it to a variable

    console.log(typeof palindromeCheck); //returns function.
    console.log(palindromeCheck('that'));
    console.log(palindromeCheck('radar'));

*/

//* Each module should focus on a single idea and contain only a few related functions. 

//* A module titled cleverLC101Work is not nearly as helpful as one called arraySortingMethods.


// ---------- Code with Carrie Notes --------
/*
*   module - a single file with exported code
*   package - a group of modules (and/or smaller packages)
*   library - blanket term for reusable code but generally refers to packages that have been published for others to use(React is a library)
*   dependency - a library or package that have been installed in my application/project

Single Item Export
*   export -
        module.exports = getFullName; (used to export a single item. Can be use when there is only one item, variable or function, that needs exporting. This is essentilly an anonymous export which can be called anything when importing)
*   import - 
        const getFN = require("./common.js");
        console.log(getGN(fn, ln));

Mutiple Item Export
*   export -    
        module.exports = {
            formatSSN: formatSSN, (Here I did not change the function name)
            formatPhone: formatPhoneNumber (the key, on the left, can be changed if I want to rename(use a key alias) on the import. The value, on the right, MUST be the original defined function name)
        }
*   import -
        const formats = require('./formats.js');
        console.log(`Phone: ${formats.formatPhone()}`);
        console.log(`SSN: ${formats.formatSSN()}`);
*/

