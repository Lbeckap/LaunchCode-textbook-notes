//* Static Verses Dynanmic

//* Printing to console
    // built in method println()
    // System.out.println(someMessage)
    // sout + Tab (short cut)

//* Strings
    // need double quotes
    // declare with String
    // String firstName = "John";
    // String lastName = "Smith";

//* Characters
    // need single quotes
    // declare with char
    // char letter = 'a';
    // char digit = '9';
    // char punctuation = '!';
    // char newline = '\n';

//* Commom String Methods
    // .charAt(index)
    // .subString(start, end + 1)
    // .indexOf(charOrString)
    // .split(delimiterString)
    // .trim()
    // .toUpperCase()
    // .toLowerCase()
    // .concat(string2)
    //__________________//
    // .length()
    // .contains(string) works like JS .includes()
    // .equals(otherString) cannot use equality operator on strings in Java

//* Primitives
    // Number types
        // int
        // float - decimal number with up to 7 digits
        // double - decimal number with up to 15-16 digits

    // Boolean
        // boolean

    // Char
        // char - must use single quotes
    
//* NOT primitive
    // String
        // it is an object 

//* Autoboxing - every primitive has an non-primitive object type
    // Ingeger for int
    // Float for float
    // Double for double
    // Boolean for boolean
    // Char for char
    // You used to have to wirte code to box or unbox primitives. Modern Java will automatically do it when nescessary

//* Best Practice
    // Use primitives whenever possible

//* Packages
    // package declaring must go at the top
    // package is the keyword. Followed by org. , followed by the package name.
        // package org.example;
        
//* Importing 
    // import java.util.Scanner;
    // No need to import and export classes that are part of the same package

//* Methods
    // a functon that is defined within classes
    // because Java is all classes, every action would be called a method
    // public is available everywhere
    // static so that I can call them off the class. The other option is to use 'instance'
    // Must declare a return type (void, string, int, etc.)
    // additional methods must be declared BELOW main

//* main() Method
    // contains the code that will be executed line by line 
    // always use the keywords public static void main (String[] args)
    // short cut psvm + Tab

//* Scanner for User Input
    // 1. import scanner
        // import java.util.Scanner
    // 2. Must declare and initilize a new object of the scanner class
        // Scanner input = new Scanner(System.in);
    // 3. Generate a prompt
        // System.out.println("Enter a number:");
    // 4. Store user input
        // int userNum = input.nextInt();
    // 5. Optional - display user input
        // System.out.println("Num: " + userNum);
    // 6. must close the scanner
        // input.close();

//* Strings and Single Characters
    // Strings in Java are immutable. The characters within a string cannot be changed
    // char uses single quotation marks
    // String uses double quotation marks

//* Packages    
    // packages help protect the code from out side influences by encapsulating it.
    // Always declare the package of my Java classes

//* Java Objects
    //structures that have astate and a set of behaviors

//* Reference variables 
    //  Cat myCat = new Cat();
    // Cat sameCat = myCat;
    // When we assign myCat to another variable, as in Cat sameCat = myCat, we do NOT create a second copy of the object or its data. Instead, we make a second arrow pointing to the same memory location.

//* In Java functions are called Methods . (REMEMBER)