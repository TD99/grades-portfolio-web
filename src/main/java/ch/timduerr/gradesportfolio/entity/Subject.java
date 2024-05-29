package ch.timduerr.gradesportfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.Objects;

@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private boolean isRelevant;
    @ManyToOne
    @NotNull
    private Degree degree;
    @OneToMany(mappedBy = "subject")
    @NotNull
    private List<Grade> grades;
    @ManyToMany(mappedBy = "subjects")
    private List<Semester> semesters;
    //TODO: add date

    public Subject() {
    }

    public Subject(Long id, String name, boolean isRelevant, Degree degree, List<Grade> grades, List<Semester> semesters) {
        this.id = id;
        this.name = name;
        this.isRelevant = isRelevant;
        this.degree = degree;
        this.grades = grades;
        this.semesters = semesters;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotNull String getName() {
        return name;
    }

    public void setName(@NotNull String name) {
        this.name = name;
    }

    @NotNull
    public boolean isRelevant() {
        return isRelevant;
    }

    public void setRelevant(@NotNull boolean relevant) {
        isRelevant = relevant;
    }

    public @NotNull Degree getDegree() {
        return degree;
    }

    public void setDegree(@NotNull Degree degree) {
        this.degree = degree;
    }

    public @NotNull List<Grade> getGrades() {
        return grades;
    }

    public void setGrades(@NotNull List<Grade> grades) {
        this.grades = grades;
    }

    public List<Semester> getSemesters() {
        return semesters;
    }

    public void setSemesters(List<Semester> semesters) {
        this.semesters = semesters;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subject subject = (Subject) o;
        return isRelevant == subject.isRelevant && Objects.equals(id, subject.id) && Objects.equals(name, subject.name) && Objects.equals(degree, subject.degree) && Objects.equals(grades, subject.grades) && Objects.equals(semesters, subject.semesters);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, isRelevant, degree, grades, semesters);
    }

    @Override
    public String toString() {
        return "Subject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", isRelevant=" + isRelevant +
                ", degree=" + degree +
                ", grades=" + grades +
                ", semesters=" + semesters +
                '}';
    }
}
