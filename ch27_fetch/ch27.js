// Fetch

/*
    Learning Objectives:
    1. Make a request to an API using fetch
    2. Handle a response from an API
    3. Understand the asynchronous cycle of network requests
    4. Familiar with terms AJAX and XHR (XmlHttpRequest) 
*/

//* fetch - a global function that requests,or fetches, resources such as data from an API

// Two necessary aspects of the fetch function
    // 1. The url where the data is located
    // 2. A response handler to utilize the data that is being fetched (sometime a function)

    fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
        console.log(response); //simply logs the response to the console
    } );

    // fetch("https://handlers.education.launchcode.org/static/weather.json") 
        // the url

    // then(function(response) {....}
        // the request handler anonymous function
        // has a response parameter

//* How Fetch Works
    /* 
        1. a URL is passed to fetch as a parameter
        2. an HTTP GET request is sent from the browser to the API
        3. API processes request and sends back formatted data
        4. AFTER browser receives the response, the .then() statment executes
        5. the anonymous response handler function runs and deals with the data sent back from the API
        6. based on the function, the web page gets updated using DOM methods
    */

//* fetch can also be used to make other types of HTTP requests such as POST and PUT 
        // POST - send data to CREATE or update a resource
        // PUT - send data to create or update a resource
            // whats the difference? - PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.

// Other was to request data on a webpage are:
    // jQuery.get
    // jQuery.ajax
    // XMLHTTpRequest

/*______________ASYNCHRONOUS AND PROMISES_______________*/   

//* asynchronous - Not simultaneous or concurrent in time. (also called AJAX - Asynchronous JavaScript and XML)

//* synchronous - Simultaneous or concurrent in time.

// In Javascript HTTP requests are asynchronous.
    // When a request is sent, we dont know when a response will be received (depends on network speed, address location and response size)

    // The browser can't stop and wait for a response but have to continue running seemlessly for the user

// fetch returns an instance of the Promise class

    //* promise - is the eventual outcome of an asynchronous event.

    /* for example...
        fetch("...").then( function(response) {
        console.log(response);
        } );

        can be thought of as...
        const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
        fetchPromise.then( function(response) {
        console.log(response);
        } );
    */


// a promise can be fulfilled or rejected

    //* fulfilled - data is passed to the response handler function. The then method of Promise defines what will happen when the promise is fulfilled.

    //* rejected - the error reason is returned.    
    
    

    

/*_________Code w/ Carrie___________*/

// APIs have API Documentation - the quality of the information can vary wildly
    // Documentation may contain
        // All possible endpoints
        // Any headers required
        // Available query parameters
        // formats available (text, XML, JSON, etc.)

//* promise - is the expactation of a response. Fetching data has two promises.
    // 1. the response from the initial request
    // 2. the data itself, nicely packaged as JSON

// Two different syntax 
    // 1. traditional - uses Promise class .then() . And it must be used twice because there are two promises
    // 2. Modern - uses keywords 'async' and 'await'

/* Traditional - 

    fetch('www.company.com/products').then(function(response) {
        response.json().then(function(data) {
            do stuff with data goes here
        });
    });

    .then() - controls the timing
    .json() - extracts the data
    (data) - capture the data and do something with it in the function

*/

/* Modern -

    async function fetchProductionData() {
        let response = await fetch('www.company.com/products');
        let data = await response.json();

        do stuff with data goes here
    }


    1. declare an asyncronous fucntion with the async keyword
    2. use await to handle both promises
    3. remember to call the funtion
        fetchProductionData();

*/

// How to use a header in fetch
    // The API documentation will identify what header is needed
    // add the header AFTER the endpoint using {}

    // example
    let response = await fetch('www.company.com/products', {
        header: {
            "x-api-key": "Live_i3r989 cinrc84yt8nyt"
        }
    });




