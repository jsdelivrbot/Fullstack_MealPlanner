"use strict";

import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Menu>
            <Menu.Item
                as = { Link } to = "/"
                name = "home">
                Home
            </Menu.Item>
            <Menu.Item
                as = { Link } to = "/recipes"
                name = "myRecipes">
                My Recipes
            </Menu.Item>
            <Menu.Item
                as={ Link } to="/planner"
                name="planner">
                Planner
            </Menu.Item>

            <Menu.Menu position='right'>
                <Dropdown item text="piechos" fi="right">
                    <Dropdown.Menu>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    )
}