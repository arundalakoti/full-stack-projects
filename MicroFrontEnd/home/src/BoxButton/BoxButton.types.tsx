import { TypographyTypes } from "../Topography/TitleTopography";

export interface BoxButtonTypes {
  buttonText: string;
  isEnabled: boolean;
  isFullWidth?: boolean;
  buttonClickHandler: (e: any) => void;
  theme?: ColorThemeENUM;
  componentSize?: TypographyTypes;
  isLoading?: boolean;
}

export enum ColorThemeENUM {
  primary = "primary",
  outline = "outline",
}
