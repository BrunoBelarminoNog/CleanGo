import styled, { css } from "styled-components";
import LogoBackground from "../../asssets/svg/logobackground.svg";

interface ContainerProps {
  logo: boolean;
}

export const Container = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  background-color: var(--light-gray);

  ${(props: ContainerProps) =>
    props.logo &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 392px;
        height: 445px;
        background: url(${LogoBackground}) no-repeat center center;
      }
    `}
`;
