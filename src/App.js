import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Mycomponent from "./components/Mycomponents";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        Hello World &amp; Phiet Nguyen
        <Mycomponent></Mycomponent>
      </div>
    );
  }
}

export default App;
