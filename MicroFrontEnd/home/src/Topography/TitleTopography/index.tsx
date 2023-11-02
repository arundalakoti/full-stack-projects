import React from "react";
import styled from "styled-components";
import { ValueOf } from "type-fest";

export const TypographyType = {
  large: "L",
  medium: "M",
  small: "S",
  extraSmall: "XS",
} as const;
export interface TypographyDesignType {
  textColor?: string;
  bgColor?: string;
}
export type DesignApiType = {
  label: string;
  design?: TypographyDesignType;
};
export type TypographyTypes = ValueOf<typeof TypographyType>;

export const getRootStyles = () => {
  return {
    "--red": "red;",
    "--text": "#333368", //extra
    "--topaz": "#18cfa8;",
    "--dark-blue-100": "#000042;",
    "--dark-blue-75": "#66668e", // extra
    "--dark-blue-50": "#737397;",
    "--dark-blue-10": "#9999b3", //extra
    "--light-purple-10": "#CECEDF", //extra
    "--irish-blue": "#00bac6;",
    "--vivid-green-100": "#11DAAC;",
    "--blashish-gray": "#329c92;",
    "--whitish-gray-25": "#f4f4f4;",
    "--whitish-gray-15": "#eaeaea;",
    "--whitish-gray-10": "#8a8888;",
    "--whitish-gray": "#999999",
    "--dark-gray": "#333;",
    "--light-gray-25": "#606060;",
    "--light-gray": "#EEE;",
    "--vivid-green-50": "#9FE7D2;",
    "--vivid-green-25": "#DAF7ED;",
    "--see-green-100": "#B9F7E6;",
    "--see-green-50": "#E2FAF2;",
    "--see-green-25": "#F0FCF8;",
    "--acetate-green-100": "#D5F0C2;",
    "--acetate-green-50": "#E3F7DE;",
    "--acetate-green-25": "#F3FBEF;",
    "--tortoiseshell-100": "#FFC223;",
    "--tortoiseshell-50": "#FFE092;",
    "--tortoiseshell-25": "#FFEFCE;",
    "--tortoiseshell-10": "#FFF3D9;",
    "--terracotta-100": "#FF5E48;",
    "--terracotta-50": "#FFA499;",
    "--terracotta-25": "#FFD5D2;",
    "--warm-grey-100": "#F3E9E2;",
    "--warm-grey-50": "#F7F2ED;",
    "--warm-grey-25": "#FBF9F7;",
    "--serene-gray": "#acacac",
    "--light-grey": "#d5d5d5;",
    "--whitish-grey": "#ccc",
    "--dark-grey": "#8b8b8b;",
    "--darker-grey": "#5a5a5a;",
    "--bright-yellow": "#fff092", //extra
    "--brownish-yellow": "#7B5C0A",
    "--gold": "#b59a50;", //extra
    "--gold-100": "#E0C67C;",
    "--gold-50": "#EFE2BD;",
    "--gold-25": "#F7F1DE;",
    "--gold-10": "#FFF8D9;",
    "--gray": "#666666",
    "--blackish-gray": "#414b56",
    "--light-black": "#333",
    "--black": "#000000;",
    "--white": "#FFFFFF;",
    "--ghost-white": "#F5F5FF;",
    "--border": "#EBEBF0;",
    "--turquoise": "#00bac6",
    "--wishlist": "#e53935",
    "--purple-haze": "#e2e2ee",
    "--light-purple": "#A2A2B8;",
    "--error": "#ec3331",
    "--error-border": "#ebccd1",
    "--error-background": "#f2dede",
    "--transparent": "transparent;",
    "--inherit": "inherit;",
    "--placeholder": "#00004252;",
    "--backdrop": "rgba(33, 33, 33, 0.75)",
    "--border-radius-xxxs": "4px;",
    "--border-radius-xxs": "8px;",
    "--border-radius-xs": "12px;",
    "--border-radius-sm": "24px;",
    "--border-radius-md": "32px;",
    "--border-radius-lg": "40px;",
    "--border-radius-xl": "60px;",
    "--border-radius-xxl": "100px;",
    "--grid-space-desktop": "20px;",
    "--page-margin-desktop": "120px;",
    "--grid-space-mobile": "12px;",
    "--page-margin-mobile": "12px;",
    "--spacing-sm": "8.1px;",
    "--spacing-md": "16.2px;",
    "--spacing-lg": "24.3px;",
    "--spacing-xl": "48.6px;",
    "--font-serif": "'serif';",
    "--font-lksans-bold": "'LKSans-Bold';",
    "--font-lksans-medium": "'LKSans-Medium';",
    "--font-lksans-regular": "'LKSans-Regular';",
    "--font-plus-jakarta-sans": "'Plus Jakarta Sans';",
    "--font-lksans-black": "'LKSans-Black';",
    "--font-lksans-extrablack": "'LKSans-Extrablack';",
    "--font-lksans-hairline": "'LKSans-Hairline';",
    "--font-lkserif-normal": "'LKSerif-Normal';",
    "--font-lkserif-book": "'LKSerif-Book';",
    "--font-lkserif-ultralight": "'LKSerif-UltraLight';",
    "--font-default-heavy": "'LKFuturaStd-Heavy';",
    "--font-default-medium": "'LKFuturaStd-Medium';",
    "--font-default-book": "'LKFuturaStd-Book';",
    "--font-default-light": "'LKFuturaStd-Light';",
    "--font-rajdhani-regular": "'Rajdhani-Regular';",
    "--font-rajdhani-medium": "'Rajdhani-Medium';",
    "--font-plus-jakarta-sans-medium": "'Plus Jakarta Sans-Medium';",
    "--font-plus-jakarta-sans-bold": "'Plus Jakarta Sans-Bold';",
    "--fs-52": "52px;",
    "--fs-48": "48px;",
    "--fs-40": "40px;",
    "--fs-32": "32px;",
    "--fs-30": "30px;",
    "--fs-28": "28px;",
    "--fs-26": "26px;",
    "--fs-24": "24px;",
    "--fs-22": "22px;",
    "--fs-20": "20px;",
    "--fs-18": "18px;",
    "--fs-16": "16px;",
    "--fs-15": "15px",
    "--fs-14": "14px;",
    "--fs-13": "13px;",
    "--fs-12": "12px;",
    "--fs-10": "10px;",
    "--fs-9": "9px;",
    "--fs-6": "6px;",
    "--pd-150": "150px;",
    "--pd-110": "110px;",
    "--pd-70": "70px;",
    "--pd-64": "64px;",
    "--pd-50": "50px;",
    "--pd-48": "48px;",
    "--pd-40": "40px;",
    "--pd-32": "32px;",
    "--pd-30": "30px;",
    "--pd-25": "25px",
    "--pd-28": "28px",
    "--pd-24": "24px",
    "--pd-20": "20px;",
    "--pd-18": "18px;",
    "--pd-16": "16px;",
    "--pd-15": "15px;",
    "--pd-14": "14px;",
    "--pd-13": "13px",
    "--pd-12": "12px;",
    "--pd-10": "10px;",
    "--pd-8": "8px;",
    "--pd-6": "6px;",
    "--pd-5": "5px;",
    "--pd-4": "4px",
    "--mr-12": "12px;",
    "--fw-light": "300;",
    "--fw-regular": "400;",
    "--fw-medium": "500;",
    "--fw-semi-bold": "600;",
    "--fw-bold": "700;",
    "--uppercase": "uppercase;",
    "--lowercase": "lowercase;",
    "--capitalize": "capitalize;",
    //align
    "--space-between": "space-between;",
    "--space-evenly": "space-evenly;",
    "--space-around": "space-around;",
    //opacity
    "--lightest-opacity": "0.2;",
    "--lighter-opacity": "0.5;",
    "--moderate-opacity": "0.8;",
    "--default-opacity": "1;",
    //shadows
    "--ultra-light-shadow": "rgba(0, 0, 0, 0.08)",
    "--light-shadow": "rgba(0, 0, 0, 0.3);",
    "--medium-shadow": "#888;",
    // cursor
    "--pointer": "pointer",
    //success
    "--success": "#90ee8f",
  };
};

