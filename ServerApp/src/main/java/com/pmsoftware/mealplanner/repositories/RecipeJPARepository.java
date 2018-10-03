package com.pmsoftware.mealplanner.repositories;

import com.pmsoftware.mealplanner.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeJPARepository extends JpaRepository<Recipe, Long> {
}
