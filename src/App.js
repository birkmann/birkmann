import React from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Intro from "./components/intro/intro";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Header />
      <Intro />
      <div className='container test'>
        <h2>Headline</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto
          eum, nisi soluta eaque explicabo iure cum maiores praesentium nostrum
          voluptate veritatis tenetur earum, sit labore maxime consequatur
          expedita voluptates?
        </p>
      </div>
    </div>
  );
}

export default App;
