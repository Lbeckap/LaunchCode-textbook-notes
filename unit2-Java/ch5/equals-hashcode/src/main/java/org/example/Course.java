package org.example;

import java.util.Objects;

public class Course {
    private String title;
    private int credits;
    private String instructor;

    public Course (String title, int credits, String instructor) {
        this.title = title;
        this.credits = credits;
        this.instructor = instructor;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    @Override
    public String toString() {
        return "Course{" +
                "title='" + title + '\'' +
                ", credits=" + credits +
                ", instructor='" + instructor + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true; // The reference check on object o
        if (o == null || getClass() != o.getClass()) return false;  // / the null check and class check on o
        Course course = (Course) o; // casts o as a Course object
        return Objects.equals(title, course.title) && Objects.equals(instructor, course.instructor); // compares the title and instructor fields of the two objects.
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, instructor);
    }
}