export enum TypographyENUM {
  sans = "var(--font-sans)",
  serif = "var(--font-serif)",
  lkSansBold = "var(--font-lksans-bold)",
  lkSansHairline = "var(--font-lksans-hairline)",
  lkSansMedium = "var(--font-lksans-medium)",
  lkSansRegular = "var(--font-lksans-regular)",
  plusJakartaSans = "Plus Jakarta Sans",
  defaultHeavy = "var(--font-default-heavy)",
  defaultMedium = "var(--font-default-medium)",
  defaultLight = "var(--font-default-light)",
  defaultBook = "var(--font-default-book)",
  rajdhaniRegular = "var(--font-rajdhani-regular)",
  lkSerifNormal = "var(--font-lkserif-normal)",
  plusJakartaSansMedium = "var(--font-plus-jakarta-sans-medium)",
  PlusJakartaSansBold = "var(--font-plus-jakarta-sans-bold)",
}

type Props = {
  fontType: TypographyTypes;
  className?: string;
  label: string;
  design?: TypographyDesignType;
};

export const Title = styled.h3<{
  sizeObj: { fs: number; lh: number; fw: number };
  design?: { textColor?: string; bgColor?: string };
}>`
  font-family: ${TypographyENUM.plusJakartaSans};
  font-size: ${(props) => props.sizeObj.fs}px;
  line-height: ${(props) => props.sizeObj.lh}px;
  font-weight: ${(props) => props.sizeObj.fw};
  color: ${(props) =>
    props?.design?.textColor ? props.design.textColor : "inherit"};
  /* background-color: ${(props) => props?.design?.bgColor}; */
`;

export function getSizeObj(size: TypographyTypes): {
  fs: number;
  lh: number;
  fw: number;
  as: "h3" | "h4" | "h5" | "h6";
} {
  switch (size) {
    case TypographyType.large:
      return { fs: 16, lh: 20, fw: 700, as: "h3" };
    case TypographyType.medium:
      return { fs: 14, lh: 20, fw: 700, as: "h4" };
    case TypographyType.small:
      return { fs: 12, lh: 16, fw: 700, as: "h5" };
    case TypographyType.extraSmall:
      return { fs: 10, lh: 12, fw: 700, as: "h6" };
    default:
      return { fs: 16, lh: 20, fw: 700, as: "h3" };
  }
}

function TitleTypography({
  fontType = TypographyType.large,
  className,
  label,
  design,
}: Props) {
  const sizeObj = getSizeObj(fontType);
  return (
    <Title
      title={label}
      className={className}
      sizeObj={sizeObj}
      as={sizeObj.as}
      design={design}
    >
      {label}
    </Title>
  );
}

export default TitleTypography;
