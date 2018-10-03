package com.pmsoftware.mealplanner.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String formula;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="recipe_id")
    private Set<Ingredient> ingredients = new HashSet<>();

    private int portionsNumber;

    private int preparationTime;

    private int daysInFridge;

    private boolean canBeFrozen;

    private int carbs;

    private int fats;

    private int proteins;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "join_recipes_tags",
                joinColumns = {@JoinColumn(name = "recipe_id")},
                inverseJoinColumns = {@JoinColumn(name = "tag_id")})
    private Set<Tag> tags = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFormula() {
        return formula;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }

    public Set<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Set<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public int getPortionsNumber() {
        return portionsNumber;
    }

    public void setPortionsNumber(int portionsNumber) {
        this.portionsNumber = portionsNumber;
    }

    public int getPreparationTime() {
        return preparationTime;
    }

    public void setPreparationTime(int preparationTime) {
        this.preparationTime = preparationTime;
    }

    public int getDaysInFridge() {
        return daysInFridge;
    }

    public void setDaysInFridge(int daysInFridge) {
        this.daysInFridge = daysInFridge;
    }

    public boolean getCanBeFrozen() {
        return canBeFrozen;
    }

    public void setCanBeFrozen(boolean canBeFrozen) {
        this.canBeFrozen = canBeFrozen;
    }

    public int getCarbs() {
        return carbs;
    }

    public void setCarbs(int carbs) {
        this.carbs = carbs;
    }

    public int getFats() {
        return fats;
    }

    public void setFats(int fats) {
        this.fats = fats;
    }

    public int getProteins() {
        return proteins;
    }

    public void setProteins(int proteins) {
        this.proteins = proteins;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
}
