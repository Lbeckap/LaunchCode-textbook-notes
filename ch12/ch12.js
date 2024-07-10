//! error or warning
//* important things and terms to remember
//? questions
// normal comment
//TODO 
//// Delete these comments or DONE


// Chapter 12

//* objects - data structures that can hold many values

//* key - for reference purposes
    //? When defining an object, keys can only be valid JavaScript strings? What does this mean?
    //A key can have spaces(must be wrapped in quotes) "current favorite color": "blue",
    //A key can be a number, but just like if it had spaces it can only be accessed using bracket notation

//* key/value pair - the pairing between a key and its value

//* object literal - when definining an object
    /*    
        let objectName = {
            key1: value1,
            key2: value2,
            key3: value3,
            key4: function() {
                function body
                return;
            },
            .
        };
     */
        //*Spaces and tabs are very important!!

//* property (of an object) - is the key/value pair. The property name is the key and the property's value is the data assigned to that key

//* method (of an object) - a property that stores a function, and performs an action on the object
    //* Don't forget the return keyword in the function

//* this - keyword used to call an object's name from within the object itself
    
//Two ways to access an object's property is using Bracket Syntax and Dot Notation

//* mutatble - the data structure can be modified without making a copy

//When changes are made to an object a copy is NOT made but instead the original object is modified

//New properies can be added at anytime using brackey syntax
    //? Can new properties also be added with dot notation?

//* Storing by reference - it is stored based on its location in memory. 
    //* Objects are stored by reference. The objects them selves cannot be compared for equality but their properties can.

    let tortoiseOne = {
        species: "Galapagos Tortoise",
        diet: ["pumpkins", "lettuce", "cabbage"]
     };
  
     let tortoiseTwo = {
        species: "Galapagos Tortoise",
        diet: ["pumpkins", "lettuce", "cabbage"]
     };
  
     console.log(tortoiseOne === tortoiseTwo); //returns false
     console.log(tortoiseOne.species === tortoiseTwo.species); //returns true

//* for...in loop - loops through the properties of an object. Loops stops once it has accessed every property.

    let giraffe = {
        species: "Reticulated Giraffe",
        name: "Cynthia",
        weight: 1500,
        age: 15,
        diet: ["leaves", "small leaves", "tall leaves"],
        family: {
            son: "Charlie",
            daughter: "Catherine"
        }
    };

    for (item in giraffe) { //* item - a varible that holds the string for each key. It is updated with each iteration
        console.log(item + ", " + giraffe[item]); //* NOTE - only bracket syntax can be used in for..in loops when accessing the VALUE of the key
    }

//To access a property with an array as a value
    console.log(giraffe.diet[1]); //Prints small leaves
    //To loop through a property that is an array
    for (let i = 0; i < giraffe.diet.length; i++) {
        console.log(`The key is ${giraffe.diet}, The value is ${giraffe.diet[i]}`);
    }
    //? How to print only the key?
    console.log(Object.keys(giraffe)[4]);  //This returns the key, diet
    //? Can I use this to rename diet?
    Object.keys(giraffe)[4] = "favorite food"; //This doesn't work
    console.log(Object.keys(giraffe)[4]); //This STILL returns the key, diet 

//To access a property with an object as a value
    console.log(giraffe.family.son); //Prints Charlie
    //To loop through a property that is an object
    for (property in giraffe.family) {
        console.log(`The key is ${property}, The value is ${giraffe.family[property]}`);
    }

//Objects can be passed into functions and also be the return value of a function
    let giraffe1 = {
        species: "Reticulated Giraffe",
        name: "Cynthia",
        weight: 1500,
        age: 15,
        diet: ["leaves", "small leaves", "tall leaves"]
    };

    function birthday(animal) {
        animal.age = animal.age + 1; //looks at the age property ALSO CALLED key/value pair and changes 
        //? How to update just the key or would I justd delete the old property and add a new one?
        console.log(`animal.age`,animal.age); //16
        console.log(`this.age`,this.age); //undefined
        console.log(`Animal: `, animal); //entire object
        console.log(`animal["age"]`, animal["age"]); //16

        return animal; //returns the entire object
    }

    console.log(giraffe1.age); //returns 15
    birthday(giraffe1); //pass in the entire object
    console.log(giraffe1.age); //returns 16

//* Math - an immutable built-in JavaScript Object
    //We do not need to create a variable to store pi. The Math object does it.
    console.log(Math.PI);
    console.log(Math.PI*4);
    console.log(Math.PI + Math.PI);

//* Math.random() - generate a random decimal between 0 and 1 Not including 1
    //The code below can be used to generate a random array index.
    function randomSelection(arr){
        let index = Math.floor(Math.random()*arr.length);
        return arr[index];
      }

      let furryFriends = ['cat', 'dog', 'seal', 'fox', 'chipmonk'];

      console.log(randomSelection(furryFriends));

// ceil, floor and round all take a decimal value and return an integer. The values entered can be creatively adjusted to round to certain decimal places.
      let number = 556.789123
      console.log(Math.round(number * 10) / 10); //rounds to 556.8
      console.log(Math.round(number * 100) / 100); //rounds to 556.79
      console.log(Math.round(number * 1000) / 1000); //rounds to 556.789

//Math.max() and Math.min() look at each individual intgeter and cannot evalute an array without using the spread opperator ...

      let arryofNums = [23, 44, 1, 6, 405, 67];
      console.log(Math.max(arryofNums)); // Prints NaN
      console.log(Math.max(...arryofNums)); //Prints 405

      let a = 56;
      let b = 45;
      console.log(Math.max(a, b)); //Prints 56
