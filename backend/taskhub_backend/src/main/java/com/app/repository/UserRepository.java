package com.app.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.app.model.User;

import jakarta.persistence.*;
import jakarta.transaction.*;

@Transactional
@Repository
public class UserRepository {
	
	
	@PersistenceContext
	private EntityManager entityManager;

	
	
	public List<User> getAllUsers() {
		
		String hql = "FROM Book as atcl ORDER BY atcl.id";
		return (List<User>) entityManager.createQuery(hql).getResultList();
	}


	
	public User getUserById(int userId) {
		
		return entityManager.find(User.class, userId);
	}

	
	public User createUser(User model) {
		entityManager.persist(model);
		User lastUser = getLastInsertedUser();
		return lastUser;
	}

	
	public User updateUser(int userId, User model) {
		
		
		User userFromDB = getUserById(userId);
		userFromDB.setName(model.getName());
		userFromDB.setAuthor(model.getAuthor());
		userFromDB.setCategory(model.getCategory());
		userFromDB.setPublication(model.getPublication());
		userFromDB.setPages(model.getPages());
		userFromDB.setPrice(model.getPrice());
		
		entityManager.flush();
		
		User updatedUser = getUser(userId);
		
		return updatedUser;
	}

	
	
	public boolean deleteUserById(int UserId) {
		User deletableUser = getUserById(UserId);
		entityManager.remove(deletableUser);
		
		//we are checking here that whether entityManager contains earlier deleted book or not
		// if contains then book is not deleted from DB that's why returning false;
		boolean status = entityManager.contains(deletableUser);
		if(status){
			return false;
		}
		return true;
	}
	
	
	private User getLastInsertedUser(){
		String hql = "from Book order by id DESC";
		Query query = entityManager.createQuery(hql);
		query.setMaxResults(1);
		User User = (User)query.getSingleResult();
		return User;
	}
}
