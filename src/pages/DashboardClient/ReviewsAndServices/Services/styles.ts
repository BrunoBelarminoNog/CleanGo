import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem 0;
  display: grid;
  grid-template-columns: 90vw;
  justify-items: center;
  transition: all 350ms;
  grid-gap: 0;

  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;
