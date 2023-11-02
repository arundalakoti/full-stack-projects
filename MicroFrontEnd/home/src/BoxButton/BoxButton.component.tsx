import React from "react";
import { Container } from "./BoxButton.styles";
import { BoxButtonTypes } from "./BoxButton.types";
import { ButtonLoaderComponent } from "./ButtonLoaderComponent";
import TitleTypography, { TypographyType } from "../Topography/TitleTopography";
import { componentSizeHandler } from "./helper";

function BoxButton({
  buttonText,
  isEnabled,
  isFullWidth,
  buttonClickHandler,
  theme,
  componentSize,
  isLoading,
}: BoxButtonTypes) {
  return (
    <Container
      disabled={!isEnabled}
      isFullWidth={isFullWidth}
      onClick={buttonClickHandler}
      theme={theme}
      componentSize={componentSizeHandler(
        componentSize || TypographyType.small
      )}
      isLoading={isLoading}
    >
      {!isLoading && (
        <TitleTypography
          fontType={componentSize || TypographyType.small}
          label={buttonText}
        />
      )}
      {isLoading && (
        <ButtonLoaderComponent
          height={
            componentSizeHandler(componentSize || TypographyType.small)
              .loaderHeight
          }
          animationDuration={1.2}
          theme={theme}
        />
      )}
    </Container>
  );
}

export default BoxButton;
