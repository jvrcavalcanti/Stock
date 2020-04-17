import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Icon from "../../images/icon.png";
import "./style.scss";

const Header = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-5" id="header">
      <Link to="/" className="navbar-brand">
        <Navbar.Brand>
            {<img
              alt="Logo"
              src={Icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />}&nbsp;
            Stock
        </Navbar.Brand>
      </Link>
      <Link className="nav-link" to="/register">
        <label className="headerlink">Register</label>
      </Link>
      <Link className="nav-link" to="/login">
        <label className="headerlink">Login</label>
      </Link>
      {user.username ? (
        <>
          <Link className="nav-link" to="/product/register">
            <label className="headerlink">Product Register</label>
          </Link>
          <Link className="nav-link" to="#">
            <label className="headerlink">{`Welcome ${user.username}`}</label>
          </Link>
        </>
      ) : (
        ""
      )}
    </Navbar>
  );
};

export default connect(
  state => ({ user: state.user })
)(Header);
