"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Logo from "@/public/images/logo/logo.svg";
import Image from "next/image";
import TwitterWhite from "@/public/images/logo/social/twitter-icon.svg";
import LinkedinWhite from "@/public/images/logo/social/linkdin-icon.svg";
import InstagramWhite from "@/public/images/logo/social/Instagram-icon.svg";
import Twitter from "@/public/images/logo/social/Twitter-icon-dark.svg";
import Linkedin from "@/public/images/logo/social/linkedin-icon-dark.svg";
import Instagram from "@/public/images/logo/social/Instagram-icon-dark.svg";
import { BtnHamburger } from "./BtnHamburger";

type SocialIcon = {
  id: number;
  alt: string;
  icon: StaticImageData;
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

const socialIconWDark: SocialIcon[] = [
  {
    id: 1,
    alt: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/setareaval/",
  },
  {
    id: 2,
    alt: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/setareaval_ir/",
  },
  {
    id: 3,
    alt: "twitter",
    icon: Twitter,
    href: "https://twitter.com/setareaval_ir",
  },
];

type HeaderData = {
  id: number;
  href: string;
  title: string;
};

const dataHeader: HeaderData[] = [
  {
    id: 1,
    href: "",
    title: "فرصت های شغلی",
  },
  {
    id: 2,
    href: "",
    title: "جوایز و برندگان",
  },
  {
    id: 3,
    href: "",
    title: "تماس با ما",
  },
  {
    id: 4,
    href: "",
    title: "درباره ما",
  },
  {
    id: 5,
    href: "",
    title: "اخبار و رویدادها",
  },
  {
    id: 6,
    href: "",
    title: "خدمات",
  },
];

let MaxWidthContainer = "1236px";

const bgColorNav = `#57c5d0`;
const WrapperNav = styled.div`
  width: 100%;
  background-color: ${bgColorNav};
  margin: auto;
  display: flex;
  justify-content: center;
  height: 75px;
`;

const NavbarContainer = styled.nav`
  max-width: ${MaxWidthContainer};
  width: 100%;
  display: flex;
  justify-content: space-between;

  .logo-icon {
    margin: 13px;
    padding: 1px 2px;
    min-width: 110px;
  }

  nav {
    display: flex;

    a {
      margin: 0px 20px;
      font-size: 1.1rem;
      position: relative;
      text-decoration: none;
      color: white;
      &:hover {
        transition: color 0.4s ease-out, left 0.4s ease-out;
        color: #342a52;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 19px;
        width: 0;
        height: 2px;
        background-color: black;
        transition: width 0.4s ease-out, left 0.4s ease-out;
      }

      &:hover::after {
        width: 100%;
        left: 0;
      }
    }
    @media (max-width: 990px) {
      display: none;
    }
  }
`;

const NavBarSm = styled.div`
  display: none;
  @media (max-width: 990px) {
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background: #f8f8f8;
    width: 100%;
    height: 230px;
    div {
      margin: 20px 0px;
      a {
        display: block;
        padding: 5px 25px;
        color: #56596a;
        font-size: 16px;
        text-decoration: none;
        font-weight: 400;
        &:hover {
          transition: color 0.4s ease-out, left 0.4s ease-out;
          color: #342a52;
        }
      }
    }
  }
  @media (max-width: 400px) {
    height: 350px;
  }
`;
const SocialInNav = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: flex;
    div {
      padding: 22px 12px;
      cursor: pointer;

      &:hover {
        transition: all 0.4s ease-out, left 0.4s ease-out;
        scale: 1.1;
      }
    }
  }
  @media (max-width: 410px) {
    display: none;
  }
`;
const SocialInNavXs = styled.div`
  display: none;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    div {
      cursor: pointer;

      &:hover {
        transition: all 0.4s ease-out, left 0.4s ease-out;
        scale: 1.1;
      }
    }
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <WrapperNav>
        <NavbarContainer>
          <nav>
            {dataHeader.map((item) => (
              <Link key={item.id} href={item.href}>
                <p>{item.title}</p>
              </Link>
            ))}
          </nav>

          <SocialInNav>
            {socialIconWhite.map((icon) => (
              <div key={icon.id}>
                <Link href={icon.href}>
                  <Image src={icon.icon} alt={icon.alt} width={25} height={25} />
                </Link>
              </div>
            ))}
          </SocialInNav>
          <Link href={"/"}>
            <Image
              alt="logo"
              src={Logo}
              priority={true}
              width={160}
              height={37}
              className="logo-icon"
            />
          </Link>

          <BtnHamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </NavbarContainer>
      </WrapperNav>
      {isMenuOpen && (
        <NavBarSm className="rtl">
          <div>
            {dataHeader.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.title}
              </Link>
            ))}
          </div>

          <SocialInNavXs>
            {socialIconWDark.map((icon) => (
              <div key={icon.id}>
                <Link href={icon.href}>
                  <Image src={icon.icon} alt={icon.alt} width={20} height={20} />
                </Link>
              </div>
            ))}
          </SocialInNavXs>
        </NavBarSm>
      )}
    </div>
  );
}

export default Header;