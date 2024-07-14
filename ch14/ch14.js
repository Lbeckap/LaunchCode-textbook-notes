//Unit Testing

//* unit tests - tests the smallest components (or units) of code. These are typically individual functions.
    //start with a list of specific, clearly stated behaviors that the program should satisfy

//* regression - a bug when adding new features often causes unexpected problems in other parts of the code, potentially breaking the entire program.
    //Testing that runs quickly and consistently will let me know right away if there is an issue

//* self-documenting code - Code with a good, descriptive set of unit tests
    //A good collection of unit tests can function as a set of statements about how the program should behave.

//* unit-testing framework - a module used to test code, Jest is a popular unit testing framework

//* Jest - a npm module that can be installed and used like readline-sync
    /* A Project using Jest has several components
        1. a folder containing the tests calles tests
        2. if testing the function hello, I can call the test hello.test.js
        3. Jest should be listed in package.json as a dependency
        4. Sometimes a jest.config.js will be used. This is used to use a different configuration than the defaul

        The file structure
            - main.js
            - package.json
            - utils.js
            - tests (may also be called 'spec' or  'specs')
                - main.test.js
                - utils.test.js

    */

//* TDD - Test driven development (writing resilient code - code that will stand the test of time)

// Types of Testing
        //* Manual testing - console.log , just making sure it works before submiting right?
            // Not comprehensive - Very unlikely to catch all possible cases
            // with every change, you have to run through it all again
            // Not resilient against long-term modifications (like those made by other people)

        //* End-to-End (e2e) testing - check the user's "happy path". Make sure the user is able to get where they need to go (front-end/ client side testing).

        //* Integration testing - tests to make sure multiple units/systems are working together properly

        //* Unit testing - very granular. Testing small pieces of code like individual functions

// Produce High-Quality Code 
        //* edges cases - think through different test cases even those that are unlikely to happen.
        // anticipate errors and create code to prevent them
        // Discover problems I hadn't anticipated
        // expose regression issues


// Future-Proof Your Code with Automated Tests 
        //Be through NOW
        //It will save a ton of time and inconsistencies later
        //tests are a form of documentation


//* describe - the describe block organizes a group of specifications. A higher-order function that takes a string and anonymous function as arguments
        //* higher-order function - a function that takes one or more functions as arguments, or returns a function as its result
        /*
            describe("The addTwoNums function", function() {
                - specification 1
                - specification 2
                - etc...
            });
        */
        // a single describe block should pertain to one specific function, data structure, class etc. (3 functions = 3 describe blocks)

//* test - a test block is the specification, nested inside the describe block. Also a higher-order function that takes a string and an anonymous function
        //The string should be spcific and a continuation to the string in the describe block ex: The addTwoNums function "returns the sum of 2 numbers".
        /*
            describe("The addTwoNums function", function() {
               test("returns the sums of 2 numbers", function () {
                    - expectation 1
                    - expectation 2
                    - etc...
               });
                - specification 2
                - etc...
            });
        */

//* expectation - a statement that compares your code's actual output to the value I expect. An expectation will return either true(pass) or false(fail).
    /*
        describe("The addTwoNums function", function() {
               test("returns the sums of 2 numbers", function () {
                    expect( ).toEqual();  //expect() is my code, .toEqual() is the matcher
                    expect( ).toEqual( );
                    - etc...
               });
                - specification 2
                - etc...
            });
    */


function addTwoNums (n1, n2) {return n1 + n2}

describe("The addTwoNums function", function () {
    test("returns the sums of 2 numbers", function () {
        expect(addTwoNums(2, 5)).toEqual(7);      //test 1
        expect(addTwoNums(-35, 9)).toEqual(-26);  //test 2
      });
 });

//* .not - used to negate a matcher 
    //expect("abc").not.toEqual("xyz");     //returns true
    //expect([1, 2, 3]).not.toContain(4);   //returns true

// Randomization and Unit Tests
    // Running the test in random order ensures that each specification is being me on its own merit, but
        // Jest does not randomize by default
        //* a jest.config.js file can be added, with the value of randomize set to true

            const config = {
                randomize: true
            };

            module.exports = config;

    //If test pass sometimes but fails at other times when running several times in a row, I need to address the scope of the test data to make the tests stable
        //* beforeEach() - to reset my test data before each spec
            let nums; //declare the variable in scope
            beforeEach (function () {
                nums = [5, 6, 7]; //test data is reset each time
            });

            describe("The function name", function (){
                test("adds an element to the array", function () {
                    nums.push(8);
                    expect(nums).toContain(8); 
                    expect(nums.length).toEqual(4);
                });
            });

//? Textbook -> Ch14 -> Hello, Jest! -> Check your understandin gquestion the bottom. Which of the followin tests check if the function properly handles case sensitive answers? I was thinking 1 but 2 looked to be a good answer too

// Example
/*     
    function reverse(str) {
      return str.split('').reverse().join('');
   }

   function isPalindrome(str) {
      return reverse(str) === str;
   }

   module.exports = isPalindrome;
*/

   // Now we go to palindrome.test.js
   const isPalindrome = require('../palindrome.js');

   describe("isPalindrome", function(){

      test("should return true for a single letter", function() {
         expect(isPalindrome("a")).toBe(true);
      });

      test("should return true for a single letter repeated", function() {
         expect(isPalindrome("aaa")).toBe(true);
      });

      test("should return true for a simple palindrome", function() {
         expect(isPalindrome("aba")).toBe(true);
      });

      test("should return true for a longer palindrome", function() {
         expect(isPalindrome("racecar")).toBe(true);
      });

    //-------------testing for negative cases---------------/ 

      test("should return false for a longer non-palindrome", function() {
        expect(isPalindrome("launchcode")).toBe(false);
     });
  
     test("should return false for a simple non-palindrome", function() {
        expect(isPalindrome("ab")).toBe(false);
     });
  
     test("should be case-sensitive", function() {
        expect(isPalindrome("abA")).toBe(false);
     });
  
     test("should consider whitespace", function() {
        expect(isPalindrome("so many dynamos")).toBe(false);
     });

     //----------------testing for edge case--------------/

     test("should consider the empty string a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
     });

   });


   //* The red, green, refactor mantra - the process of writing tests(red), seeing them pass(green), then making the code better(refactor)