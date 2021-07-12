import styled from "styled-components";
import Input from "../../../components/Input";
import ArrowDown from "../../../asssets/svg/arrowdown.svg";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 80px;
  @media only screen and (min-width: 768px) {
    margin-left: 128px;
    margin-bottom: 0px;
  }
`;
export const InputSearch = styled(Input)`
  grid-area: inputArea;
  justify-self: flex-start;
  @media only screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const ContainerServices = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(2, 155px);
  width: 100%;
  margin-bottom: 80px;
  margin-top: 1rem;
  grid-gap: 10px 20px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 155px);
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 155px);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(6, 155px);
  }
`;
export const SelectStyled = styled.select`
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #313630;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  position: relative;
  z-index: 2;
  min-width: 200px;
  &::placeholder {
    color: var(--gray);
  }

  appearance: none;
`;

export const LabelStyled = styled.label`
  font-family: var(--font-standard);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  padding: 0.5rem;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  grid-area: inputArea;
  margin-left: 1rem;
  align-self: flex-start;
  &::after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${ArrowDown}) no-repeat center center;
    width: 26px;
    height: 39px;
    position: absolute;
    right: 10px;
    bottom: 0;
    z-index: 1;
  }
`;
