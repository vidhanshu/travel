import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/CardItems.module.scss";
function CardItem({ to, img, heading, label }) {
  return (
    <div className={style.card_container}>
      <Link to="/" to={to}>
        <figure className={style.card_item_pic} label={label}>
          <img src={img} alt="Travel image" />
        </figure>
      </Link>
      <div className={style.card_content}>
        <h6>{heading}</h6>
      </div>
    </div>
  );
}

export default CardItem;
