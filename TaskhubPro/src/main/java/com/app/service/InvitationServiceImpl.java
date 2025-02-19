package com.app.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Invitation;
import com.app.repository.InvitationRepository;

import jakarta.mail.MessagingException;

@Service
public class InvitationServiceImpl implements InvitationService {

	@Autowired
	private InvitationRepository invitationRepository;
	
	@Autowired
	private EmailService emailService;
	
	@Override
	public void sendInvitation(String email, long projectId) throws MessagingException {
		String invitationToken=UUID.randomUUID().toString();
		
		Invitation invitation = new Invitation();
		invitation.setEmail(email);
		invitation.setProjectId(null);
		invitation.setToken(invitationToken);
		
		invitationRepository.save(invitation);
		
		String invitationLink="http://localhost:5173/accept_invitation?token="+invitationToken;
		emailService.sendEmailWithToken(email, invitationLink);
	}

	@Override
	public Invitation acceptInvitation(String token, long userId) throws Exception {
		Invitation invitation=invitationRepository.findByToken(token);
		if(invitation==null) {
			throw new Exception("Invalid invitation token");
		}
		return invitation;
	}

	@Override
	public String getTokenByUserMail(String userEmail) {
		Invitation invitation=invitationRepository.findByEmail(userEmail);
		return invitation.getToken();
	}

	@Override
	public void deleteToken(String token) {
		Invitation invitation=invitationRepository.findByToken(token);
		invitationRepository.delete(invitation);
		
	}

}
