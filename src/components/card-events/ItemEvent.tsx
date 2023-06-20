"use client";
import styled from "@emotion/styled";
import React from "react";
import ImgF from "@/public/images/home/news/image-1.webp";
import Image, { StaticImageData } from "next/image";
const CardWrapper = styled.div`
  object-fit: contain;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  height: fit-content;
  width: 100%;
  min-width: 229px;
  /* transition: height 0.3s; */
  transition: all 0.4s ease-out, left 0.4s ease-out;
  img {
    object-fit: cover;
  }
  .previewBox {
    position: absolute;
    bottom: -250px;
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.9;
    transition: all 0.4s ease-out, left 0.4s ease-out;
  }
  &:hover {
    .previewBox {
      height: 55%;
      bottom: 0px;
    }
  }
  @media (max-width: 576px) {
    .previewBox {
      height: 55%;
      bottom: 0px;
    }
  }
`;

const Text = styled.p`
  color: #fff;
  font-size: 13px;
  padding: 6px;
  font-weight: 800;
  text-align: center;

`;
const Text2 = styled.p`
  color: #fff;
  font-size: 12px;
  padding: 6px;
  font-weight: 400;
  text-align: center;
`;

type Items = {
  firstTitle: string;
  secondTitle: string;
  href: string;
  alt: string;
  src: StaticImageData;
};
const ItemEvent = ({ firstTitle, secondTitle, href, alt, src }: Items) => {
  return (
    <CardWrapper>
      <Image alt="title" src={src} width={299} height={360} />
      <div className="previewBox">
        <Text>{firstTitle}</Text>
        <Text2>{secondTitle}</Text2>
      </div>
    </CardWrapper>
  );
};

export default ItemEvent;
