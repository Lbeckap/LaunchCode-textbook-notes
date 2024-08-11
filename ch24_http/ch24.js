//How the Internet Works

//* client-server model - Internet uses the client-server model. the client is the web browser on your computer or smartphone. When you click on a link or type in an address and hit Enter, the client/browser makes a request to a server that sits in a building somewhere out in the world. The server receives the request, and sends a response back to the client. The client then displays the content of the response.

//* server - n application that provides resources—such as raw data, web pages, or images.
//* client - an application that requests resources from a server.

//* protocol -a standard for communication between computers.

//* HTTP - Hypertext Transfer Protocol - High-level web communication for transferring files and information, including: HTML, CSS, JavaScript files, images, and other media form submissions

//* HTTPS - refers to the HTTP protocol used with a secure connection. it can’t be read while in-transit.

//* TCP/IP - Transmission Control Protocol / Internet Protocol - Low-level web communication for transferring small chunks of raw data known as packets

//* DNS - Domain Name Service - Translates human-friendly names into server addresses

//* domain names - readable and memorable names for servers

//* IP address


//* nameserver
//* loopback address
//* uniform resource locator
//* URL
//* web address
//* scheme
//* host
//* port
//* path
//* root path
//* query string

// ------- CODE WITH CARRIE ------//

//127.0.0.1 My home address

// HTTP used for sending common data

/* 5 Parts of a web address

    Note: ONLY the scheme and host are required 

    1   scheme: https or http
    2   host: www.abcwebsite.org or localhost
    3   port: 5500
    4   path: products or index.html
    5   query string: ?id=12352

    They will always be in this order.

*/

// HTTP Request is made up of mulitple parts
     
    // Method/Path/HTTP Version
    // Request Headers (key-value pairs)
    // Request Body aka Payload (after a blank line)

// HTTP Request Methods
    
    //* GET - for retrieving information. GET is unsafe! It modifys the URL with inputed information.
    //* POST - for sending information to create NEW data on a server
    //* PUT - is updating existing information
    //* PATCH - small parial update
    //* DELETE - for removing data from the server

    // Read up on CRUD Operations (Create(POST), Read(GET), Update(PUT/PATCH), Delete)


// Common Request Headers

    // Host - where request is being sent to
    // User-Agent - client info
    // Accept - types od data client will accept
    // Content-Type - what type of data that is in the request body. Usually on ly used with POST becaus edata is being sent back to the server. 

// HTTP Responses

    //Made up of several parts

    // Status Line with code
    // Response Headers (key-value pairs)
    // Response Body aka Payload


// Responds Codes

    // 1xx (informational)
    // 2xx (Successful)
    // 3xx (Redirection)
    // 4xx (Client Error)
    // 5xx (Server Error)

// Responds Headers
    
    // Content-Type
    // Content-Length
    // Location - the URL the client should vist


//___________ FORMS____________//

// Labels

    /* 2 ways
        1. Wrap the <label> around the input

        <label>Username: <input type="text" name="username" /></label>

        2. Assign an id to the <input> and use the 'for' attribute on the <label> with the input's id as the value.
            //* for & id are required

         <input type="test" id="user-input" name="username"/>
        <label for="user-input">Username</label>

        *This second way allows the user to click on the label and bring the input field into focus (a bit more user friendly)
     */

//* value - an atribute that can be accessed inthe DOM 

    // for text, number, and date the value is the user input

    //for radio buttons, checkboxes, and dropdown selects the value is set on the element

// Types of Inputs

    //* Text input - type="text", self closing
    //? What is name used for?

    //* Number input - type="number"

    //* Email input - type="email"

    //* Date input - type="date", value will be YYYY-MM-DD

    //* Checkbox input - type="checkbox", a label is needed
    // A value can be added - but the default off "on" will be used if I don't

    //* Radio input - type="radio", all must have the same name, Must a value

    //* select/dropdown input - use <select>, then <option> for each option, use "Select one" as the first option. A Value is nesessary


// Buttons and Form Submission
 
    //Most common to use <button type="submit"> NOT <input type="submit">

    //* type="submit" - simply sumbits the form

    //* type="reset" - takes alll fields back to default


// Submitting via HTTP

    //<form action="some URL" method="POST">
        //* POST is more secure. if POST is not inlcuded, it defaults to GET
        //If the url is not included, it defaults to the current page.


// Validating User Input with Javascript

    // custom validation is required over the built-in attributes like 'required' is preffered because you can give the user more feedback like 'only apla characters are allows' or something.

    //* event.preventDefault() - to stop the form from submitting so the the user can fix the issue.
