// src/main/java/com.example.library.repository.UserRepository.java

package com.project.lms.repository;

import com.project.lms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
