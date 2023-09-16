import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderMenu from "./pages/HeaderMenu";
import HomePage from "./components/Cart/HomePage";
import ListCard from "./components/Cart/ListCard";
class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HeaderMenu />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/listCart" element={<ListCard />}></Route>
        </Route>
      </Routes>
    );
  }
}

export default App;
