import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import "./SideBar.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Admin.scss";

import "react-toastify/dist/ReactToastify.css";
import PerfectScrollbar from "react-perfect-scrollbar";

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
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Admin;
