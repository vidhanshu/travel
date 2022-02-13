import React, { useEffect, useState } from "react";
import style from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  const [click, setClick] = useState(false);
  const [checkScrollDown, setCheckScrollDown] = useState(false);
  const handleClick = () => {
    setClick((pre) => !pre);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  useEffect(() => {
    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "scroll",
      function () {
        // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          setCheckScrollDown(true);
        } else {
          setCheckScrollDown(false);
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }, []);
  return (
    <nav className={style.navbar}>
      <div
        className={`${style.navbar_container} ${
          checkScrollDown ? style.make_opacity_zero : style.make_opacity_one
        }`}
      >
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
