package com.example.goatedoff.service;


import com.example.goatedoff.dto.UserDto;
import com.example.goatedoff.model.User;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.text.ParseException;
import java.util.concurrent.ExecutionException;

public interface UserService {

     UserDto loginUser(String email, String password) throws ExecutionException, InterruptedException, ParseException;

     void logoutUser();

    private void setUserObjectId(String id) {

    }

     String postNewUser(String userJson) throws ExecutionException, InterruptedException, JsonProcessingException, ParseException;

    User UserDtoToUser(UserDto userDto);



}
