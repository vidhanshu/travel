import React from "react";
import style from "../styles/Cards.module.scss";
import { card_details } from "../api/card-details";
import CardItem from "./CardItem";
function Cards() {
  return (
    <div className={style.cards_container}>
      {card_details.map((e, idx) => {
        return (
          <CardItem
            key={idx}
            to={e.to}
            heading={e.heading}
            img={e.img}
            label={e.label}
          />
        );
      })}
    </div>
  );
}

export default Cards;
