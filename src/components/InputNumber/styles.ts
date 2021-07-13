import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  position: relative;
  justify-content: center;

  @media screen and (min-width: 670px) {
    height: 48px;
  }
`;

interface ButtonOpProps {
  isLeft?: boolean;
}

export const ButtonOp = styled.button`
  background: var(--white);
  z-index: 3;
  height: 100%;
  cursor: pointer;
  color: green;

  border: 3px solid var(--green);
  border-left: ${(props: ButtonOpProps) =>
    props.isLeft ? "3px solid var(--green)" : "none"};
  border-right: ${(props: ButtonOpProps) =>
    !props.isLeft ? "3px solid var(--green)" : "none"};

  border-radius: ${(props: ButtonOpProps) =>
    props.isLeft ? "4px 0 0 4px" : "0 4px 4px 0"}; ;
`;

export const ValueOutput = styled.label`
  background: var(--white);
  border: 3px solid var(--green);
  border-left: 1px solid var(--green);
  border-right: 1px solid var(--green);
  font-family: "Lato";
  font-weight: 700;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  transition: all 300ms;
`;

export const HandlerWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const NumberButton = styled.input`
  position: relative;
  opacity: 0;
  z-index: 0;
  cursor: pointer;
  transition: all 300ms;

  width: 100%;
  height: 100%;

  &:hover ~ ${HandlerWrapper} {
    filter: brightness(0.92);
  }
`;
