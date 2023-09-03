import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import "./SideBar.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Admin.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
  const [Collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="Sidebar-container">
        <SideBar collapsed={Collapsed} />{" "}
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars
            onClick={() => {
              setCollapsed(!Collapsed);
            }}
          />
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Admin;
