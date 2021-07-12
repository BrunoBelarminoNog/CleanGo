import styled from "styled-components";

interface InputStyledProps {
  error: boolean;
}

export const InputStyled = styled.input`
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid
    ${(props: InputStyledProps) => (props.error ? "tomato" : "var(--green)")};
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 8px 16px;
  transition: all 300ms;
  box-shadow: var(--shadow);

  &::placeholder {
    color: var(--gray);
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0.4;
  }
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
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
