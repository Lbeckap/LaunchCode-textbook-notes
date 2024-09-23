// Chapter 5: Classes Part 2

/*

    Final Field - a field that cannot be changed once initialized. Cannot have setters.
    
    Final Primitive Field - (final int, final double, etc.). Cannot change the value after it is initialized

    Final Object Field - (final String, final Double, final ClassName, etc.) Cannot assign a new object to the field after initialization BUT the values within the object itself an be changed

    Static field - shared by all instances of the class, and it is declared with the static keyword.
        access a static field from outside its class by using ClassName.staticField

    static final - used to declare a constant. Makesure to use Upper Snake Case ex: public static final String FIRST_DESIGNER... 
        Constants should be public. 
        Constants must be declared and initialized at the same time.

    Instance Methods - define the behaviors that are unique or specialized to each class. Every object created from a class will carry a copy of these methods.
        Instance fields can only be called by instance methods.
    
    Static Methods - Just like static fields, static methods belong to the class as a whole, and not to any of the specific instances of the class. hey are sometimes also called class methods.

    Class Methods - the opposite of an instance method, since the two cases are mutually exclusive. Instance methods rely on each object’s specific data, while static methods must NOT rely on data from a specific object.
        To call a static method - ClassName.someStaticMethod()
        Used alot for utility-like (e.g. carrying out a calculation, or using or fetching some external resource).

    Overriding - 

    Cast - 

    Equality - When you test for equality, you look at two different objects and compare some aspect of them to each other.

    Identity - When you test for identity, you look at two variables to see if they reference the exact same object.

*/

// Special Methods
    /* toString
        best to write our own toString method to show friendlier results
        public String toString() {
            return name + " (Credits: " + numberOfCredits + ", GPA: " + gpa + ")";
        }

        Student person = new Student("Violet");
        System.out.println(person.toString());
    */

    /* equals()
    public boolean equals(Object toBeCompared) {

    if (toBeCompared == this) {
      return true;
   }

   if (toBeCompared == null) {
      return false;
   }

   if (toBeCompared.getClass() != getClass()) {
      return false;
   }

   Student theStudent = (Student) toBeCompared;
   return theStudent.getStudentId() == getStudentId();
    }

    Components of equals
    1. Reference check: If the two objects are the same, return true right away.

    2. Null check: If the argument is null, return false.

    3. Class check: Compare the classes of the two objects to ensure a safe cast. Return false if the classes are different.

    4. Cast: Convert the argument to the type of our class, so getters and other methods can be called.

    5. Custom comparison: Use custom logic to determine whether or not the two objects should be considered equal. This will usually be a comparison of properties 

    Characteristics of equals
    Reflexivity: For any non-null reference value x, x.equals(x) should return true.

    Symmetry: For any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) also returns true.

    Transitivity: For any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true.

    Consistency: As long as x and y do not change x.equals(y) should always return the same result.

    Non-null: For any non-null reference value x, x.equals(null) should return false.

    */