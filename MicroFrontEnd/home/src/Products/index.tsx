import { ProductCard } from "../ProductCard";
import React from "react";
import styled from "styled-components";

const items = [
  {
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    name: "Item 1",
    description: "Description for Item 1",
  },
  {
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    name: "Item 2",
    description: "Description for Item 2",
  },
  {
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    name: "Item 3",
    description: "Description for Item 3",
  },
  {
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    name: "Item 4",
    description: "Description for Item 4",
  },
  {
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    name: "Item 5",
    description: "Description for Item 5",
  },
];

export const ProductSection = styled.div`
  padding: 70px 16px 30px 16px;
  background-color: #e2e2ee;
`;

const Products = () => {
  return (
    <ProductSection>
      {items.map((item: any, index: number) => {
        return (
          <ProductCard
            productImg={item?.image}
            productName={item?.name}
            productDescription={item?.description}
            index={index}
            removeBottomMargin={index === items.length - 1 ? true : false}
          />
        );
      })}
    </ProductSection>
  );
};

export { Products };
