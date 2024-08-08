//* DOM - Document Object Model - a set of objects that represent the browser and the documents that make up a web page.

//* Global DOM Variables - window, document

// The browser will re-render the web page anytime changes are made via the DOM. Rendering is not the same action as loading.

//* window.alert("string message") - dialog box with an OK

//* window.confirm("string message") - dialog box with OK AND CANCEL

//* document.title - read or set the title of the document

//* document.querySelector("css selector") - returns the first element that matches the given css selector 

//* document.querySelectorAll("css selector") - returns a list of elements that match the given css selector

//* element.getAttribute("id") - returns the value of the attribute

//* element.setAttribute("id", "string-value") - sets the attribute to a given value

//* element.style.color - reads and sets INLINE CSS properties

//* element.innerHTML - reads or sets the HTML inside an element

//* events - are code representations of interations with other programs

// In programming, events are triggered and then handled

//* triggering - the act of causing and event to be sent

//* handling - is receiving the event and performing an action in response

//* event-driven - a programming pattern where the flow of the program is determined by a series of events
    // Javascript is an event-driven programing language

//* inline event handler - <button onclick="console.log('you rang...');">Ring Bell</button>

//* listener - another name for an event handler

// named functions can be used as well as anonymous functions

    // anElement.addEventListener("eventName", function() {
        // function body of anonymous function
        // this function will be executed when the event is triggered
    // });

// an event parameter can be passed to the event handler function. This event is an object instance of the Event class, which defines methods and properties related to events.
// anElement.addEventListener("eventName", function(event) {
//     console.log("event type", event.type);   //prints a string name of the event
//     console.log("event target", event.target); //prints an element object that was the target of the event
// });


//* bubbling - refers to an event being propagated to ancestor elements, when an event is triggered on an element that has parent elements. Events are triggered first on the element that is most closely affected by the event.

//* event.stopPropagation() - to stop events from being sent to ancestor elements.

//* load event - triggered when the window, elements, and resources have been loaded by the browser (this is an alternative to <script> placement at the end of the body)

    // function init () {
    //     code after window loads goes here
    // }

    // window.addEventListener("load", init);