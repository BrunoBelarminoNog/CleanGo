import styled, { css } from "styled-components";

interface ResponsiveMenuProps {
  openMenu: boolean;
}
interface HeaderBarProps {
  isAuth: boolean;
}
export const HeaderBar = styled.header`
  width: 100vw;
  padding: 12px 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  img {
    transition: all 350ms;
    height: 32px;
  }

  ${(props: HeaderBarProps) =>
    props.isAuth &&
    css`
      img {
        height: 38px;
      }
    `}

  nav.desktop {
    display: none;
    justify-content: space-between;

    ${(props: HeaderBarProps) =>
      props.isAuth &&
      css`
        display: flex;
      `}

    @media screen and (min-width: 920px) {
      display: flex;
    }
  }

  @media screen and (min-width: 720px) {
    img {
      height: 42px;
    }

    ${(props: HeaderBarProps) =>
      props.isAuth &&
      css`
        img {
          display: none;
        }
      `}
  }
`;

export const ResponsiveMenu = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  position: relative;
  z-index: 2000;
  cursor: pointer;

  .bars {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 10px;
    background-color: var(--black);
    transform-origin: 2px;
    transition: all 0.3s linear;

    ${(props: ResponsiveMenuProps) =>
      props.openMenu &&
      css`
        &:nth-child(1) {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: translateX(100%);
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      `}
  }

  @media screen and (min-width: 920px) {
    display: none;
  }
`;

export const ResponsiveMenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 80%;
  z-index: 1000;
  background-color: var(--white);
  box-shadow: -100px 0px 1000px 1000px rgba(0, 0, 0, 0.7);
  opacity: 1;
  transition: all 400ms;

  ${(props: ResponsiveMenuProps) =>
    !props.openMenu &&
    css`
      right: -1000px;
      opacity: 0;
    `}

  @media screen and (min-width: 920px) {
    display: none;
  }
`;
