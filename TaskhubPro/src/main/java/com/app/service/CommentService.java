package com.app.service;

import java.util.List;

import com.app.model.Comment;

public interface CommentService {
	

	Comment createComment(Long issueId,Long useId,String comment) throws Exception;
	
	void deleteComment(Long commentId,Long userId) throws Exception;
	
	List<Comment> findCommentByIssueId(Long issueId);
}
