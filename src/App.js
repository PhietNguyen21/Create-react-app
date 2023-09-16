import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./share/Header";
import { Home } from "@mui/icons-material";
const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
