import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface LinksProps {
  whiteSchema: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 97px 1rem;

  @media screen and (min-width: 920px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const Links = styled(NavLink)`
  color: var(--black);
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

  @media screen and (min-width: 920px) {
    color: ${(props: LinksProps) =>
      props.whiteSchema ? "var(--white)" : "var(--black)"};
    margin-bottom: 0px;
    padding-bottom: 0;
    border-bottom: none;
    width: auto;

    margin: 0;
    margin-right: 18px;
  }
`;

export const BtnLink = styled(NavLink)`
  color: var(--white);
  background-color: var(--green);
  border-radius: 4px;
  padding: 6px 18px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 1rem;
  transition: all 350ms;

  &:hover {
    color: var(--white);
    background-color: var(--dark-green);
  }

  @media screen and (min-width: 920px) {
    margin-top: 0rem;
    color: ${(props: LinksProps) =>
      props.whiteSchema ? "var(--dark-green)" : "var(--white)"};
    background-color: ${(props: LinksProps) =>
      props.whiteSchema ? "var(--gray)" : "var(--green)"};
  }
`;
