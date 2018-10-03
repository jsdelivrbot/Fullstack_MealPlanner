package com.pmsoftware.mealplanner.service;

import com.pmsoftware.mealplanner.model.Recipe;

import java.util.List;
import java.util.Optional;

public interface RecipeService {

    public List<Recipe> getAllRecipes();

    public Optional<Recipe> getRecipeForId(long id);

    public Recipe createRecipe(Recipe recipe);

    public void updateRecipe(Recipe recipe, long id);

    public void deleteRecipe(long id);

}
