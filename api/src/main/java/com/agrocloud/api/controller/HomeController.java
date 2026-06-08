package com.agrocloud.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class HomeController {

    @GetMapping("/summary")
    public ResponseEntity<Map<String, String>> getSummary() {
        Map<String, String> summary = Map.of(
            "userName", "Fabricio",
            "currentTemperature", "28°C",
            "weatherCondition", "Ensolarado"
        );
        return ResponseEntity.ok(summary);
    }
}