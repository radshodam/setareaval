import React from "react";
import { useTranslations } from "next-intl";
import TopSlideHome from "@/src/components/slider/medium-slider/TopSlideHome";
import CardGrid from "@/src/components/Card/CardGrid";
import BottomSliderHome from "@/src/components/slider/smallSlider/BottomSliderHome";
import CardEvents from "@/src/components/card-events/CardEvents";

const Home = () => {
  const t = useTranslations("Index");

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
