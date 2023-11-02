import TitleTypography, { TypographyType } from "../Topography/TitleTopography";
import styled from "styled-components";
import React from "react";

export interface ProductCardTypes {
  productImg: string;
  productName: string;
  productDescription: string;
  index: number;
  removeBottomMargin: boolean;
}

export const ProductCardOuter = styled.div<{ removeBottomMargin: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 20px;
  border-radius: 16px;
  border: 0.5px solid var(--primary-primary-l-6, #f0f0f6);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 66, 0.08);
  margin-bottom: ${(props) => (props.removeBottomMargin ? "0" : "20px")};
  background: white;
`;

export const ProductImage = styled.img``;

const ProductCard = ({
  productImg,
  productName,
  productDescription,
  index,
  removeBottomMargin,
}: ProductCardTypes) => {
  return (
    <ProductCardOuter id={`${index}`} removeBottomMargin={removeBottomMargin}>
      <ProductImage src={productImg}></ProductImage>
      <TitleTypography
        fontType={TypographyType.large}
        label={productName}
        design={{ textColor: "rgb(51, 51, 104)" }}
      />

      <TitleTypography
        fontType={TypographyType.medium}
        label={productDescription}
        design={{ textColor: "rgb(51, 51, 104)" }}
      />
    </ProductCardOuter>
  );
};

export { ProductCard };
