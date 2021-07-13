import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 860px) {
    margin-left: 128px;
    margin-top: 2rem;
    flex-direction: row;
  }
`;
