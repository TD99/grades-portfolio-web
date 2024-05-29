package ch.timduerr.gradesportfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.Objects;

@Entity
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;
    @OneToMany(mappedBy = "school")
    @NotNull
    private List<Degree> degrees;

    public School() {
    }

    public School(Long id, String name, List<Degree> degrees) {
        this.id = id;
        this.name = name;
        this.degrees = degrees;
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

    public @NotNull List<Degree> getDegrees() {
        return degrees;
    }

    public void setDegrees(@NotNull List<Degree> degrees) {
        this.degrees = degrees;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        School school = (School) o;
        return Objects.equals(id, school.id) && Objects.equals(name, school.name) && Objects.equals(degrees, school.degrees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, degrees);
    }

    @Override
    public String toString() {
        return "School{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", degrees=" + degrees +
                '}';
    }
}
