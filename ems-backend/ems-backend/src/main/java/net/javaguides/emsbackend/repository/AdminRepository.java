package net.javaguides.emsbackend.repository;

import net.javaguides.emsbackend.entity.Admin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByUsername(String username);
}
