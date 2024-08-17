/// Scope

//* scope - the ability of a program to access or modify a variable.

//* local scope - variables declared and initialized inside a function or block

//* global scope - variables declared and initialized outside of a function and in the main body of the file.

//* Execution context - the conditions under which a variable is executed—its scope.
    //When the code is run in the browser, everything is first run at a global context. As the compiler processes the code and finds a function, it shifts into the function context before returning to global execution context.

//* Variable shadowing - where two variables in different scopes have the same name.

//* Variable hoisting - a behavior in JavaScript where variable declarations are raised to the top of the current scope.
    //Hoisting occurs when the var keyword is used in the declaration, but it does NOT occur when let and const are used in the declaration.