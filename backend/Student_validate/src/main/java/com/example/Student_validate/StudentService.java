package com.example.Student_validate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
@Transactional
public class StudentService {


    @Autowired
    private StuentRepository stuentRepository;

    public List<StudentEntity> listAllStudent() {
        return stuentRepository.findAll();
    }

    public StudentEntity getStudent(Integer id) {
        return stuentRepository.findById(id).get();
    }

    public void saveStudent(StudentEntity std) {
        stuentRepository.save(std);
    }

}
