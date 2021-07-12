import styled from "styled-components";

import ArrowDown from "../../asssets/svg/arrowdown.svg";

interface TextAreaStyledProps {
  error: boolean;
}

interface ButtonFormProps {
  load?: boolean;
}

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem;
  width: 100%;

  button {
    margin-top: 2rem;
    max-width: 200px;
    position: relative;
  }
  button span {
    opacity: ${(props: ButtonFormProps) => (props.load ? "0" : "1")};
    transition: all 350ms;
  }

  button svg {
    animation: spin 1.2s infinite ease-in-out;
    opacity: ${(props: ButtonFormProps) => (props.load ? "1" : "0")};
    position: absolute;
    transition: all 350ms;
    left: 45%;
    top: 30%;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }

  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 0.5rem;
  }
`;

export const WrapperDoubleInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;

    div {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const SelectStyled = styled.select`
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #313630;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  position: relative;
  z-index: 2;

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

  &::after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${ArrowDown}) no-repeat center center;
    width: 26px;
    height: 48px;
    position: absolute;
    right: 10px;
    bottom: 0;
    z-index: 1;
  }
`;
export const ErrorMessage = styled.span`
  font-family: var(--font-standard);
  font-size: 0.8rem;
  color: tomato;

  position: absolute;
  top: 9px;
  right: 10px;
  animation: appear 300ms forwards ease-in-out;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const WrapperInputsRadio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
`;

export const TextAreaStyled = styled.textarea`
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid
    ${(props: TextAreaStyledProps) => (props.error ? "tomato" : "var(--green)")};
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  transition: all 300ms;

  &::placeholder {
    color: var(--gray);
  }
`;
