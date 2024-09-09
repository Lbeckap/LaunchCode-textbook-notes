// Questions I have about Java

//? What are generics?
    // one class that is flexible enough for many different types
    // Cannot be used with primitive. Must use wrapper classes first
    // type perameter 'T' in angle brackets is required when creating the class
        /* 
            public class Printer <T>{
                T thingToPrint; //Integer is replaced with 'T'
                public Printer(T thingToPrint) {
                    this.thingToPrint = thingToPrint;
                }
                
                public void print() {
                    System.out.println(thingToPrint);
                }
            }

            To use in it main()
            public static void main(String[] args) {
                Printer<Integer> printer = new Printer<>(23);  // <Integer> is the T type that will be printed
                printer.print();

                Printer<Double> doublePrinter = new Printer<>(33.5);
                doublePrinter.print();
            }
        */

//? How can the diamond operator be used for type inference?
    // The diamond operator is <>
    // One example is through the use of generics

//? What is pattern matching?

//? Is 'private' keyword always used for default variables?

//? When to use var?

//? What are sealed classes?

//? What is a map?
    // A set of kay value pairs?

//? What is hash map?
    // Implementation of the Map interface
    //extends AbstractMap<K,V>
    // roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls.
    // does not keep track of order
    // Holds key value pairs
    // If many mappings are to be stored in a HashMap instance, creating it with a sufficiently large capacity will allow the mappings to be stored more efficiently than letting it perform automatic rehashing as needed to grow the table

//? How to cast in Java? and when to do so?

//? When to use an unnamed variable '_'?
    // when using a try catch
        /*
            try {
                int myInt = Integer.parseInt("12b");
            }
            catch (NumberFormatException e) {
                System.out.println("That is not a number!"); // I don't actually need the vairable 'e' so it can be replaced with _.
            }
        */

    // When using lambda functions
        /*
            List<Cat> cats = List.of(new Cat(), new Cat(), new Cat());
            cats.forEach(cat -> System.out.println("Yay cats!")); // 'cat' varible is not need because I'm just printing a string. It can be replaced with _.
        */

//? Should I always just use ArrayList? 

//? When should I use Array?
    // Array is good for an ordered list that can be referenced usin indices.


//* Did you know? ArrayList is a class that implements Interface List <E>
    // Other implementing classes are
    // AbstractList
    // AbstractSequentialList
    // ArrayList
    // AttributeList
    // CopyOnWriteArrayList
    // LinkedList
    // RoleList
    // RoleUnresolvedList
    // Stack
    // Vector

//? What is a set? Does it really not allow duplicates?

//? What is .nextInt(), .next() the difference and how to use them.

//? What is the colon used for in Java

//* Good example of the scanner can be found at java-web-dev-projects/control-flow-and-collections/chapter-example/arrayList