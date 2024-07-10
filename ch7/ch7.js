
///////////// Bracket Notation

let jsCreator = "Brendan Eich";
let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];

let outputStr = "JavaScript was created by somebody with initials " + 
   firstInitial + "." +
   lastInitial + ".";

console.log(outputStr);

//try to access an index that does not exist
let jsCreator1 = "Brendan Eich";

console.log(jsCreator1[-1]);
console.log(jsCreator1[42]);

//Question
let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

////////////// Strings as objects

/*
When calling console.log, we are calling the log method of the console object.
*/

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);

//////////////// String Immutability

let nonprofit = "Launchcode";

console.log(nonprofit);
nonprofit[6] = "C";         //This does not possible!
console.log(nonprofit);

//This below is the correct way
let nonprofit1 = "Launchcode";
nonprofit1 = "LaunchCode";

console.log(nonprofit1);

/*
When the value of a variable storing a string is changed, the variable then points to a new value, with the old value remaining unchanged.
*/

//Somethin to think about...

/*
Given pet = 'cat', why do the statements console.log(pet + 's'); and pet += 's'; NOT violate the immutability of strings?
*/

////////////////// String Methods

/*
string methods will not change the value of a string itself, but instead will return a new string that is the result of the given operation.
*/

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
// console.log(language.slice(1,6));
console.log(language);

//slice() extracts up to but not including end

/////////////////// Endcoding Characters

/*
Strings are stored in a computer using the following process:

    1. Break a string into its individual characters.
    2. Use a character encoding, such as ASCII, to convert each of the characters to an integer.
    3. Convert each integer to a series of bits using decimal-to-binary integer conversion.

*/

//string method charCodeAt takes an index and returns the ASCII code of the character at that index. 

let nonprofit3 = "LaunchCode";

console.log(nonprofit3.charCodeAt(0));
console.log(nonprofit3.charCodeAt(1));
console.log(nonprofit3.charCodeAt(2));
console.log(nonprofit3.charCodeAt(3));
console.log(nonprofit3.charCodeAt(4));
console.log(nonprofit3.charCodeAt(5));
console.log(nonprofit3.charCodeAt(6));
console.log(nonprofit3.charCodeAt(7));
console.log(nonprofit3.charCodeAt(8));
console.log(nonprofit3.charCodeAt(9));

/////////////////// Template Literals

/*
allow us to easily create multi-line strings without using string concatenation or special characters.
*/
let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);

//Template literals may not be supported in older browsers.

//TRY the MAD Lib game below.

let pluralNoun = 'Mickey Mice';
let name = 'Sam';
let verb = 'skip';
let adjective = 'slow';
let color = 'blue';

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")

//Quiz
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);