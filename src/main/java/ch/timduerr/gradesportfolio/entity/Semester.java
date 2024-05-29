package ch.timduerr.gradesportfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.Objects;

@Entity
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private byte number;
    @ManyToMany(mappedBy = "semesters")
    @NotNull
    private List<Subject> subjects;

    public Semester() {
    }

    public Semester(Long id, byte number, List<Subject> subjects) {
        this.id = id;
        this.number = number;
        this.subjects = subjects;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @NotNull
    public byte getNumber() {
        return number;
    }

    public void setNumber(@NotNull byte number) {
        this.number = number;
    }

    public @NotNull List<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(@NotNull List<Subject> subjects) {
        this.subjects = subjects;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Semester semester = (Semester) o;
        return number == semester.number && Objects.equals(id, semester.id) && Objects.equals(subjects, semester.subjects);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, number, subjects);
    }

    @Override
    public String toString() {
        return "Semester{" +
                "id=" + id +
                ", number=" + number +
                ", subjects=" + subjects +
                '}';
    }
}
