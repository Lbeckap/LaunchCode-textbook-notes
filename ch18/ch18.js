// Ch18 - Classes
/* Objectives
    1. Create and instantiate classes
    2. Use inheritance to share behavior and data
*/

//* class - allows us to set up the general structure for an object. Then reuse that structure to build multiple objects.
    // They have the SAME keys but can have DIFFERENT values

//* class keyword - used to define a new class

class ClassName { // The first letter is capital (PascalCase)
    constructor(parameters) {
       // assign properties
    }
    // define methods
 }

 //* constructor keyword - a special method for creating objects of the same type, and it assigns the key/value pairs.
    // Parameters are passed into constructor rather than the class declaration.

class Astronaut {
   constructor(name, age, mass = 15) {
      this.name = name;  // this.key = value
      this.age = age;
      this.mass = mass;
   }
}

//* new - creates an instance of the class, which means that the object generated shares the same set of keys as every other object made from the class

let fox = new Astronaut('Fox', 7, 12); //* Calling the class
let hippo = new Astronaut('Hippo', 25, 1500);

console.log(typeof hippo, typeof fox);

hippo.color = 'brown';
console.log(hippo, fox);

//? Is it possible to add a property to the Astronaut class without directly changing it? Why would I want to? I can just type it in directly to keep it simple.

// What if only name and age are used when creating a new instance of the Astronaut class
let wolf = new Astronaut('wolf', 4);
console.log(wolf); // prints Astronaut { name: 'wolf', age: 4, mass: undefined }

//* default value - To avoid issues with missing arguments.

// added the default value "mass = 4"
console.log(wolf); // NOW prints Astronaut { name: 'wolf', age: 4, mass: 15 }

//------------------Assigning Class Methods

//* Inside Or Outisde the contructor
//* if a method is the same for ALL objects of a class, define that method outside of the constructor.

// Here we assign the method inside the constructor
class AstronautI {
    constructor(name, age, mass){
       this.name = name;
       this.age = age;
       this.mass = mass;
       this.reportStats = function() {
          let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
          return stats;
       }
    }
 }
 
 // Here we assign the method outside of the constructor
 class AstronautO {
    constructor(name, age, mass){
       this.name = name;
       this.age = age;
       this.mass = mass;
    }
 
    reportStats() {
       let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
       return stats;
    }
 }
 
 let foxy = new AstronautI('Fox', 7, 12);
 let hippoy = new AstronautO('Hippo', 25, 1000);
 
 console.log(foxy);
 console.log(hippoy);

 //To access the method outside the constructor
 console.log(hippoy.reportStats());


 //------------------Inheritance
 
 //OOP - four principles: abstraction, polymorphism, encapsulation, and inheritance.

 //* inheritance - the ability of one class to acquire properties and methods from another.

 //* child classes - the classes inheriting properties and methods

 //* parent classes - the classes passing down properties and methods

 //* extends keyword - used when designating a class as the child class of another
    //* NOT supported in Internet Explorer

 //* super() constructor - used to get the properties and methods needed from the parent class.
/*
 class ChildClass extends ParentClass {
    constructor () { //must have the same paramentes as the parent
       super(); //must have the same parameters as the parent
        properties go here....
    }
 }
*/
 //---- Example ----

 class Felidae {
    constructor() {
       this.claws = "retractable";
    }
 }
 
 class Panthera extends Felidae {
    constructor() {
       super();
       this.roar = "loud";
    }
 }
 
 class Tiger extends Panthera {
    constructor() {
       super();
       this.hasStripes = "true";
    }
 }
 
 let tigger = new Tiger();
 
 console.log(tigger);


//Notes from Video


function Animal(species) {
   this.species = species;
   this.eats = true;
}

Animal.prototype.walks = function () { //The prototype is where inheritable props and methods are
   return `A ${this.species} is walking.`;
};

const Bear = new Animal('bear');

console.log(Bear.species);
console.log(Bear.walks());
console.log(Object.getPrototypeOf(Bear));
console.log(Object.getPrototypeOf(Bear) === Animal.prototype); //true - because Bear has inherited the entire prototype of Animal