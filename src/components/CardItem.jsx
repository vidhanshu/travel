import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/CardItems.module.scss";
import ImageOverlay from "./ImageOverlay";
function CardItem({ to, img, heading, label }) {
  const [overlay, setOverlay] = React.useState(false);
  return (
    <>
      {overlay ? (
        <ImageOverlay
          onClick={() => {
            setOverlay(false);
          }}
          img={img}
        />
      ) : null}
      <div className={style.card_container}>
        <figure className={style.card_item_pic} label={label}>
          <img
            onClick={() => {
              setOverlay(true);
            }}
            src={img}
            alt="Travel image"
          />
          <Link to="/" to={to}>
            <button>{label}</button>
          </Link>
        </figure>
        <div className={style.card_content}>
          <h6>{heading}</h6>
        </div>
      </div>
    </>
  );
}

export default CardItem;
