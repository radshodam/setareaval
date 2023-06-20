"use client";
import styled from "@emotion/styled";
import React from "react";
import ItemEvent from "./ItemEvent";
import { useTranslations } from "next-intl";
import MajmaImg from "@/public/images/home/news/image-23.webp";
import TandisImg from "@/public/images/home/news/image-22.webp";
import HotelImg from "@/public/images/home/news/image-21.webp";
import RecordImg from "@/public/images/home/news/image-20.webp";
import ButtonBlueLg from "../buttons/ButtonBlueLg";
import Link from "next/link";

const Wrapper = styled.div`
  max-width: 1266px;
  padding: 70px 15px;
  margin: 0 auto;
`;
const ContainerCard = styled.div`
  flex-wrap: nowrap;
  overflow: auto;
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  overflow-x: auto;
  scrollbar-width: none; /* Hide default scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide default scrollbar for Internet Explorer and Edge */
  flex-direction: row-reverse;

  ::-webkit-scrollbar {
    width: 0; /* Hide default scrollbar for Chrome, Safari, and Opera */
  }
  .box {
    margin: 0px 12px;
    padding: 0;
    background-color: pink;
    min-width: 300px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    height: 350px;
    width: 100%;
    min-width: 295px;
  }
`;

const HeaderText = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.72;
  letter-spacing: normal;
  color: #56596a;
  min-height: 60px;
  margin-bottom: 10px;
  margin-top: 50px;
`;
const CardEvents = () => {
  const t = useTranslations("News");
  // const { locale } = useParams;
  return (
    <Wrapper>
      <HeaderText>{t("head.title")}</HeaderText>

      <ContainerCard>
        <div className="box">
          {/* majma */}
          <ItemEvent
            firstTitle={t("dataNews.majma.firstTitle")}
            secondTitle={t("dataNews.majma.secondTitle")}
            href={t("dataNews.majma.href")}
            alt={t("dataNews.majma.alt")}
            src={MajmaImg}
          />
        </div>
        {/* tandis */}
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.tandis.firstTitle")}
            secondTitle={t("dataNews.tandis.secondTitle")}
            href={t("dataNews.tandis.href")}
            alt={t("dataNews.tandis.alt")}
            src={TandisImg}
          />
        </div>
        {/* hotel */}
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.hotel.firstTitle")}
            secondTitle={t("dataNews.hotel.secondTitle")}
            href={t("dataNews.hotel.href")}
            alt={t("dataNews.hotel.alt")}
            src={HotelImg}
          />
        </div>
        {/* record */}
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.record.firstTitle")}
            secondTitle={t("dataNews.record.secondTitle")}
            href={t("dataNews.record.href")}
            alt={t("dataNews.record.alt")}
            src={RecordImg}
          />
        </div>
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.majma.firstTitle")}
            secondTitle={t("dataNews.majma.secondTitle")}
            href={t("dataNews.majma.href")}
            alt={t("dataNews.majma.alt")}
            src={MajmaImg}
          />
        </div>
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.tandis.firstTitle")}
            secondTitle={t("dataNews.tandis.secondTitle")}
            href={t("dataNews.tandis.href")}
            alt={t("dataNews.tandis.alt")}
            src={TandisImg}
          />
        </div>
        {/* hotel */}
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.hotel.firstTitle")}
            secondTitle={t("dataNews.hotel.secondTitle")}
            href={t("dataNews.hotel.href")}
            alt={t("dataNews.hotel.alt")}
            src={HotelImg}
          />
        </div>
        {/* record */}
        <div className="box">
          <ItemEvent
            firstTitle={t("dataNews.record.firstTitle")}
            secondTitle={t("dataNews.record.secondTitle")}
            href={t("dataNews.record.href")}
            alt={t("dataNews.record.alt")}
            src={RecordImg}
          />
        </div>
      </ContainerCard>
      <ButtonBlueLg>
        <Link href={t("linkNews.href")}>{t("linkNews.title")}</Link>
      </ButtonBlueLg>
    </Wrapper>
  );
};

export default CardEvents;
