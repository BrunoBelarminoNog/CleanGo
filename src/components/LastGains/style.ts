import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: var(--font-secondary);
    color: var(--dark-gray);
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 8px;
      margin-top: 2px;
    }
  }

  p {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--green);
  }
`;
