package org.bisag.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import org.bisag.backend.model.User;
import org.bisag.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepo;
    
    @PostMapping("/save")
    public ResponseEntity<User> createUser(@RequestBody User user) {  
        try{
        User savedUser=userRepo.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        }catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/getUsers")
    public List<User> getUsers() {
        return userRepo.findAll();
    }
    
    @PutMapping("/edit/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
       Optional<User> existUser = userRepo.findById(id);
        if(existUser.isPresent()){
            User userDetails=existUser.get();
            userDetails.setUsername(user.getUsername());
            userDetails.setFirstname(user.getFirstname());
            userDetails.setLastname(user.getLastname());
            userDetails.setPhonenumber(user.getPhonenumber());
            userDetails.setBirthdate(user.getBirthdate());
            userDetails.setGender(user.getGender());
            userRepo.save(userDetails);
        }
        return null;
    }
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id){
        userRepo.deleteById(id);
    }
    
}
