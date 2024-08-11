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




