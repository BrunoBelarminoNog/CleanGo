import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--black);
    font-weight: 500;
    width: 100%;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    margin: 0rem 0 0.5rem;
    text-align: right;
    border-bottom: 1px solid var(--gray);
    display: none;
  }

  @media screen and (min-width: 420px) {
    p {
      display: block;
      margin-bottom: 0px;
      padding-bottom: 0;
      border-bottom: none;
      width: auto;

      margin: 0;
      margin-right: 18px;
    }

    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const Links = styled.span`
  color: var(--black);
  font-weight: 500;
  width: 100%;
  font-size: 2rem;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: 840px) {
    margin-bottom: 0px;
    padding-bottom: 0;
    border-bottom: none;
    width: auto;

    margin: 0;
  }
`;
