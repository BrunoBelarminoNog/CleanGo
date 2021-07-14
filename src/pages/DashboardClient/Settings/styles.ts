import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-family: var(--font-secondary);
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: var(--dark-gray);
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin-left: 12rem;
    text-align: left;
  }
`;
