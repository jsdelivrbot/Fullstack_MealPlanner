"use strict";

import axios from 'axios'

import { FETCH_RECIPES, FETCH_RECIPE, CREATE_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from '../constants/actionTypes';

const ROOT_URL = 'http://localhost:5000/api/';

export function fetchRecipes() {
    const request = axios.get(`${ROOT_URL}recipes`)

    return {
        type: FETCH_RECIPES,
        payload: request
    }
}

export function fetchRecipe(id) {
    const request = axios.get(`${ROOT_URL}recipes/${id}`)
    return {
        type: FETCH_RECIPE,
        payload: request
    }
}

export function createRecipe(values, callback) {
    const request = axios.post(`${ROOT_URL}recipes`, values)
        .then(() => callback());

    return {
        type: CREATE_RECIPE,
        payload: request
    }
}

export function updateRecipe(values, callback) {
    const request = axios.put(`${ROOT_URL}recipes/${values.id}`, values)
        .then(() => callback());

    return {
        type: UPDATE_RECIPE,
        payload: request
    }
}

export function deleteRecipe(id) {
    const request = axios.delete(`${ROOT_URL}recipes/${id}`)

    return {
        type: DELETE_RECIPE,
        payload: id
    }
}