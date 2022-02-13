import React, { useEffect, useState } from "react";
import style from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((pre) => !pre);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_container}>
        <Link to="/">
          <h1 className={style.logo}>
            VTRL <i className="fab fa-accusoft"></i>
          </h1>
        </Link>
        <div onClick={handleClick} className={style.menu_icon}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={
            click ? `${style.nav_menu} ${style.active}` : `${style.nav_menu}`
          }
        >
          <li>
            <Link to="/" className={style.nav_link} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMobileMenu}>
              products
            </Link>
          </li>
          <li>
            <Button
              path="/sign-up"
              buttonStyle="btn_outline"
              buttonSize="btn_small"
              onclick={closeMobileMenu}
            >
              sign up
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
