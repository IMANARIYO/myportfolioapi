package com.baptistethinkconstructive.restdemo.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "add_id")
    private Long addressId;

    private String street;
    private String city;
    private String addressType;
    private String country;
    @OneToOne(mappedBy = "address")
    @JoinColumn(name = "fk_add_id")
    private Student student;

}
