import styled, { keyframes } from "styled-components";

interface IndicatorProps {
  leftIndicator: string;
  topIndicator: string;
}

const appearFromNowhere = keyframes`
from{
    opacity: 0;
}

to{
    opacity: 1;
}
`;

export const AsideContainer = styled.aside`
  width: 100%;
  height: 100px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  background-color: var(--dark-green);
  border-radius: 25px 25px 0 0;

  @media screen and (min-width: 720px) {
    height: 100vh;
    transition: width 0.4s;
    border-radius: 0 25px 25px 0;
    justify-content: flex-start;

    width: 158px;

    :hover {
      width: 300px;
      span {
        padding-left: 12px;
        font-size: 24px;
        color: var(--white);
        font-weight: 600;
        display: flex;
        align-items: center;
        animation: ${appearFromNowhere} 1s;
      }
    }

    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--dark-green);

    padding: 150px 12px 0;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding-right: 8px;

  a {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    z-index: 450;
    padding: 0 6px 0;
    margin-right: 8px;

    span {
      color: var(--white);
      font-weight: 600;
      font-size: 18px;
      display: none;
    }

    svg {
      fill: var(--white);
      margin-right: 0;
      width: 30px;
      height: 30px;
    }

    &.navlink--active {
      border-radius: 0;
    }
  }

  .indicator {
    position: absolute;
    left: ${(props: IndicatorProps) => props.leftIndicator};
    top: 35px;
    background-color: transparent;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid var(--white);
    z-index: 4;
    transition: left 500ms;
    transform: translateX(-4px);
  }

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;
    padding-right: 0;
    padding-bottom: 0px;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 8px 24px;
      position: relative;
      z-index: 450;
      margin-bottom: 18px;
      margin-right: 0px;

      svg {
        fill: var(--white);
        margin-right: 8px;
      }

      &.navlink--active {
        border-radius: 24px 0 0 24px;
      }
    }
    .indicator {
      position: absolute;
      left: 14px;
      top: ${(props) => props.topIndicator};
      background-color: transparent;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 2px solid var(--white);
      z-index: 4;
      transition: top 500ms;
      transform: translateY(-2px);
    }
  }
`;

export const Logo = styled.img`
  display: none;
  @media screen and (min-width: 720px) {
    display: block;
    position: absolute;
    top: 20px;
  }
`;
