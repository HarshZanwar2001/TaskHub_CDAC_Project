package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long> {

	public List<Issue>findByProjectID(Long id);
}
