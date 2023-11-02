import React from "react";

export interface CrossIconTypes {
  height: string;
  width: string;
}

const CrossIcon = ({ height, width }: CrossIconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.377 4.916a.717.717 0 0 1 1.016 0L10 9.5l4.569-4.622a.717.717 0 0 1 1.016 0c.28.281.28.738 0 1.02l-4.569 4.621 4.607 4.584c.28.281.28.738 0 1.02a.717.717 0 0 1-1.016 0L10 11.538l-4.607 4.583a.717.717 0 0 1-1.016 0 .723.723 0 0 1 0-1.02l4.607-4.583-4.607-4.583a.723.723 0 0 1 0-1.02Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export { CrossIcon };
