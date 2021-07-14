import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-left: 150px;
  }
  @media only screen and (min-width: 920px) {
    margin-left: 150px;
    flex-direction: row;
  }
`;
