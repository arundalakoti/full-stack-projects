import React from "react";

export interface UserIconTypes {
  height: string;
  width: string;
}

const UserIcon = ({ height, width }: UserIconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.644 19.474a4.737 4.737 0 1 0 0-9.474 4.737 4.737 0 0 0 0 9.474ZM10.817 24.845l-.449.807A2.926 2.926 0 0 0 12.927 30h13.81a2.683 2.683 0 0 0 2.346-3.986l-.551-.992a4.648 4.648 0 0 0-4.063-2.39h-9.89a4.303 4.303 0 0 0-3.762 2.213Z"
        fill="currentColor"
      ></path>
      <path
        d="M19.644 19.474a4.737 4.737 0 1 0 0-9.474 4.737 4.737 0 0 0 0 9.474ZM10.817 24.845l-.449.807A2.926 2.926 0 0 0 12.927 30h13.81a2.683 2.683 0 0 0 2.346-3.986l-.551-.992a4.648 4.648 0 0 0-4.063-2.39h-9.89a4.303 4.303 0 0 0-3.762 2.213Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      ></path>
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="currentColor"
      ></rect>
    </svg>
  );
};

export { UserIcon };
