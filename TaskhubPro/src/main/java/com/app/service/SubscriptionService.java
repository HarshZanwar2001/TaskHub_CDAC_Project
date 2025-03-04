package com.app.service;

import com.app.model.PlanType;
import com.app.model.Subscription;
import com.app.model.User;

public interface SubscriptionService {
	
	Subscription createSubscription(User user);
	Subscription getUsersSubscription(Long userId)throws Exception;
	Subscription upgradeSubscription(Long userId,PlanType planType);
	boolean isValid(Subscription subscription);

}
