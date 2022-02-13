import React from "react";
import style from "../styles/ImageOverlay.module.scss";
function ImageOverlay({ img, onClick }) {
  return (
    <div onClick={onClick} className={style.img_container}>
      <i onClick={onClick} className="fas fa-times"></i>
      <figure>
        <img src={img} />
      </figure>
    </div>
  );
}

export default ImageOverlay;
