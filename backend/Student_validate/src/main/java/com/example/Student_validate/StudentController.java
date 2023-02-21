package com.example.Student_validate;


import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://127.0.0.1:5173/login")
public class StudentController {

    @Autowired
    private StudentService studentService;

    //Get all Student details
    @GetMapping("/allStudent")
    public List<StudentEntity> list() {
        return studentService.listAllStudent();
    }

    //Get a student by id
    @GetMapping("/getStudentById/{id}")
    public ResponseEntity<StudentEntity> get(@PathVariable Integer id) {
        try {
            StudentEntity std= studentService.getStudent(id);
            return new ResponseEntity<StudentEntity>(std, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<StudentEntity>(HttpStatus.NOT_FOUND);
        }
    }

    //Add new student
    @PostMapping(path="/addStudent")
    public @ResponseBody String add(@RequestBody StudentEntity std, HttpServletResponse response) {
        studentService.saveStudent(std);
        response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
        return "saved";
    }
}
