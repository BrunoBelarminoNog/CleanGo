import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: right;

  h2 {
    font-family: var(--font-secondary);
    color: var(--dark-gray);
  }

  span {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--green);
  }
`;
