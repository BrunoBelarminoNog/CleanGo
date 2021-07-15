import styled from "styled-components";
import WorkDesktop from "../../asssets/images/trabalhe-conosco-desktop.png";
import { NavLink } from "react-router-dom";

import WorkMobile from "../../asssets/images/home2.png";
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-green);
  margin-top: -90px;
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
  margin: 5.5rem 0 2.5rem;
  background-image: url(${WorkMobile});
  background-size: 130% 130%;
  background-repeat: no-repeat;
  background-position: top left;
  justify-content: flex-end;

  @media only screen and (min-width: 768px) {
    background-image: url(${WorkDesktop});
  }
`;
export const SectionWhowItWorks = styled(SectionStyled)`
  flex-direction: column;
  padding: 5rem 0;
  h1 {
    margin: 0 0 3rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 6rem 0;
    h1 {
      margin: 0 0 5rem;
    }
  }
`;
export const SectionReasons = styled(SectionStyled)`
  flex-direction: column;
  background-color: var(--dark-green);
  h1 {
    color: var(--white);
  }
  padding: 5rem 0;

  > button{
    background-color: var(--white);
    color: var(--green);
    margin-top: 20px;
  }
  > button:hover{
    background-color: var(--gray);
    color: var(--dark-green)
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
    margin: 0 2rem;
  }
  margin: 0 1rem;
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