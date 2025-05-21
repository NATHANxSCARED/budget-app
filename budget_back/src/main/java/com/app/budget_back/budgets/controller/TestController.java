package com.app.budget_back.budgets.controller;

import com.app.budget_back.budgets.dto.BudgetRequest;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @PostMapping
    public String testValidation(@Valid @RequestBody BudgetRequest request) {
        return "Validation successful!";
    }

    // Ajoutez ceci si vous voulez aussi un GET
    @GetMapping
    public String testGet() {
        return "GET endpoint works!";
    }
}