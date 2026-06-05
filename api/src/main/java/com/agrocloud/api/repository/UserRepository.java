package com.agrocloud.api.repository;
import com.agrocloud.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {}
