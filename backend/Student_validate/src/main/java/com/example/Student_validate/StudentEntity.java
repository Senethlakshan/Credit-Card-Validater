package com.example.Student_validate;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "students")

public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private  String fullname;
    private  String email;
    private  String username;
    private  String password;
    private  String password_confirm;
    private  String registration_number;
    private  int age;
    private  Date date_of_birth;
    private  String favorite_game ;
    private  String creditcard_num ;
    private  String cd_holder ;
    private  Date expire_date ;


}
