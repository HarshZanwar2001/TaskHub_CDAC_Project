package com.app.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "issues")
public class Issue {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long issueId;
    
    @Column(nullable = false)
    private String issueTitle;
    
    @Column(columnDefinition = "TEXT")
    private String issueDescription;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private IssueStatus issueStatus = IssueStatus.TODO;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    @ToString.Exclude
    private Project projectId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee_id")
    private User assigneeId;
}

	
