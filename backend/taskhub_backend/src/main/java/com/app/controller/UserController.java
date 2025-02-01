package com.app.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import com.app.model.*;
import com.app.service.UserService;


@RestController
@RequestMapping("api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
//	@GetMapping("/user/{id}")
//	public ResponseEntity<User> getUser(@PathVariable(name="id") String id) {
//		
//		User userObj = 
//		
//		
//		return new ResponseEntity<User>(userObj,HttpStatus.ACCEPTED);
//	}
	
	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUser(){
		
		List<User> userList = userService.getAllUser();
		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id){
		User singleUser = userService.getUserById(id);
		return new ResponseEntity<User>(singleUser, HttpStatus.OK);
	}
	
	@PostMapping("/")
	public ResponseEntity<User> createUser(@RequestBody User model){
		User createdUser = userService.createUser(model);
		return new ResponseEntity<User>(createdUser, HttpStatus.OK);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User model){
		
		User updatedUser = userService.updateUser(id, model);
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id){
		boolean isDeleted = userService.deleteUserById(id);
		if(isDeleted){
			String responseContent = "User has been deleted successfully";
			return new ResponseEntity<String>(responseContent,HttpStatus.OK);
		}
		String error = "Error while deleting User from database";
		return new ResponseEntity<String>(error,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
