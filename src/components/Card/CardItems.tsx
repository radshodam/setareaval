import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import React from "react";
import MoreButton from "../buttons/MoreButton";
import Link from "next/link";
import { useParams } from "next/navigation";

const Card = styled.div`
  flex: 0 0 calc(25% - 20px);
  justify-content: center;
  padding: 20px;
  @media (max-width: 1200px) {
    flex: 0 0 calc(33% - 20px);
  }
  @media (max-width: 995px) {
    flex: 0 0 calc(50% - 20px);
  }
  @media (max-width: 576px) {
    flex: 0 0 calc(100% - 20px);
  }
`;

const BoxImage = styled.div`
  width: 110px;
  height: 100px;
  border-radius: 30px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: #fcfcfc;
  margin: auto;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const BoxTextCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 22px;
    line-height: 1.71;
    color: #56596a;
    text-align: center;
    font-weight: 500;
    margin: 13px;
  }
  h4 {
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: justify;
    font-weight: 400;
    margin: 1px;
    min-height: 100px;
    max-height: 100px;
    @media (min-width: 995px) {
      min-height: 139px;
      max-height: 139px;
    }
  }
`;

type CardItemProps = {
  titleCode: string;
  imgSrc: StaticImageData;
  description: string;
  hrefLink: string;
  titleLink: string;
};

const CardItems = ({
  titleCode,
  imgSrc,
  description,
  hrefLink,
  titleLink,
}: CardItemProps) => {
  const { locale } = useParams();

  return (
    <>
      <Card className={`${locale === "en" ? "ltr " : "rtl"}`}>
        <BoxImage>
          <Image alt={titleCode} src={imgSrc} width={76} height={76} priority />
        </BoxImage>
        <BoxTextCard>
          <h3>{titleCode}</h3>
          <h4>{description}</h4>
        </BoxTextCard>

        <MoreButton>
          <Link href={hrefLink}>{titleLink}</Link>
        </MoreButton>
      </Card>
    </>
  );
};

export default CardItems;
