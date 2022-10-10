package com.example.goatedoff.controller;


import com.example.goatedoff.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
public class UserController {

    @Autowired
    UserServiceImpl userService;


    @GetMapping("/login")
    public String getUser(@RequestParam(name = "email") String email,@RequestParam("password") String password){
        return "";
    }

}
