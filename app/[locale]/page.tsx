import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import TopSlideHome from "@/src/components/slider/medium-slider/TopSlideHome";
import CardGrid from "@/src/components/Card/CardGrid";
import BottomSliderHome from "@/src/components/slider/smallSlider/BottomSliderHome";

const Home = () => {
  const t = useTranslations("Index");

  return (
    <div>
      <TopSlideHome />
      <CardGrid />
      <BottomSliderHome />
    </div>
  );
};

export default Home;
