import React from "react";
import styled from "styled-components";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import { CallIcon } from "../Icons/CallIcon";
import { CustomerCall } from "../CustomerCall";
import { HamBurger } from "./HamBurger/HamBurger";

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  padding: 8px 16px;
  background-color: white;
`;

const Header = () => {
  return (
    <MainHeader>
      <HamBurger />
      <CustomerCall />
    </MainHeader>
  );
};

export default Header;
