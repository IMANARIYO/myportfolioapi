package com.baptistethinkconstructive.restdemo.entity;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private  int rollNo;
    @Column(name ="student_name" )
   private  String name;
    @Column(name ="student_percentage" )
   private float percentage;
    @Column(name ="student_branch" )
   private String branch;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_add_id")
private  Address address;
    public Student(String name, float percentage, String branch) {
        this.name = name;
        this.percentage = percentage;
        this.branch = branch;
    }

    @Override
    public String toString() {
        return "student{" +
                "branch='" + branch + '\'' +
                ", percentage=" + percentage +
                ", name='" + name + '\'' +
                ", rollNo=" + rollNo +
                '}';
    }
}
