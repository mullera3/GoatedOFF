package com.example.goatedoff.controller;


import com.example.goatedoff.dto.UserDto;
import com.example.goatedoff.service.impl.UserServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/public")
public class UserController {

    @Autowired
    UserServiceImpl userService;


    @GetMapping("/login")
    public UserDto getUser(@RequestParam(name = "email") String email, @RequestParam("password") String password)
            throws ParseException, ExecutionException, InterruptedException {
        return userService.loginUser(email,password);
    }

    @PostMapping("/register")
    public String createNewUser(@RequestBody String json) throws ParseException, ExecutionException, InterruptedException, JsonProcessingException {

        return userService.postNewUser(json);
    }

}
