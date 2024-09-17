package org.example;

public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world!");

        Course math = new Course("mathematics", 5, "Arnold Swartz");
        Course science = new Course("Scientific", 5, "Arnold Swartz");

        System.out.println(math);
        System.out.println(science);
        System.out.println(math.equals(science)); // false
        System.out.println(math.getTitle().equals(science.getTitle())); // false
        System.out.println(math.getInstructor().equals(science.getInstructor())); // true

        //TODO How to cast credits in order to check equality.
        Integer creditsMath = (math.getCredits());
        Integer creditsScience = (science.getCredits());
        System.out.println(creditsMath.equals(creditsScience)); // true

    }
}