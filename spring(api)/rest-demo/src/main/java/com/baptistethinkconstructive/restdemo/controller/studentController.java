package com.baptistethinkconstructive.restdemo.controller;

import com.baptistethinkconstructive.restdemo.entity.Student;
import com.baptistethinkconstructive.restdemo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class studentController {
    @Autowired
    StudentRepository repo;
    //get all students
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        List<Student> students=repo.findAll();
        if (students.isEmpty()) {
            System.out.println("No students found");
        }
        return students;
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id){
        Optional<Student> optionalStudent = repo.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
@PostMapping("/students/add")
@ResponseStatus(code= HttpStatus.CREATED)
public ResponseEntity<Student> cretateStudent(@RequestBody Student student){
    repo.save(student);
    return ResponseEntity.ok(student);

}
@PutMapping("/student/update/{id}")
    public Student updateStudents(@PathVariable int id,@RequestBody  Student  updatedStudent){
    Student existingStudent =repo.findById(id).orElseThrow(() -> new IllegalStateException( "Student with id " + id + " does not exist"));
    existingStudent.setName(updatedStudent.getName());
    existingStudent.setPercentage(updatedStudent.getPercentage());
    existingStudent.setBranch(updatedStudent.getBranch());
 repo.save(existingStudent);
    return repo.save(existingStudent);
}
@DeleteMapping("students/delete/{id}")
   public void removeStudent(@PathVariable int id){
      Student student=repo.findById(id).orElseThrow(() -> new IllegalStateException( "Student with id " + id + " does not exist"));
        repo.delete(student);
}
}
