import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Modal } from "antd";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    /* bottom: 18px; */
  }

  .ant-modal-header {
    background-color: var(--white);
    border-radius: 8px 8px 0 0;
    border-bottom: 2px solid var(--gray);
    font-family: var(--font-secondary);
  }

  .ant-modal-content {
    background-color: var(--white);
    border-radius: 8px;
  }

  .ant-modal-title {
    font-size: 1rem;
    font-weight: bold;
  }

  .ant-modal-body {
    border-radius: 0 0 8px 8px;
    padding: 8px;
  }

  .ant-modal-footer {
    border-radius: 8px;
  }

  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 1.1rem;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start;
  justify-content: center; */
  width: 100%;

  button {
    display: initial;
    align-self: center;
    margin: 0.5rem;
  }

  @media only screen and (min-width: 426px) {
    button {
      display: none;
    }
  }
`;

export const ContainerRow = styled(ContainerInfo)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    display: none;
  }
  @media only screen and (min-width: 426px) {
    button {
      display: initial;
    }
  }
`;
export const CloseIcon = styled(FaTimes)`
  fill: black;
  width: 20px;
  height: 20px;
`;
export const TitleModal = styled.h1`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 2px solid var(--gray);
  padding: 0 0.5rem 0.5rem;
`;
export const ServiceClass = styled.h2`
  font-family: var(--font-standard);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem;
`;

export const Subtitles = styled.h3`
  font-family: var(--font-standard);
  font-size: 18px;
  font-weight: 700;
  padding: 0.5rem 0.5rem 0;
`;
export const Adress = styled.p`
  font-family: var(--font-standard);
  font-size: 18px;
  padding: 0.5rem;
`;
export const GeneralInfo = styled.h4`
  font-family: var(--font-standard);
  font-size: 1rem;
  font-weight: 400;
  padding: 0 0.5rem 0;

  &.hours,
  &.price {
    font-weight: 700;
    color: var(--green);
    font-size: 1.1rem;
  }
`;
export const ServiceDetails = styled.ul`
  li {
    font-family: var(--font-standard);
    font-size: 18px;
    padding: 0 0.5rem 0;
  }
`;
