import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 90px;
  margin-top: 4rem;
  margin-left: 0;
  margin-right: 0;

  @media screen and (min-width: 720px) {
    margin-left: 85px;
    margin-top: 2rem;
    margin-bottom: 0;
    width: 90%;
  }

  @media screen and (min-width: 860px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media screen and (min-width: 1020px) {
    gap: 2rem;
  }
`;
