import React from "react";

interface HamburgerIconTypes {
  height: string;
  width: string;
  color?: string;
}

const HamburgerIcon = ({ height, width, color }: HamburgerIconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M3.506 12.343h18m-18-6h18m-18 12h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export { HamburgerIcon };
