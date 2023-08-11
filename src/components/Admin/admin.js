import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import "./SideBar.scss";
import { useState } from "react";
const Admin = (props) => {
  const [Collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="Sidebar-container">
        <SideBar collapsed={Collapsed} />{" "}
      </div>
      <div className="sidebar-content">
        <FaBars
          onClick={() => {
            setCollapsed(!Collapsed);
          }}
        />
      </div>
    </div>
  );
};

export default Admin;
