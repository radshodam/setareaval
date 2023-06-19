import React from "react";
import SliderSmall from "./SliderSmall";
import ButtonBlueLg from "../../buttons/ButtonBlueLg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BottomSliderHome = () => {
  const t = useTranslations("linkWinner");
  return (
    <>
      <SliderSmall />
      <ButtonBlueLg>
        <Link href={t("href")}>{t("title")}</Link>
      </ButtonBlueLg>
    </>
  );
};

export default BottomSliderHome;
