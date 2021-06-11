import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../css/Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
        />
        <img
          onClick={() => history.push("/Profile")}
          className="nav__avatar"
          src="https://img.pngio.com/no-avatar-png-transparent-png-download-for-free-3856300-trzcacak-png-avatar-920_954.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}
