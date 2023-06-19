import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

const Home = () => {
  const t = useTranslations("Index");

  return (
    <div>
      <h1 className="text-light"> خدمات ستاره اول</h1>
      <h1 className="exo text-light"> Setare Aval</h1>
    </div>
  );
};

export default Home;