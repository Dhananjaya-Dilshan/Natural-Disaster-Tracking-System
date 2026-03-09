package net.javaguides.emsbackend.controller;


import lombok.AllArgsConstructor;
import net.javaguides.emsbackend.dto.AdminDto;
import net.javaguides.emsbackend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/admin/login")
@CrossOrigin("*")

public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<String> login(@RequestBody AdminDto loginRequest) {
        if (adminService.authenticate(loginRequest.getUsername(), loginRequest.getPassword())) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
    }

}
