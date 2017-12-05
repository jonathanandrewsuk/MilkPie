import React, { Component } from "react";
import { Main } from '../containers'
import { NavBar, RegisterModal } from '../components'


// Menu Items
const leftItems = [
  { as: "a", content: "Home", key: "home", icon: "home", url: "/"},
  { as: "a", content: "Form", key: "form", icon: "write", url: "form" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login", url: "/" },
  { as: "a", content: "Register", key: "register", url: "/"  }
];


const App = () => (
    <NavBar id="topFixedNavBar" leftItems={leftItems} rightItems={rightItems}>
        <Main/>
    </NavBar>
);

export default App
