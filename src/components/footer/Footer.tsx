"use client";
import styled from "@emotion/styled";
import React from "react";
import TwitterWhite from "@/public/images/logo/social/twitter-icon.svg";
import LinkedinWhite from "@/public/images/logo/social/linkdin-icon.svg";
import InstagramWhite from "@/public/images/logo/social/Instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type SocialIcon = {
  id: number;
  alt: string;
  icon: any;
  href: string;
};
const socialIconWhite: SocialIcon[] = [
  {
    id: 1,
    alt: "Linkedin",
    icon: LinkedinWhite,
    href: "https://www.linkedin.com/company/setareaval/",
  },
  {
    id: 2,
    alt: "Instagram",
    icon: InstagramWhite,
    href: "https://www.instagram.com/setareaval_ir/",
  },
  {
    id: 3,
    alt: "twitter",
    icon: TwitterWhite,
    href: "https://twitter.com/setareaval_ir",
  },
];

const WrapperFooter = styled.div`
  background: #efefef;
  margin-top: 45px;
  width: 100%;
  .inner-footer {
    max-width: 666px;
    margin: 0 auto;
  }
  .d-flex {
    display: flex;
    justify-content: center;
    padding-top: 15px;
    nav {
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 15px;
      margin-left: 35px;
      a {
        text-decoration: none;
        color: #56596a;
        transition: all ease-in 0.3ms;
        &:hover {
          color: #28292d;
        }
      }
      p {
        padding: 2px;
        margin: 0;
      }
    }
  }
  .social {
    display: flex;
    justify-content: space-around;
    max-width: 250px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    .icon {
      width: 32px;
      border-radius: 100%;
      background: #56596a;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 28px;
      img {
        margin-right: 1px;
        margin-top: 7px;
      }
    }
  }

  .copy-right {
    border-top: solid 1px#d6d6d6;
    margin-top: 15px;
    padding: 9px 0;
    font-size: 8px;
    color: #56596a;
    text-align: center !important;
  }
`;

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <WrapperFooter>
      <div className="inner-footer">
        <div className="d-flex">
          <nav>
            <Link href={t("About.href")}>
              <p>{t("About.title")}</p>
            </Link>
            <Link href={t("contactUs.href")}>
              <p>{t("contactUs.title")}</p>
            </Link>
            <Link href={t("job.href")}>
              <p>{t("job.title")}</p>
            </Link>
          </nav>
          <nav>
            <Link href={t("news.href")}>
              <p>{t("news.title")}</p>
            </Link>
            <Link href={t("services.href")}>
              <p>{t("services.title")}</p>
            </Link>

            <Link href={t("awards.href")}>
              <p>{t("awards.title")}</p>
            </Link>
          </nav>
        </div>
      </div>
      <div className="social">
        {socialIconWhite.map((icon) => (
          <div key={icon.id} className="icon">
            <Link href={icon.href}>
              <Image src={icon.icon} alt={icon.alt} width={20} height={20}priority />
            </Link>
          </div>
        ))}
      </div>

      <div className="copy-right">{t("copyRight.title")}</div>
    </WrapperFooter>
  );
};

export default Footer;
