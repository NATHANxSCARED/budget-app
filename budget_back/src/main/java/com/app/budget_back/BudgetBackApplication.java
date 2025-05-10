package com.app.budget_back;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;

@SpringBootApplication
public class BudgetBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BudgetBackApplication.class, args);
	}


}
