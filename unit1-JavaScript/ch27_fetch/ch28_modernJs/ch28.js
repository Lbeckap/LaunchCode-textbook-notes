// The Modern Javascript Landscape

// Vanilla Js
// JS without the use of libraries or frameworks

// Ternary Operator
// if else statments in a single line
let isTrue = true;
if (isTrue) {
  console.log('Yay! Its true');
} else {
  console.log('Not true');
}

//OR

console.log(isTrue ? 'Yay! Its true' : 'Not true');

// Spread Operator
// can be used to extract all the elements out of the array
// can make a true copy of an array not just an alias
// can provide arguments for Math.min() & Math.max()
let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = [...arr2];

console.log(arr1 === arr2); //true, because arr2 is just an alias for arr1
console.log(arr1 === arr3); //false, because arr3 is actually a whole new array in memory

let arr4 = [...arr1, 4, 5, 6];

console.log(arr4); //[1, 2, 3, 4, 5, 6]

console.log(Math.max(...arr4)); //6
console.log(Math.max(arr4)); //NaN

// Destructuring
// can create mutliple variables from an array's contents to be used separately else where
let username = ['Bob', 'middle name', 'Jones'];
let [firstName, , lastName] = username; // use a , to skip over items I don't want.
console.log(`Hello, ${firstName} ${lastName}!`);

// this also can be done on objects
let userAddress = {
  streetAddress: '12345 Main Street',
  city: 'New York',
  state: 'NY',
  zipCode: '55555',
};

const { city, state } = userAddress;
const { zipCode: zip } = userAddress; // a colon can be used to set a new name.

console.log(city); // New York
console.log(zip); // 55555



// For..Of Loop
let colors = ['red', 'blue', 'green'];

for (let color of colors) {
  console.log(color);
}

//it can iterate over a Map object
let alpha = [
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
];
let alphaMap = new Map(alpha); //create a new map

console.log(alphaMap); //shows keys and values of map

for (let [number, letter] of alphaMap) {
  //create variables
  console.log(`Letter ${number} is ${letter}`);
}



// Arrow Functions - SUPER essential
// => fat arrow operator, replaces the function keyword and goes AFTER the parameters
function addNums(a, b) {
  // a traditional function can be called from anywhere(above or below) in the scope of the defined function.
  return a + b;
}

const addNums1 = (a, b) => {
  // note the const scope. arrow function must be defined above where I intend to call it.
  return a + b;
};

//even simpler
const addNums2 = (a, b) => {
  return a + b;
};
const addNumsFinal = (a, b) => a + b;

// another example using a tenary expression
function howMove(animal, movement = 'run') {
  if (movement === 'runs') {
    console.log(`${animal} can ${movement}.`);
  } else {
    console.log(`${animal} might ${movement}.`);
  }
}

const howMove1 = (animal, movement) =>
  console.log(
    movement === 'run' ? `${animal} can ${movement}.` : `${animal} might ${movement}.`
  );

console.log(howMove1('dog', 'run'));

//using arrow functions in higher-order functions
let nums = [1, 2, 3, 4];
let squares = nums.map(num => num ** 2); //does not mutate the original array
let cubes = nums.map(num => num ** 3);

console.log(squares); // [1, 4, 5, 9, 16]
console.log(cubes); // [1, 8, 27, 64]


// Modern Import/Export Syntax
  //for a single export
//   const addNums3 = (a, b) => a + b;
//   export default addNums3; //This one goes at the end

//   //for mutilple exports
//   export const addNums4 = (a, b) => a + b;  //export goes infront of the declaration
//   export const subtractNums = (a, b) => a - b;

//   //to import these
//   import addNums3 from './add.js';
//   import { addNums4, subtractNums } from './add.js' //This uses destructuring

// JSX
  //Extending Syntax
  // JSX placeholder { }
  // does not work for declarations and mechanisms like loops


// TypeScript
  // a superset of javascript. A different languge but still compatible with JS when transpiled.
  // used with Angular 
  // sometimes used with React
  // In an array all elements must be the same type
  // use tsc filename.ts in terminal to run a Typescript file locally
  // then simply use node filename.js to run the code
  // if changes are made the file must be recompiled before running again

// Transpilation
  // Many things can be transpiled
  // Babel a traspiler used with React, it also processes JSX.