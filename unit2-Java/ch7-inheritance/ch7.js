// Inheritance

/*
Inheritance

    Inheritance - a mechanism within object-oriented programming that allows one class to be based on another class, thus receiving its properties and behaviors.

    Subtyping - another name for inheritance

Inheritance in Java

    Extends - keyword to define a class that inherits from another. 

        public class Cat {
            ...code for the Cat class...
        }

        public class HouseCat extends Cat {
            ...code for the HouseCat class...
        }

    Subclass - HouseCat is a subclass, derived class, or child class of Cat
    Child class - HouseCat ""
    Derived class - HouseCat ""

    Super class - Cat is the superclass, base class, or parent class of HouseCat
    Base class - Cat ""
    Parent class - Cat ""

    Object class - 

A Tale of Two Cats

    base - 
    no-arg constructor -  constructor that takes no arguments
    override - to modify behavior provided by the base class
    method overriding - When we override it, we should use the @Override annotation.
    method signatures - The signature of a method includes the method name, access level, return type, and the type and number of input parameters.

Inheritance from Abstraction

    Abstraction - 
    abstract - 
    Abstract class - We could prevent objects of type Cat from being created, while still enabling sharing of behavior among its subclasses, by making Cat an abstract class.
    Abstract method - a method in an abstract class that does not have a body. In other words, it does not have any associated code, only a signature. It must also be marked abstract.

Casting

    Runtime exception - error that occurs upon running the program and is not found by the compiler beforehand.

    Polymorphism - Storing objects of one type (e.g. HouseCat) in a variable or field of another “compatible” type (e.g. Cat) is an example of polymorphism.

Class Diagrams

    Class diagrams - informal tools for sketching out class design.
    One-to-One Relationship - A plain, solid line between two classes indicates a one-to-one relationship

    One-to-Many relationship - A line with an open diamond on the end indicates a one-to-many relationship

    is-a relationship - using an arrow, directed from the subclass to the base class.
    
    (+) - public
    (-) - private
    (...) - Some methods or fields are omitted

*/

// Which of the following is NOT a term for one class that extends another: extension class

// A class, Greeting, extends another class, Message. By convention, how would we represent the relationship between these classes in a diagram? a. two boxes with an arrow pointing from Greeting to Message

// A class called Greeting extends Message. Greeting and Message are both defined within a package called Speech. Select all of the fields and methods that are inherited by Greeting.: getFriendly, getLanguage, getText, language, text

// A class called Greeting extends Message. What would a constructor for Greeting need to be to call the Message constructor? B. public Greeting(String aLanguage, String aText) { super(aLanguage, aText);}

// A class derived from an abstract class must implement all of the abstract methods it inherits. True

// When might a programmer want to make a class abstract? When shared behavior is desired among a group of non-abstract classes

// Which of the following does not contain an error: B. Message hello = new Greeting("English", "Hello Coder!"); hello.wave();

// Polymorphism refers to: The practice of storing an object of one type in a variable of another type