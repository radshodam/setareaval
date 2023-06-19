import styled from "@emotion/styled";
import Link from "next-intl/link";
import React from "react";

const StyledBurger = styled.div`
  div {
    position: absolute;
    top: 85px;
    display: flex;
    justify-content: center;
    justify-content: center;
    padding: 0px 20px 2px;
    border-radius: 12px;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),
      0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  }
  a {
    padding: 5px;
    font-weight: 100;
    text-decoration: none;
    color: #4e4e4e;
    &:hover{
        transition: color 0.4s ease-out, left 0.4s ease-out;
        color: #57c5d0;

    }
  }
`;

const SwitchLocal = () => {
  return (
    <StyledBurger>
      <div>
        <Link href="/" locale="en">
          En
        </Link>
        <Link href="/" locale="ir">
          Fa
        </Link>
      </div>
    </StyledBurger>
  );
};

export default SwitchLocal;
