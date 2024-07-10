
// let arr = [1,2,3,4];

// if (arr.indexOf(3)) {
    
// }

//function - is a reusable, callable piece of code

//method - a function that “belongs to” an object. A method is a special type of function

//encapsulation - the process of packaging up code in a reusable way, without the programmer needing to be concerned with how it works

// function machine OR black box - 
    /*
        every function returns a value, regardless of whether or not that value is used, or is even useful.
    */

//Function call is the same as function invocation ("We are invoking a function")

//Parameters or "inputs" are passed to a function

//return values - If a function doesn’t provide an explicit return value, the special value undefined will be returned.

    /*
    The special value undefined is built into JavaScript. As with booleans, it is not a string, so undefined === "undefined" returns false.
    */
//Side effects - Calling console.log results in output to the console, which is a side effect. n some cases, calling a function results in an action that changes the state of a program outside of the function itself.

//Flexile Functions can have optional parameters

//Tip: Javascript does not allow specifying the type for parameters but TypeScript does

//Functions allow us to make our code more abstract. Abstraction is the process of taking something specific and making it more general.

//IMPORTANT 
    /*
    Now that we have return statements in our coding toolbox, we will very rarely print anything within a function.

        function sumToN(n) {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
        }

        console.log(sumToN(3));
    */

//Remember - a function without a return statement returns the special value undefined.

//Can I check for undefined.

///Boolean Functions - starts with "is" or "has"

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false; //because return terminates the function there is no need for the else clause
}

console.log(isEven(5));

//The above function can be simplified more 
function isOdd(n) {
    return n % 2 === 1; //because this is a boolean expression
}

console.log(isOdd(5));

//Using default values is a great way to keep functions from returning "undefined"

function hello(name = "World") { //name = "World" - Sets world as the deafult value
    return `Hello, ${name}!`;
}

console.log(hello()); //World is inserted if no argument is entered
console.log(hello("Lamar"));


//What does the code below output?
function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

//STEPS TO WRITING A FUNCTION
    //Step 1: Design Your Function
    //Step 2: Create the Basic Structure
    //Step 3: Write the Body

    //This phenomenon is called shadowing, based on the metaphor that a function parameter “casts it’s shadow over” a variable of the same name, effectively hiding it.

    // Function composistion - the practice of using functions to build other functions is known as function composition, or simply composition

    //Functions Should Do Exactly One Thing
    function makeSandwich( /*parameters*/ ) {
        // make the sandwich
    }
    
    function pourDrink( /*parameters*/ ) {
        // pour the drink
    }
    
    function makeLunch( /*parameters*/ ) {
        makeSandwich( /*parameters*/ );
        pourDrink( /*parameters*/ );
    }

    /// Usefull exercise below
    

console.log(makeLine(5));

function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

console.log(makeSquare(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += `\n${makeLine(size)}`; 
    } 
    return square;
}

console.log(makeRectangle(5, 3));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += `\n${makeLine(width)}`;
    }
    return rectangle;
}

console.log(makeDownwardStairs(5));

function makeDownwardStairs(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += `\n${makeLine(i + 1)}`;
    }
    return triangle;
}

console.log(makeSpaceLine(3, 5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ''
    function insertSpaces(spaceCount) {
        for (let i = 0; i < spaceCount; i++) {
            spaceLine += ' ';
        }
        return spaceLine;
    }
    insertSpaces(numSpaces);
    spaceLine += (makeLine(numChars));
    insertSpaces(numSpaces);

    return spaceLine;
}

console.log(makeIsoscelesTriangle(5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++){
        triangle += `\n${(makeSpaceLine(height - i - 1, 2*i + 1))}`;
    }
    return triangle;
}

console.log(makeDiamond(5));

function makeDiamond(height) {
   let diamond = '';
    for (let i = 0; i < height; i++){
        diamond += `\n${(makeSpaceLine(height - i - 1, 2*i + 1))}`;
    }
    diamond += `\n${diamond.split('').reverse().join('')}`;

    return diamond;
}

///exercises on quiz

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }

 console.log(reverse('Doggie'));

//  let string1 = '12345';
//  let string2 = '9999988888';
//  let code = '';

 
// for(i = 0; i < 10 ; i++){
// code += string1[i];
// code += string2[i];
// console.log(i);
// }

//  for (let i = 0; i < string1.length + string2.length; i++) {
//     code += string1[i] + string2[i];
//     console.log(i);
//  }

// console.log(code);