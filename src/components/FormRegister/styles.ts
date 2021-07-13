import styled, { keyframes } from "styled-components";

interface ContainerFormProps {
  load: boolean;
}

const appearAnimation = keyframes`
  from {
    transform: translateX(40px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const ContainerForm = styled.div`
  max-width: 510px;
  margin: 0 auto;
  padding: 12px 12px 42px;
  display: flex;
  font-family: Lato;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 1rem;
    font-weight: 700;

    @media only screen and (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;

    > * {
      opacity: 0;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      animation-name: ${appearAnimation};
      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:nth-child(4) {
        animation-delay: 0.4s;
      }
      &:nth-child(5) {
        animation-delay: 0.5s;
      }
      &:nth-child(6) {
        animation-delay: 0.6s;
      }
      &:nth-child(7) {
        animation-delay: 0.7s;
      }
      &:nth-child(8) {
        animation-delay: 0.8s;
      }
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    text-align: start;
    margin: 20px 0;

    #link {
      font-style: normal;
      font-weight: bold;
      color: var(--black);

      &:hover {
        text-decoration: underline;
      }
    }
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .containerButton {
    text-align: right;

    button {
      position: relative;
    }

    button span {
      opacity: ${(props: ContainerFormProps) => (props.load ? "0" : "1")};
      transition: all 350ms;
    }

    button svg {
      animation: spin 1.2s infinite ease-in-out;
      opacity: ${(props: ContainerFormProps) => (props.load ? "1" : "0")};
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
  }
`;
