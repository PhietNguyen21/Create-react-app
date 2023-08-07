import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Mycomponent from "./components/Mycomponents";
import React from "react";

const App = () => {
  return (
    <>
      <div className="app-container">hello world</div>
    </>
  );
};

export default App;
