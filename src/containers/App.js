import React, { Component } from "react";
import { Main } from '../containers'
import { NavBar } from '../components'

// Menu Items
const leftItems = [
  { as: "a", content: "Home", key: "home", icon: "home", url: "/"},
  { as: "a", content: "Users", key: "users", icon: "user", url: "users" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login", url: "/" },
  { as: "a", content: "Register", key: "register", url: "/" }
];


const App = () => (
    <NavBar leftItems={leftItems} rightItems={rightItems}>
        <Main/>
    </NavBar>
);

export default App
