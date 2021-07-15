import styled from "styled-components";
import WorkDesktop from "../../asssets/images/trabalhe-conosco-desktop.png";
import { NavLink } from "react-router-dom";

import WorkMobile from "../../asssets/images/home2.png";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-green);
  margin-top: -77px;
  position: relative;
  /* min-height: 100vh; */
`;
export const SectionStyled = styled.section`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const SectionPartner = styled(SectionStyled)`
  margin: 77px 0 77px;
  background-image: url(${WorkMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 80vh;

  @media only screen and (min-width: 768px) {
    background-image: url(${WorkDesktop});
  }
`;
export const SectionWhowItWorks = styled(SectionStyled)`
  flex-direction: column;
  padding: 5rem 0;
  h1 {
    margin-bottom: 0.5rem;
  }
  .separator {
    width: 80px;
    height: 8px;
    background-color: var(--green);
    margin: 1rem auto 0.8rem;
    margin: 0 0 3rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 6rem 3rem;

    .separator {
      margin: 0 0 5rem;
    }
  }
`;
export const SectionReasons = styled(SectionStyled)`
  flex-direction: column;
  background-color: var(--dark-green);
  min-height: 80vh;
  h1 {
    color: var(--white);
    text-align: center;
  }

  padding: 5rem 0;

  > button {
    background-color: var(--white);
    color: var(--green);
    margin-top: 20px;
  }
  > button:hover {
    background-color: var(--gray);
    color: var(--dark-green);
  }
`;
export const Title = styled.h1`
  font-family: var(--font-secondary);
  padding: 8px;
  font-size: 1.5rem;
  .whowItWorks,
  .beAParter {
    font-size: 2rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    .whowItWorks {
      text-align: center;
      width: 100%;
    }
  }
`;
export const Description = styled.p`
  font-family: var(--font-standard);
  font-size: 20px;
  line-height: 30px;
  padding: 0.5rem 0 3rem;
  text-align: right;
  width: 90%;

  @media only screen and (min-width: 768px) {
    width: 560px;
  }
`;
export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  height: 350px;

  @media only screen and (min-width: 768px) {
    height: 628px;
    margin: 2rem 2rem;
  }
  margin: 1rem 1rem;
`;

export const ProNav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 97px 1rem;

  @media screen and (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const Links = styled(NavLink)`
  color: var(--white);
  font-weight: 500;
  width: 100%;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  margin: 0rem 0 0.5rem;
  text-align: right;
  border-bottom: 1px solid var(--gray);
  transition: all 350ms;

  &:hover {
    color: var(--green);
  }

  @media screen and (min-width: 840px) {
    margin-bottom: 0px;
    padding-bottom: 0;
    border-bottom: none;
    width: auto;

    margin: 0;
    margin-right: 18px;
  }
`;

export const BtnPro = styled(NavLink)`
  background-color: var(--white);
  color: var(--green);
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 1rem;

  @media screen and (min-width: 840px) {
    margin-top: 0rem;
  }
  &:hover {
    color: #1890ff;
  }

  @media screen and (min-width: 840px) {
    margin-top: 0rem;
  }
`;

export const ButtonUp = styled.span`
  width: 60px;
  height: 60px;
  background-color: var(--green);
  border-radius: 50%;
  box-shadow: var(--shadow);
  position: fixed;
  right: 50px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--white);
  cursor: pointer;
  z-index: 500;
`;

export const FinishSection = styled(SectionStyled)`
  flex-direction: column;
  padding: 5rem 0;
  overflow-x: hidden;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 3rem;
    h1 {
      font-size: 3rem;
      color: var(--green);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 350ms;
    }

    svg {
      width: 90vw;
      max-width: 400px;
    }
  }

  button {
    padding: 12px 32px;
    margin: 0 8px;
  }

  @media screen and (min-width: 340px) {
    div h1 {
      font-size: 4rem;
    }
  }

  @media screen and (min-width: 480px) {
    div h1 {
      font-size: 5rem;
    }
  }

  @media screen and (min-width: 720px) {
    div h1 {
      font-size: 6rem;
    }
  }

  @media screen and (min-width: 980px) {
    div h1 {
      font-size: 7rem;
    }
  }
`;
