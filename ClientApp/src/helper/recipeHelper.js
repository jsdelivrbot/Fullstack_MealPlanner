'use strict';

export function countCalories(recipe) {
    return recipe.fats * 9 + recipe.carbs * 4 + recipe.proteins * 4;
}

export function getFormattedTags(recipe) {
    return recipe.tags.map((tag) => tag.name).join(',');
}