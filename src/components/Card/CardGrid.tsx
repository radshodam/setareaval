"use client";
import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import CardItems from "./CardItems";
//services Image
import Sad from "@/public/images/home/services/sad.svg";
import SetareYek from "@/public/images/home/services/setare-yek.svg";
import SetareSim from "@/public/images/home/services/setare-sim.svg";
import Sarmayegozari from "@/public/images/home/services/sarmayegozari.svg";
import Rondtarin from "@/public/images/home/services/rondtarin.svg";
import Foroush from "@/public/images/home/services/forosh-sazmani.svg";
import SetareYekCode from "@/public/images/home/services/SY011.png";

const CardGridContainer = styled.div`
  max-width: 1266px;
  padding: 20px 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  flex-direction: row-reverse;
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
  margin-bottom: 5px;
  margin-top: 130px;
`;

const CardGrid = () => {
  const t = useTranslations("Services");
  const { locale } = useParams();
  // className={`${locale === "en" ? "ltr" : "rtl"}`}

  return (
    <section>
      <HeaderText>{t("head.title")}</HeaderText>
      <CardGridContainer>
        {/* service1 */}
        <CardItems
          titleCode={t("data.service1.code")}
          imgSrc={SetareYekCode}
          description={t("data.service1.description")}
          hrefLink={t("data.service1.link.href")}
          titleLink={t("data.service1.link.title")}
        />
        {/* service2 */}
        <CardItems
          titleCode={t("data.service2.code")}
          imgSrc={SetareYek}
          description={t("data.service2.description")}
          hrefLink={t("data.service2.link.href")}
          titleLink={t("data.service2.link.title")}
        />
        {/* service3 */}
        <CardItems
          titleCode={t("data.service3.code")}
          imgSrc={Rondtarin}
          description={t("data.service3.description")}
          hrefLink={t("data.service3.link.href")}
          titleLink={t("data.service3.link.title")}
        />
        {/* service4 */}
        <CardItems
          titleCode={t("data.service4.code")}
          imgSrc={SetareSim}
          description={t("data.service4.description")}
          hrefLink={t("data.service4.link.href")}
          titleLink={t("data.service4.link.title")}
        />
        {/* service5 */}
        <CardItems
          titleCode={t("data.service5.code")}
          imgSrc={Sarmayegozari}
          description={t("data.service5.description")}
          hrefLink={t("data.service5.link.href")}
          titleLink={t("data.service5.link.title")}
        />
        {/* service6 */}
        <CardItems
          titleCode={t("data.service6.code")}
          imgSrc={Foroush}
          description={t("data.service6.description")}
          hrefLink={t("data.service6.link.href")}
          titleLink={t("data.service6.link.title")}
        />
        {/* service7 */}
        <CardItems
          titleCode={t("data.service7.code")}
          imgSrc={Sad}
          description={t("data.service7.description")}
          hrefLink={t("data.service7.link.href")}
          titleLink={t("data.service7.link.title")}
        />
      </CardGridContainer>
    </section>
  );
};

export default CardGrid;
