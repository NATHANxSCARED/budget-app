package com.app.budget_back.budgets.dto;

import com.app.budget_back.budgets.model.Budget;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDate;

public record BudgetRequest(
        @NotNull(message = "La catégorie est obligatoire")
        Budget.Category category,

        @NotNull(message = "Le type est obligatoire")
        Budget.Type type,

        @Positive(message = "Le montant doit être positif")
        @NotNull(message = "Le montant est obligatoire")
        Integer amount,

        String description,

        @NotNull(message = "La date est obligatoire")
        LocalDate date
) {}