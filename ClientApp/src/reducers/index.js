'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RecipesReducer from './recipesReducer';

const rootReducer = combineReducers({
    form: formReducer,
    recipes: RecipesReducer
});

export default rootReducer;