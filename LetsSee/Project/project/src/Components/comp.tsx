import React from "react";
import styled from "styled-components";

export const FirstComp = styled.div`
  background-color: red;
  color: black;
`;

const BasicComponent = () => {
  return <FirstComp>hello there</FirstComp>;
};

export { BasicComponent };
