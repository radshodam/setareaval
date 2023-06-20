import React from "react";
import TopSlideHome from "@/src/components/slider/mediumSlider/TopSlideHome";
import CardGrid from "@/src/components/Card/CardGrid";
import BottomSliderHome from "@/src/components/slider/smallSlider/BottomSliderHome";
import CardEvents from "@/src/components/cardEvents/CardEvents";

const Home = () => {
  return (
    <div>
      <TopSlideHome />
      <CardGrid />
      <BottomSliderHome />
      <CardEvents />
    </div>
  );
};

export default Home;
