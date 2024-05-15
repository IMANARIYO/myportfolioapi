package com.baptistethinkconstructive.restdemo.repository;

import com.baptistethinkconstructive.restdemo.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer> {
}
