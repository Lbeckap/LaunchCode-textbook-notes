console.log('1', Boolean("true"), typeof Boolean("true"));
console.log('2', Boolean("TRUE"), typeof Boolean("TRUE"));
console.log('3', Boolean(0), typeof Boolean(0));
console.log('4', Boolean(1), typeof Boolean(1));
console.log('5 no whitespace', Boolean(''), typeof Boolean(''));
console.log('6', Boolean('LaunchCode'), typeof Boolean('LaunchCode'));
console.log('7 whitespace', Boolean(' '), typeof Boolean(' '));


console.log(5 == 5);
console.log(5 == 6);

console.log(true == "true");

/*Boolean converts a string to 'true' whenever a string is non-empty 
*/

// Strict Equality  using === compares two operands without converting their data types 

// ----------------- Logical Operators---------------
/* + is the string operator
   += compound assignment operators
   -= compound assignment operators
   < > ===  boolean operators return only true and false

   compound boolean expressions is && and || 
*/
console.log('Logical Operators');
console.log(7 > 5 && 5 > 3);
console.log(7 > 5 && 2 > 3);
console.log(2 > 3 && 'dog' === 'cat');

// NOT operator ! , reverses its boolean value (sometimes called a bang)
console.log('!true', !true);
console.log('!false', !false);

//Operator Precedence are rules that dictate the order operators are applied. ! is always applied first.
// exponention ** second
// * / % third
// + - fourth
// < > fifth
// === sixth
// && seventh
// || eigth

console.log(1 + 5 % 3);

// ------------------ Conditionals-----------------------

let billHasBeenPaid = true;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
} else {
   console.log("Your bill has been paid.");
}

let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}


// ---------------- Nested Conditionals------------------

let num = 0;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}

// --------------- Exercises: Booleans and Conditionals---------

/* Completed in LaunchCode folder
File path: C:\Users\Lo Ri\Desktop\LaunchCode\javascript-projects\booleans-and-conditionals\exercises
*/

// ---------------- Studio: Shuttle Launch------------------

console.log('___________Studio: Shuttle Launch__________\n\n');

let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = true;
let launchSequenceMsg = 'All systems are go! Initiating space shuttle launch sequence.\n';
let launchDetailMsg = `Date: ${date}\n Time: ${time}\n Astronaut Count: ${astronautCount}\n Crew Mass: ${crewMassKg} kg\n Fuel Mass: ${fuelMassKg} kg\n Shuttle Mass: ${shuttleMassKg} kg\n Total Mass: ${totalMassKg} kg\n Fuel Temperature: ${fuelTempCelsius} C\n Weather Status: ${weatherStatus}\n`;
let byeMsg = 'Have a safe trip astronauts!';
let dashes = '--------------------------------------\n';
let terminateMsg = 'Required conditions NOT met! Launch operations terminated.\n';

if (
  astronautCount <= 7 &&
  astronautStatus === 'ready' &&
  totalMassKg < maximumMassLimit &&
  (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) &&
  fuelLevel === '100%' &&
  weatherStatus === 'clear'
) {
  console.log(launchSequenceMsg, dashes, launchDetailMsg, dashes, byeMsg);
} else {
  console.log(terminateMsg, dashes, launchDetailMsg);
}


