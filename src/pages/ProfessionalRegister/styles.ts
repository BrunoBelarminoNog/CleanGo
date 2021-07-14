import styled from "styled-components";

import LineDivisor from "../../asssets/svg/horizontal-line.svg";
import LogoBack from "../../asssets/svg/logobackground.svg";

interface NavigationTabProps {
  active: boolean;
}
interface WrapperTabsProps {
  sectionForm: number;
}
interface FormsContainerProps {
  section: number;
}

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  &::before {
    content: "";
    width: 392px;
    height: 444px;
    position: fixed;
    bottom: 0;
    right: 0;
    background-image: url(${LogoBack});
  }
`;

export const WrapperForm = styled.section`
  width: 95vw;
  max-width: 780px;
  background-color: var(--white);
  padding: 42px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem;
  @media screen and (min-width: 600px) {
    padding: 42px 64px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--green);
  font-family: var(--font-secondary);
  margin-bottom: 2rem;
  transition: all 400ms;
  opacity: 0;

  @media screen and (min-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
`;

export const WrapperTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 500px;
  max-width: 650px;
  position: absolute;
  left: 64px;
  top: 140px;
  transition: all 500ms;
  opacity: 0;

  transform: ${(props: WrapperTabsProps) =>
    props.sectionForm === 1
      ? "translateX(0px)"
      : props.sectionForm === 2
      ? "translateX(-33%)"
      : "translateX(-60%)"};

  @media screen and (min-width: 325px) {
    top: 110px;
  }

  @media screen and (min-width: 600px) {
    transform: translateX(0px);
    top: 140px;
  }
`;

export const NavigationTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props: NavigationTabProps) =>
    props.active ? "default" : "pointer"};
  opacity: ${(props: NavigationTabProps) => (props.active ? "100%" : "50%")};

  > div:first-child {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.3rem;

    > span {
      color: var(--white);
      font-family: var(--font-secondary);
      font-size: 0.9rem;
      font-weight: 700;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      font-family: var(--font-secondary);
      color: var(--black);
      font-weight: 700;
      font-size: 0.9rem;
    }
  }
`;

export const Separator = styled.div`
  flex: 1;
  width: 100%;
  height: 1rem;
  background: url(${LineDivisor}) center repeat-x;
  margin: auto 0.4rem;
  transform: translateY(6px);
  opacity: 0.2;
`;

export const FormsContainer = styled.div`
  width: 310%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5%;
  transition: all 350ms;
  opacity: 0;
  transform: ${(props: FormsContainerProps) =>
    props.section === 1
      ? "translateX(35%)"
      : props.section === 2
      ? "translateX(0%)"
      : "translateX(-35%)"};

  > * {
    &:nth-child(1) {
      opacity: ${(props: FormsContainerProps) =>
        props.section === 1 ? "1" : "0.3"};
    }
    &:nth-child(2) {
      opacity: ${(props: FormsContainerProps) =>
        props.section === 2 ? "1" : "0.3"};
    }
    &:nth-child(3) {
      opacity: ${(props: FormsContainerProps) =>
        props.section === 3 ? "1" : "0.3"};
    }
  }
`;
