package com.app.budget_back.budgets.controller;

import com.app.budget_back.budgets.dto.BudgetRequest;
import com.app.budget_back.budgets.dto.BudgetResponse;
import com.app.budget_back.budgets.model.Budget;
import com.app.budget_back.budgets.service.BudgetService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    private final BudgetService budgetService;

    public BudgetController(BudgetService service) {
        this.budgetService = service;
    }

    @PostMapping
    public ResponseEntity<BudgetResponse> createBudget(
            @Valid @RequestBody BudgetRequest request) {
        BudgetResponse response = budgetService.createBudget(request);
        return ResponseEntity.ok(response);
    }
}
