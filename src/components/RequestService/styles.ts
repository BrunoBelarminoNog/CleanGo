import styled from "styled-components";

export const Container = styled.div`
  font-family: "Lato";
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
  width: 90%;
  z-index: 1;
  @media screen and (min-width: 720px) {
    width: 60%;
  }
  @media screen and (min-width: 860px) {
    min-width: 360px;
    gap: 1.6rem;
    padding: 1.6rem;
    width: 50%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const RoomsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (min-width: 440px) {
    gap: 2rem;
    flex-direction: row;
  }
`;

export const InputNumberWrapper = styled.div`
  width: 180px;
  > div {
    width: 85px;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 5px;
  @media screen and (min-width: 440px) {
    width: 150px;
  }
`;

export const InputNumberLabel = styled.label`
  font-size: 18px;
  color: var(--dark-green);
`;

export const WrapperInputsRadio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Title = styled.h1`
  font-family: "Oswald";
  font-size: 16px;
  color: var(--dark-green);
  @media screen and (min-width: 720px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.span`
  font-family: "Lato";
  font-size: 12px;
  color: var(--dark-gray);
  @media screen and (min-width: 720px) {
    font-size: 16px;
  }
`;

export const Border = styled.div`
  border: 2px solid var(--dark-green);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.span`
  font-family: "Oswald";
  font-weight: bold;
  font-size: 18px;
  color: var(--dark-green);
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  color: var(--dark-green);
`;

export const LimitPieces = styled.div`
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 46px;
  background-color: var(--green);
  color: var(--white);
  border-radius: 4px;
  margin-left: 0;
  @media screen and (min-width: 380px) {
  margin-left: 2rem;
  }
  @media screen and (min-width: 440px) {
    font-size: 18px;
    width: 186px;
    margin-left: 3rem;
  }
`;

export const DateWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 440px) {
    width: 240px;
  }
`;
