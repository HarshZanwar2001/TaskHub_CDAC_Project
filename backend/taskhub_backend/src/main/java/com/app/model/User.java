package com.app.model;


import lombok.*;
import java.util.HashSet;
import java.util.Set;
import jakarta.persistence.*;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    
    @Column(nullable = false, unique = true)
    private String userName;
    
    @Column(nullable = false, unique = true)
    private String userEmail;
    
    @Column(nullable = false)
    private String userPassword;
    
    @ManyToMany(mappedBy = "members", fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Project> projects = new HashSet<>();
    
}


