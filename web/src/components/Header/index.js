import React from "react";
import { Navbar, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import style from "./style";

const Header = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Link to="/">
        <Navbar.Brand>
            {/* <img
              alt="Logo"
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />&nbsp; */}&nbsp;
            Stock
        </Navbar.Brand>
      </Link>
      <Link className="nav-link" to="/register">
        <style.NavLink>Register</style.NavLink>
      </Link>
      {user.username ? (
        <Link className="nav-link">
          <style.NavLink>{`Welcome ${user.username}`}</style.NavLink>
        </Link>
      ) : (
        ""
      )}
    </Navbar>
  );
};

export default connect(state => ({ user: state.user }))(Header);
