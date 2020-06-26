import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory";
import Slider3in8 from "../../components/slider-3-un-8-sec/Slider3in8";
import Slider from "./slider/Slider";

const HomePage = () => {
  return (
    <div className="homepage">
      <Slider />
      <Slider3in8 sliderName={"топ продажу".toUpperCase()} />
      <Directory />
    </div>
  );
};

export default HomePage;
