import { CallIcon } from "../Icons/CallIcon";
import styled from "styled-components";
import React from "react";

export const Anchor = styled.a``;

const CustomerCall = () => {
  return (
    <Anchor href="tel://9999899998">
      <CallIcon height="24px" width="24px" fill="rgb(51, 51, 104)" />
    </Anchor>
  );
};

export { CustomerCall };
