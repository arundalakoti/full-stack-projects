import { HamburgerIcon } from "../../Icons/HamburgerIcon";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { CrossIcon } from "../../Icons/CrossIcon";
import TitleTypography, {
  TypographyType,
} from "../../Topography/TitleTopography";
import { UserIcon } from "../../Icons/UserIcon";
import BoxButton from "../../BoxButton/BoxButton.component";
import { ColorThemeENUM } from "../../BoxButton/BoxButton.types";

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  transition: left 0.3s ease;
  background-color: white;
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "none")};
`;

const MenuToggle = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

export const BackDrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 66, 0.2);
  bottom: 0;
  right: 0;
`;

export const MenuContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(242, 242, 253);
  padding: 12px 8px 12px 16px;
`;

export const Cross = styled.div``;

export const MainHamBurger = styled.div``;

export interface HeaderNavMenuTypes {
  headerNav: boolean;
  setHeaderNav: (val: boolean) => void;
}

export const ButtonSection = styled.div`
  padding: 12px 16px;
`;

export const UserSection = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px 16px;
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #333;
  padding: 20px;
  transition: left 0.3s ease;
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const HamBurger = () => {
  const [headerNav, setHeaderNav] = useState(false);

  useEffect(() => {
    if (headerNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [headerNav]);

  return (
    <>
      <MainHamBurger onClick={() => setHeaderNav(true)}>
        <HamburgerIcon height="24px" width="24px" color="rgb(0, 0, 66)" />
      </MainHamBurger>
      <Menu isOpen={headerNav}>
        {headerNav && (
          <BackDrop onClick={() => setHeaderNav(false)} isOpen={headerNav} />
        )}
        <MenuContainer isOpen={headerNav}>
          <MenuContainerHeader>
            <TitleTypography
              fontType={TypographyType.large}
              label={"LOGO"}
              design={{ textColor: "rgb(51, 51, 104)" }}
            />
            <Cross onClick={() => setHeaderNav(false)}>
              <CrossIcon width="24px" height="24px" />
            </Cross>
          </MenuContainerHeader>
          <UserSection>
            <UserIcon height="100%" width="50%" />
            <UserText>
              <TitleTypography
                fontType={TypographyType.large}
                label="Hi Specsy!"
                design={{ textColor: "rgb(51, 51, 104)" }}
              />

              <TitleTypography
                fontType={TypographyType.small}
                label="Sign-in or Sign-up to track your orders and get access to exclusive deals."
                design={{ textColor: "rgb(51, 51, 104)" }}
              />
            </UserText>
          </UserSection>
          <ButtonSection>
            <BoxButton
              buttonText={"Sign In/Sign up"}
              theme={ColorThemeENUM.primary}
              isFullWidth={true}
              isEnabled={true}
              buttonClickHandler={(e) => null}
              componentSize={TypographyType.medium}
            />
          </ButtonSection>
        </MenuContainer>
      </Menu>
    </>
  );
};

export { HamBurger };
