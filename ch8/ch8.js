const school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
 ];

 school[0].push('dance');
 school[1].unshift('Holmes');

 console.log(school);

 //it's a good practice to group the same data types in a single array but multiple data types can be used.

 let grabBag = ["A string value", true, 99, 105.5];

 
 /*
 Methods That Return Information About The Array
    arrayName.includes(item)
    arrayName.indexOf(item)

 Methods That Rearrange The Entries In The Array
    arrayName.reverse()
    arrayName.sort()

 Methods That Add Or Remove Entries From An Array
    arrayName.pop()
    arrayName.push(item1, item2, ...)
    arrayName.shift()
    arrayName.splice(index, number, ...)
    arrayName.unshift(item1, item2, ...)

 Methods that Create New Arrays
    arr.concat(otherArray1, ...)
    arr.join('connecter')
    arr.slice(start index, end index)
    stringName.split('delimiter')
 */

//In a multi-dimensional array, both the inner and outer arrays can be altered with array methods. However, bracket notation must be used correctly.

multiArrayName[indexOfInnerArray].method();

//Use array methods to add an additional crew array and alter existing arrays
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);