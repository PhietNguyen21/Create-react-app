import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  const user = useSelector((state) => state.loginReducer);
  const { account, isAuth } = user;

  // console.log(account, isAuth);
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        <NavLink id="logo" to="/" className="navbar-brand">
          LOGO
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="users">
              User
            </NavLink>
            <NavLink className="nav-link" to="admin">
              Admin
            </NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">User</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            {!isAuth ? (
              <>
                <button
                  className="btn-login"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Login
                </button>
                <button
                  className="btn-signUp"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
