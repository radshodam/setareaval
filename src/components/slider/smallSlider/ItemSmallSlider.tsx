import React from "react";

import DefaultProfileImage from "@/public/images/home/profiles/defaultProfile.webp";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";

type ITemSlider = {
  name: string;
  description: string;
  dateLottery: string;
  titleDateLottery: string;
  keyCity: string;
  cityName: string;
  srcProfile?: StaticImageData;
};

const ItemSmallSlider = ({
  name,
  description,
  dateLottery,
  titleDateLottery,
  keyCity,
  cityName,
  srcProfile,
}: ITemSlider) => {
  const { locale } = useParams();
  return (
    <div className="SmallSwiper">
      <ul className={`${locale === "en" ? "ltr" : "rtl"} list`}>
        <li>{name}</li>
        <li>{description}</li>
        <li>
          <span>{titleDateLottery}</span>
          <span>{dateLottery}</span>
        </li>
        <li>
          <span>{keyCity}</span>
          <span>{cityName}</span>
        </li>
      </ul>
      <div>
        {srcProfile ? (
          <Image
            style={{ borderRadius: "25px" }}
            src={srcProfile}
            alt="default"
            width={200}
            height={200}
          />
        ) : (
          <Image src={DefaultProfileImage} alt="default" width={180} height={180} />
        )}
      </div>
    </div>
  );
};

export default ItemSmallSlider;
