package ch.timduerr.gradesportfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.Objects;

@Entity
public class Degree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;
    @ManyToOne
    @NotNull
    private School school;
    @OneToMany(mappedBy = "degree")
    @NotNull
    private List<Subject> subjects;

    public Degree() {
    }

    public Degree(Long id, String name, School school, List<Subject> subjects) {
        this.id = id;
        this.name = name;
        this.school = school;
        this.subjects = subjects;
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

    public @NotNull School getSchool() {
        return school;
    }

    public void setSchool(@NotNull School school) {
        this.school = school;
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
        Degree degree = (Degree) o;
        return Objects.equals(id, degree.id) && Objects.equals(name, degree.name) && Objects.equals(school, degree.school) && Objects.equals(subjects, degree.subjects);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, school, subjects);
    }

    @Override
    public String toString() {
        return "Degree{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", school=" + school +
                ", subjects=" + subjects +
                '}';
    }
}
