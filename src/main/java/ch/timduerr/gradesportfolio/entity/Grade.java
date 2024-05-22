package ch.timduerr.gradesportfolio.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
import java.util.Objects;

@Entity
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subject;
    private Date date;
    private double value;
    private double weight;

    public Grade() {
    }

    public Grade(String subject, Date date, double value, double weight) {
        this.subject = subject;
        this.date = date;
        this.value = value;
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Grade grade = (Grade) o;
        return Double.compare(value, grade.value) == 0 && Double.compare(weight, grade.weight) == 0 && Objects.equals(id, grade.id) && Objects.equals(subject, grade.subject) && Objects.equals(date, grade.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, subject, date, value, weight);
    }

    @Override
    public String toString() {
        return "Grade{" +
                "id=" + id +
                ", subject='" + subject + '\'' +
                ", date=" + date +
                ", value=" + value +
                ", weight=" + weight +
                '}';
    }
}
