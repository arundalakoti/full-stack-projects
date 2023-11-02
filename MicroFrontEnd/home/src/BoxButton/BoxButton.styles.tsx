import styled from "styled-components";
import { ColorThemeENUM } from "./BoxButton.types";
import { TypographyENUM } from "../Topography/TitleTopography";

export const Container = styled.button<{
  isFullWidth?: boolean;
  theme?: ColorThemeENUM;
  componentSize: {
    paddingX: string;
    paddingY: string;
    loaderPaddingY?: string;
    borderRadius: string;
    borderSize: string;
  };
  isLoading?: boolean;
}>`
  outline: none;
  font-family: ${TypographyENUM.plusJakartaSans};
  border-radius: ${(props) => props.componentSize.borderRadius};
  border: ${(props) =>
    props.theme === ColorThemeENUM.outline
      ? `${props.componentSize.borderSize} solid #000042`
      : "none"};
  padding: ${(props) =>
    props.theme === ColorThemeENUM.outline
      ? `calc(${props.componentSize.paddingY} - ${props.componentSize.borderSize}) calc(${props.componentSize.paddingX} - ${props.componentSize.borderSize})`
      : `${props.componentSize.paddingY} ${props.componentSize.paddingX}`};
  ${(props) =>
    props.isLoading
      ? props.componentSize.loaderPaddingY
        ? `padding: ${props.componentSize.loaderPaddingY} ${props.componentSize.paddingX}}`
        : ""
      : ""};
  color: ${(props) =>
    props.theme === ColorThemeENUM.primary ? "white" : "#000042"};
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === ColorThemeENUM.primary
      ? props.isLoading
        ? "#474786"
        : "#000042"
      : props.isLoading
      ? "rgba(0, 0, 66, 0.08)"
      : "white"};
  ${(props) => (props.isFullWidth ? "width: 100%;" : "width: max-content;")}
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    background-color: ${(props) =>
      props.theme === ColorThemeENUM.primary
        ? "#474786"
        : "rgba(0, 0, 66, 0.08)"};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.theme === ColorThemeENUM.primary ? "#E6E6EC" : "white"};
    border: 1px solid
      ${(props) =>
        props.theme === ColorThemeENUM.outline ? "#CCCCD9" : "transparent"};
    color: #000042;
  }
  -webkit-tap-highlight-color: transparent;
  h5 {
    white-space: nowrap;
  }
`;
