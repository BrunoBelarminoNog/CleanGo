import styled from "styled-components";

export const Container = styled.div`
  font-family: "Lato";
  padding: 1.6rem;
  background-color: var(--white);
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 4px;
  min-width: 550px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const InputNumberWrapper = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  gap: 5px;
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
  font-size: 28px;
  color: var(--dark-green);
`;

export const Subtitle = styled.span`
  font-family: "Lato";
  font-size: 16px;
  color: var(--dark-gray);
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
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 46px;
  background-color: var(--green);
  color: var(--white);
  border-radius: 4px;
  margin-left: 4rem;
`;

export const RoomsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const DateWrapper = styled.div`
  width: 35%;
`;
