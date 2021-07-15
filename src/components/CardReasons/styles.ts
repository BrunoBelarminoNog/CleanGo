import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 32px 0;
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
  height: 280px;
  h1 {
    font-family: var(--font-secondary);
    font-size: 28px;
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
    font-size: 24px;
    text-align: justify;
  }
`;
