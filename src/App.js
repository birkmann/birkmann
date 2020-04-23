import React from "react";
import Header from "./components/header/header";
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
      <Header />
      <Intro />
    </div>
  );
}

export default App;
