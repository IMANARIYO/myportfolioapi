package com.inventorysystem.api.controller;

import com.inventorysystem.api.model.AuthenticationResponse;
import com.inventorysystem.api.model.User;
import com.inventorysystem.api.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class AuthenticationController {
private final AuthenticationService authService;
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);
    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse>register(

            @RequestBody User request
    ){
        logger.debug("Entering doSomething method");
        return ResponseEntity.ok( authService.register(request));
    }
    @PostMapping("/login")
    public  ResponseEntity<AuthenticationResponse> login(@RequestBody User request){
        return  ResponseEntity.ok(authService.authenticate(request));
    }

}
