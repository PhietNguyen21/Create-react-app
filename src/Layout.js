import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import User from "./components/User/user";
import Admin from "./components/Admin/admin";
import Homepage from "./components/Home/Homepage";
import ManagerUser from "./components/Admin/Content/ManagerUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login";
import App from "./App";
import { ToastContainer } from "react-toastify";
import Register from "./components/Auth/Resigter";
import ListQuiz from "./components/User/ListQuiz";
import NotFoundPage from "./components/Home/NotFoundPage";
import DetailsQuiz from "./components/User/DetailsQuiz";
const Layout = () => {
  let { userId } = useParams();
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/users" element={<ListQuiz />} />
        </Route>
        {/* Use Params */}
        <Route path="/quiz/:id" element={<DetailsQuiz />} />

        <Route path="admin" element={<Admin />}>
          <Route path="dashboard" index element={<DashBoard />} />
          <Route path="manger-user" element={<ManagerUser />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
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
