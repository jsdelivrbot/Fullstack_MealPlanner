"use strict";

import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchRecipes, createRecipe, updateRecipe } from '../actions/recipeActions';
import { myInput, myTextArea, ingredientFields, tagsFields } from '../common/inputFields';

class RecipeForm extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            if(!this.props.recipe) {
                this.props.fetchRecipes()
            }
            this.props.initialize(this.props.recipe);
        }
    }

    onSubmit(values) {
        const callback = () => {
            this.props.history.push('/recipes'); 
        };
        if(values.id) {
            this.props.updateRecipe(values, callback);
        } else {
            this.props.createRecipe(values, callback);
        }
    }

    render() {
        const { handleSubmit } = this.props; 

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='form-group'>
                <Field 
                    label='Name'
                    name='name'
                    type='text'
                    component={myInput}/>
                <FieldArray name="ingredients" component={ingredientFields} />
                <Field 
                    label='Formula'
                    name='formula'
                    type='textarea'
                    component={myTextArea}/>
                <Field 
                    label='Number of portions'
                    name='portionsNumber'
                    type='number'
                    component={myInput}/>
                <Field 
                    label='Time to prepare [minutes]'
                    name='preparationTime'
                    type='number'
                    component={myInput}/>
                <Field 
                    label='Maximum days in the fridge'
                    name='daysInFridge'
                    type='number'
                    component={myInput}/>  
                <Field 
                    label='Can be frozen'
                    name='canBeFrozen'
                    type='checkbox'
                    component={myInput}/>  
                <Field 
                    label='Carbs [g]'
                    name='carbs'
                    type='number'
                    component={myInput}/>  
                <Field 
                    label='Fats [g]'
                    name='fats'
                    type='number'
                    component={myInput}/>  
                <Field 
                    label='Proteins [g]'
                    name='proteins'
                    type='number'
                    component={myInput}/>  
                <FieldArray name="tags" component={tagsFields} />
                <button>Save</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
  
    return errors;
}

function mapStateToProps({ recipes }, ownProps) { 
    return { recipe: recipes.find((recipe) => recipe.id == ownProps.match.params.id) };
}

  
export default reduxForm({
    validate, 
    form: 'RecipeForm'
})(
    connect(mapStateToProps, { fetchRecipes, createRecipe, updateRecipe })(RecipeForm)
);