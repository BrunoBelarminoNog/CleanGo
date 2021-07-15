import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 12px 0;
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 1280px;
  }
`;
export const ContainerInner = styled(Container)`
  flex-direction: column;
  margin: 0;
  justify-content: flex-start;
  max-width: 310px;
  margin-top: 2rem;
  padding: 1rem 0.5rem;
  transition: all 200ms;
  border-radius: 8px;
  border: 4px solid transparent;

  &:hover {
    border: 4px solid var(--green);
    transform: scale(1.1);
  }

  h1 {
    font-family: var(--font-secondary);
    font-size: 22px;
    text-align: center;
    margin: 16px;
  }
  img {
    width: 100px;
    height: 100px;
    margin: 16px;
  }
  p {
    color: var(--white);
    font-family: var(--font-standard);
    font-size: 18px;
    text-align: center;
  }

  @media screen and (min-width: 720px) {
    h1 {
      font-family: var(--font-secondary);
      font-size: 28px;
      text-align: center;
      margin: 16px;
    }

    p {
      color: var(--white);
      font-family: var(--font-standard);
      font-size: 22px;
      text-align: center;
    }
  }
`;
