import { TypographyType, TypographyTypes } from "../Topography/TitleTopography";

export function componentSizeHandler(size: TypographyTypes): {
  paddingX: string;
  paddingY: string;
  loaderPaddingY?: string;
  borderRadius: string;
  borderSize: string;
  loaderHeight: number;
} {
  switch (size) {
    case TypographyType.large:
      return {
        paddingY: "14px",
        loaderPaddingY: "12px",
        paddingX: "20px",
        borderRadius: "12px",
        borderSize: "1.5px",
        loaderHeight: 24,
      };
    case TypographyType.medium:
      return {
        paddingY: "10px",
        paddingX: "16px",
        borderRadius: "10px",
        borderSize: "1.25px",
        loaderHeight: 20,
      };
    case TypographyType.small:
      return {
        paddingY: "8px",
        paddingX: "12px",
        borderRadius: "8px",
        borderSize: "1px",
        loaderHeight: 16,
      };
    default:
      return {
        paddingY: "8px",
        paddingX: "12px",
        borderRadius: "8px",
        borderSize: "1px",
        loaderHeight: 16,
      };
  }
}
