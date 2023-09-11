import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/user";
import Admin from "./components/Admin/admin";
import Homepage from "./components/Home/Homepage";
import ManagerUser from "./components/Admin/Content/ManagerUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login";
import App from "./App";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/users" element={<User />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="dashboard" index element={<DashBoard />} />
          <Route path="manger-user" element={<ManagerUser />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
