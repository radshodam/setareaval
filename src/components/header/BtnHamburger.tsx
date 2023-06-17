import React from "react";
import styled from "@emotion/styled";

type StyledBurgerProps = {
  isMenuOpen: boolean;
};

const StyledBurger = styled.button<StyledBurgerProps>`
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    margin: 20px 20px;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.17rem;
      background: ${({ isMenuOpen }) => (isMenuOpen ? "#EFFFFA" : "#EFFFFA")};
      border-radius: 10px;
      transition: all 0.1s linear;
      position: relative;
      transform-origin: 5px;

      :first-child {
        transform: ${({ isMenuOpen }) =>
          isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
        transform: ${({ isMenuOpen }) =>
          isMenuOpen ? "translateX(-40px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ isMenuOpen }) =>
          isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
  display: none;
`;

type BurgerProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BtnHamburger: React.FC<BurgerProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <StyledBurger isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
