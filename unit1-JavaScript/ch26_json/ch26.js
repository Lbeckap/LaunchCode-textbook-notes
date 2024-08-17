// JSON

/*
    Learning Objectives:
    1. Understand why data formats are necessary
    2. Rules of the JSON data format
    3. Know the difference between JSON and XML 
*/

//* GUI - Graphical User Interface - buttons, forms, textboxes etc.

//* API - Application Programming Interface - to communitcate with other programs

// order for our application to make a request to an API, the data will need to be formatted in a way both our application and the API can understand.

//* data format - a set of rules that govern how data is written, oranized and labeled.

//* JSON - JavaScript Object Notation

    // JSON is a data format
    // it is a collection of key-value pairs
    // the key must be a string
    // double quotes must be used
    // values can only be:
        // number
        // string
        // boolean
        // array 
        // object
        // null
        // NOT undefined
        // NOT a date
        // NOT a function or Method

/*
    When we make a request to an API:
    1. The API receives the request
    2. It then formats the data we requested into JSON
    3. and last it responds to our request with the JSON representation of our request.

*/ 

JSON.parse() // converts JSON strings into JavaScript objects, deserialization

JSON.stringify() //converts JavaScript objects into a JSON string, serialization 

//* JSON makes it possible to store JavaScript objects as text


