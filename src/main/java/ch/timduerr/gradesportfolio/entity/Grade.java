package ch.timduerr.gradesportfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.Objects;

@Entity
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;
    private Date date;
    @NotNull
    private double value;
    @NotNull
    private double weight;
    @ManyToOne
    @NotNull
    private Subject subject;

    public Grade() {
    }

    public Grade(Long id, String name, Date date, double value, double weight, Subject subject) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.value = value;
        this.weight = weight;
        this.subject = subject;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @NotNull
    public double getValue() {
        return value;
    }

    public void setValue(@NotNull double value) {
        this.value = value;
    }

    @NotNull
    public double getWeight() {
        return weight;
    }

    public void setWeight(@NotNull double weight) {
        this.weight = weight;
    }

    public @NotNull Subject getSubject() {
        return subject;
    }

    public void setSubject(@NotNull Subject subject) {
        this.subject = subject;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Grade grade = (Grade) o;
        return Double.compare(value, grade.value) == 0 && Double.compare(weight, grade.weight) == 0 && Objects.equals(id, grade.id) && Objects.equals(name, grade.name) && Objects.equals(date, grade.date) && Objects.equals(subject, grade.subject);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, date, value, weight, subject);
    }

    @Override
    public String toString() {
        return "Grade{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date=" + date +
                ", value=" + value +
                ", weight=" + weight +
                ", subject=" + subject +
                '}';
    }
}
