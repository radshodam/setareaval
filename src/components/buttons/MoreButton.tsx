import styled from "@emotion/styled";
import { type } from "os";
import React, { ReactNode } from "react";

const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  a {
    border-radius: 10px;
    border: solid 1px#d6d6d6;
    background-color: #fff;
    padding: 0 25px;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: center;
    color: #56596a;
    transition: 0.3s;

    &:hover {
      background-color: #56596a;
      color: #fff;
      text-decoration: none;
    }
  }
`;
type MoreBtn = {
  children: ReactNode;
};
const MoreButton = ({ children }: MoreBtn) => {
  return (
    <WrapperBtn>
      <Button>{children}</Button>
    </WrapperBtn>
  );
};

export default MoreButton;
