package com.app.budget_back.budgets.dto;

import com.app.budget_back.budgets.model.Budget;
import java.time.format.DateTimeFormatter;

public record BudgetResponse(
        Long id,
        String category,
        String type,
        Integer amount,
        String description,
        String date,
        String createdAt
) {
    public static BudgetResponse fromEntity(Budget budget) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return new BudgetResponse(
                budget.getId(),
                budget.getCategory().name(),
                budget.getType().name(),
                budget.getAmount(),
                budget.getDescription(),
                budget.getDate().format(formatter),
                budget.getCreatedAt() != null ? budget.getCreatedAt().toString() : null
        );
    }
}
