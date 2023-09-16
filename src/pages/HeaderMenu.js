import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Home, Cards, Cardano, ShoppingCart } from "iconsax-react";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const HeaderMenu = () => {
  const navigate = useNavigate();

  const count = useSelector((state) => state.addCart.count);

  return (
    <div className="header">
      <div className="header-content">
        <div>LOGO</div>
        <div className="list-icon">
          <Home
            onClick={() => {
              navigate("/home");
            }}
            size="32"
            color="#FF8A65"
            style={{ cursor: "pointer" }}
          />

          <Cards
            onClick={() => {
              navigate("/listCart");
            }}
            size="32"
            style={{ margin: "0 10px", cursor: "pointer" }}
            color="#FF8A65"
          />
          <Cardano size="32" color="#FF8A65" style={{ cursor: "pointer" }} />
        </div>
        <div className="Badge-icon">
          <Badge badgeContent={count} color="primary">
            <ShoppingCart size="32" color="#FF8A65" />
          </Badge>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderMenu;
