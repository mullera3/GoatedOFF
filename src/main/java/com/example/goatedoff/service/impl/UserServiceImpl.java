package com.example.goatedoff.service.impl;


import com.example.goatedoff.dto.UserDto;
import com.example.goatedoff.model.User;
import com.example.goatedoff.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutionException;


@Service

public class UserServiceImpl implements UserService {

    @Override
    public UserDto loginUser(String email, String password) throws ExecutionException, InterruptedException, ParseException {
        Firestore db  = FirestoreClient.getFirestore();
        Query querySnapshot = db.collection("User").whereEqualTo("email", email.toLowerCase())
                .whereEqualTo("password", password);

        QueryDocumentSnapshot result = querySnapshot.get().get().getDocuments().get(0);

        int Id = Integer.parseInt(result.getId());
        String firstName = result.getString("firstName");
        Date dob = new SimpleDateFormat("dd/MM/yyyy").parse(result.getString("dob"));
        String lastName = result.getString("lastName");
        String userEmail = result.getString("email");
        String userPassword =  result.getString("password");

        return new UserDto(Id,firstName,lastName,dob,userEmail,userPassword);
    }

    @Override
    public void logoutUser() {

    }

    private void setUserObjectId(String id)  {
        // Update id of recently added document to collection because it can't be updated at time its being stored
        // updating at time it stored causes it to great a different id then one for the collection
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future =  db.collection("User").document(id).update("id",id);
    }


    public String postNewUser(String userJson) throws ExecutionException,
            InterruptedException, JsonProcessingException, ParseException {

        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(userJson);
        int id = 0;
        String firstName = rootNode.get("firstName").asText().toLowerCase();
        String lastName = rootNode.get("lastName").asText().toLowerCase();
        Date dob = new SimpleDateFormat("dd/MM/yyyy").parse(rootNode.get("dob").asText().toLowerCase());
        String email = rootNode.get("email").asText().toLowerCase();
        String password = rootNode.get("password").asText();
        UserDto tempUser = new UserDto(id,firstName,lastName,dob,email,password);
        User newUser = UserDtoToUser(tempUser);
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference productPostRef =  db.collection("User");
        ApiFuture<DocumentReference> future = productPostRef.add(newUser);
        setUserObjectId(future.get().getId());
        return  future.get().getId();
    }

    @Override
    public User UserDtoToUser(UserDto userDto) {
        Timestamp dateUserCreated = new Timestamp(System.currentTimeMillis());
        Timestamp dateUserUpdated = new Timestamp(System.currentTimeMillis());
        String countryCode = "US";
        Integer postalCode = null;
        String state = null;
        String city = null;
        return new User(userDto.getId(), userDto.getFirstName(),userDto.getLastName(),userDto.getDob(),userDto.getEmail(),userDto.getPassword(),dateUserCreated,dateUserUpdated,countryCode,postalCode,state,city);
    }
}
