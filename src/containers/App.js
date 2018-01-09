import React, { Component } from "react";
import { Main } from '../containers'
import { NavBar } from '../components'


// Menu Items
const leftItems = [
  { content: "Home", key: "home", icon: "home", url: "/"},
  { content: "Theme", key: "theme", icon: "theme", url: "theme" },
  { content: "3 Columns", key: "three", icon: "write", url: "three" },
];
const rightItems = [
  { content: "Login", key: "login", url: "/" },
  { content: "Register", key: "register", url: "register"  }
];


const App = () => (
    <NavBar id="topFixedNavBar" leftItems={leftItems} rightItems={rightItems}>
        <Main/>
    </NavBar>
);

export default App
