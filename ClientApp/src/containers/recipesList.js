"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchRecipes, deleteRecipe } from '../actions/recipeActions';
import { countCalories, getFormattedTags } from '../helper/recipeHelper';

class RecipesList extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    onEditClick(id) {
        this.props.history.push(`/recipes/${id}`);
    }

    onDeleteClick(id) {
        this.props.deleteRecipe(id);
    }

    render() {
        var createRecipeRow = (recipe) => {
            return (
                <tr key={recipe.id}>
                    <td>{recipe.name}</td>
                    <td>{recipe.portionsNumber}</td>
                    <td>{recipe.preparationTime}</td>
                    <td>{countCalories(recipe)}</td>
                    <td>{getFormattedTags(recipe)}</td>
                    <td>
                        <button onClick={this.onEditClick.bind(this, recipe.id)}>
                            Edit
                        </button>
                        <button onClick={this.onDeleteClick.bind(this, recipe.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        }
        
        if(!this.props.recipes || this.props.recipes.length == 0) {
            return 'Loading recipes...';
        }

        return (
            <div>
                <Link className='btn btn-primary' to='/recipes/new'>
                    Add a recipe
                </Link>

                <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Recipe</th>
                            <th>Portions</th>
                            <th>Time</th>
                            <th>Kcal</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.recipes.map(createRecipeRow, this)}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps({recipes}) {
    return {recipes};
}

export default connect(mapStateToProps, { fetchRecipes, deleteRecipe })(RecipesList);