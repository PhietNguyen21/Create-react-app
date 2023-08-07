import "./App.scss";

import React from "react";
import Header from "./components/Header/header";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div>
        testLink
        <button>
          <Link to="/users">Go to Page User</Link>
        </button>
        <button>
          <Link to="/Admin">Go to Page Admin</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
