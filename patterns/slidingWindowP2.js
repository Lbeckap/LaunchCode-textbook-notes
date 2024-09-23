/*

Given an array of positive numbers and a positive number s, find the length of the smallest contiguous(subarray that are touching) subarray whose sum is greater than or equal to s. Return 0 if no such subarray exists. 

*/

arr = [1, 3, 2, 4, 5]; 
s = 6;

// define the window
windowStart = 0;
windowEnd = 0;
windowSum = 0;
minLengthSoFar = null;


// is greater than or equal to s? If no, increment windowEnd and check again... and so forth 
    // If yes, hurray a contigous subarray is found - set minLength so far to that length
    // Now is there anyothers? Let's check, move window start (subtract to removed index) and check 'is greater or equal to s .. and so forth
let minLengthSoFar = null;
let windowStart = 0;
for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    let windowSum = arr[windowStart] + arr[windowEnd];
    if (windowSum >= s) {
        minLengthSoFar = windowEnd;
    }
}