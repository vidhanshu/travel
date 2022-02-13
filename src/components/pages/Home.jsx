import React from "react";
import style from "../../styles/Home.module.scss";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
function Home() {
  return (
    <div className={style.home_container}>
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
