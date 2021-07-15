import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  position: relative;
  row-gap: 3rem;
  width: 100%;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 280px);
    grid-template-rows: auto;
    gap: 5%;
  }
`;
export const ContainerInner = styled(Container)`
  position: relative;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 220px;
  grid-template-rows: auto;
  grid-template-areas:
    "title"
    "text";
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  border: 4px solid var(--dark-green);
  border-radius: 16px;
  width: 100%;
  max-width: 280px;
  height: 300px;

  .cardTitle {
    grid-area: title;
    font-family: var(--font-secondary);
    font-size: 24px;
    align-self: flex-start;
    margin: 0;
  }

  svg {
    border: 4px solid var(--dark-green);
    border-radius: 50%;
    padding: 20px;
    background-color: var(--white);
    align-self: flex-start;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    position: absolute;
    right: -30px;
    top: -30px;
    transition: all 300ms;
  }

  &:hover svg {
    background-color: var(--green);

    path {
      fill: var(--white);
    }
  }

  p {
    grid-area: text;
    font-family: var(--font-standard);
    font-size: 20px;
    width: 90%;
    margin: 0 auto;
    align-self: center;
  }
`;
