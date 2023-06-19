"use client";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Button = styled.div`
  a {
    text-decoration: none;
    transition: 0.3s;
    text-align: center;
    width: 240px;
    color: #fff;
    border-radius: 15px;
    background-color: #57c5d0;
    padding: 10px 0;
    display: inline-block;

    &:hover {
      background-color: #56596a;
      color: #fff;
      text-decoration: none;
    }
  }
`;
type Btn = {
  children: ReactNode;
};
const ButtonBlueLg = ({ children }: Btn) => {
  return (
    <WrapperBtn>
      <Button>{children}</Button>
    </WrapperBtn>
  );
};

export default ButtonBlueLg;
