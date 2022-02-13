import React from "react";
import Button from "./Button";
import vid from "../assets/video-1.mp4";
import style from "../styles/HeroSection.module.scss";
function HeroSection() {
  return (
    <div className={style.hero_section}>
      <video src={vid} autoPlay loop muted></video>
      <div className={style.overlay}></div>
      <div className={style.content}>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className={style.hero_btn}>
          <Button
            className={style.btn}
            buttonStyle="btn_outline"
            buttonSize="btn_small"
            path="/"
          >
            GET STARTED
          </Button>
          <Button
            className={style.btn}
            buttonStyle="btn_primary"
            buttonSize="btn_small"
            path="/"
          >
            WATCH NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
