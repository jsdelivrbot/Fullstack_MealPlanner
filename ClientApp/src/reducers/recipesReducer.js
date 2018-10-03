'use strict';

import { FETCH_RECIPES, DELETE_RECIPE } from '../constants/actionTypes';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_RECIPES:
            return action.payload.data
        case DELETE_RECIPE:
            return state.filter((recipe) => recipe.id !== action.payload)
        default:
            return state;
    }
}