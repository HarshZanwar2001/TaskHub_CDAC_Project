package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.User;
import com.app.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;

	
	public List<User> getAllUser() {
		return userRepo.getAllUsers();
	}


	public User createUser(User user) {
		return userRepo.createUser(user);
	}


	public User updateUser(int userId, User model) {
		return userRepo.updateUser(userId, model);
	}

	
	public User getUserById(int userId) {
		return userRepo.getUserById(userId);
	}


	public boolean deleteUserById(int userId) {
		return userRepo.deleteUserById(userId);
	}

}
