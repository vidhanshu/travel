import React from "react";
import "../styles/global.module.scss";
import { Link } from "react-router-dom";
const STYLE = ["btn_primary", "btn_outline"];

const SIZE = ["btn_medium", "btn_large", "btn_small"];

function Button({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
  path,
  className,
}) {
  const checkBtnStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const checkBtnSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <a href={"#explore"}>
      <button
        className={`btn ${checkBtnStyle} ${checkBtnSize} ${className}`}
        onClick={onclick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
