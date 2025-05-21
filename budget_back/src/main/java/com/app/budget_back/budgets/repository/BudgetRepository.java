package com.app.budget_back.budgets.repository;

import com.app.budget_back.budgets.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
}