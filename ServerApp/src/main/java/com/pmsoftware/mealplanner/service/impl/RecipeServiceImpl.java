package com.pmsoftware.mealplanner.service.impl;

import com.pmsoftware.mealplanner.model.Recipe;
import com.pmsoftware.mealplanner.repositories.RecipeJPARepository;
import com.pmsoftware.mealplanner.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeJPARepository recipeJPARepository;

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeJPARepository.findAll();
    }

    @Override
    public Optional<Recipe> getRecipeForId(long id) {
        return recipeJPARepository.findById(id);
    }

    @Override
    public Recipe createRecipe(Recipe recipe) {
        return recipeJPARepository.save(recipe);
    }

    @Override
    public void updateRecipe(Recipe recipe, long id) {
        recipe.setId(id);
        recipeJPARepository.save(recipe);
    }

    @Override
    public void deleteRecipe(long id) {
        recipeJPARepository.deleteById(id);
    }
}
