"use strict";

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Navigation from './navigation';
import RecipesList from '../containers/recipesList';
import RecipeForm from '../containers/recipeForm';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route path="/recipes/:id" component={RecipeForm}/>
                            <Route path="/recipes/new" component={RecipeForm}/>
                            <Route path="/recipes" component={RecipesList}/> 
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}