package com.pmsoftware.mealplanner.controllers;

import com.pmsoftware.mealplanner.model.Recipe;
import com.pmsoftware.mealplanner.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{recipeID}")
    public Recipe getRecipeForId(@PathVariable("recipeID") long id) {
        Optional<Recipe> recipe = recipeService.getRecipeForId(id);
        if(!recipe.isPresent()) {
            throw new RuntimeException(String.format("Recipe with id - %d not found", id));
        }
        return recipe.get();
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody Recipe recipe) {
        Recipe createdRecipe = recipeService.createRecipe(recipe);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(("/{id}"))
                .buildAndExpand(createdRecipe.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{recipeID}")
    public ResponseEntity<Object> update(@RequestBody Recipe recipe, @PathVariable("recipeID") long id) {
        Optional<Recipe> recipeOptional = recipeService.getRecipeForId(id);
        if(!recipeOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        recipeService.updateRecipe(recipe, id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{recipeID}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("recipeID") long id) {
        recipeService.deleteRecipe(id);
    }
}
