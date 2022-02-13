import React from "react";
import style from "../styles/Cards.module.scss";
import { card_details } from "../api/card-details";
import CardItem from "./CardItem";
function Cards() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <h1
          style={{
            margin: "30px 0px",
            fontSize: "40px",
            textAlign: "center",
            padding: "5px",
          }}
        >
          Explore the world with us
        </h1>
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
      </div>
    </>
  );
}

export default Cards;
