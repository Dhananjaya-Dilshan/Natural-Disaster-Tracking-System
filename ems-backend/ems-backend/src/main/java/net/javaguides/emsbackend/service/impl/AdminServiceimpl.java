package net.javaguides.emsbackend.service.impl;

import net.javaguides.emsbackend.entity.Admin;
import net.javaguides.emsbackend.repository.AdminRepository;
import net.javaguides.emsbackend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class AdminServiceimpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean authenticate(String username, String password) {
        Admin admin = adminRepository.findByUsername(username);
        if (admin != null) {
            return admin.getPassword().equals(password);
        }
        return false;
    }
}
