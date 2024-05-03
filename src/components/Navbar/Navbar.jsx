import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <Link to="/">
          <img src={logo} alt="" className="nav-logo" />
        </Link>
        <Link to="/profile">
          <img src={avatar} alt="" className="nav-avatar" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
