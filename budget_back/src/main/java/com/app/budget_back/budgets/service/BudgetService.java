package com.app.budget_back.budgets.service;

import com.app.budget_back.budgets.dto.BudgetRequest;
import com.app.budget_back.budgets.dto.BudgetResponse;
import com.app.budget_back.budgets.model.Budget;
import com.app.budget_back.budgets.repository.BudgetRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class BudgetService {

    private final BudgetRepository repository;

    public BudgetService(BudgetRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public BudgetResponse createBudget(BudgetRequest request) {
        Budget budget = new Budget();
        budget.setCategory(request.category());
        budget.setType(request.type());
        budget.setAmount(request.amount());
        budget.setDescription(request.description());
        budget.setDate(request.date());

        Budget savedBudget = repository.save(budget);
        return BudgetResponse.fromEntity(savedBudget);
    }
}