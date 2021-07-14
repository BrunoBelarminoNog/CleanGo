import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 4px;
  width: 90%;
  z-index: 1;
  margin-bottom: 90px;
  @media screen and (min-width: 720px) {
    width: 60%;
  }
  @media screen and (min-width: 860px) {
    width: 335px;
    height: 420px;
  }
`;

export const TitleContainer = styled.div`
  background-color: var(--green);
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 860px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h2`
  color: var(--white);
  font-family: "Oswald";
  @media screen and (min-width: 860px) {
    font-size: 24px;
  }
`;

export const Flex = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 860px) {
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
  }
`;

export const InfoContainer = styled.div`
  &:nth-child(3) {
    padding-left: 14px;
    border-left: 2px solid var(--light-gray);
  }
  @media screen and (min-width: 860px) {
    width: 100%;
    &:nth-child(3) {
      padding-left: 0;
      padding-top: 14px;
      border: none;
      border-top: 2px solid var(--light-gray);
    }
  }
`;

export const InfoTitle = styled.h4`
  font-family: "Oswald";
  color: var(--black);
  font-size: 12px;

  @media screen and (min-width: 860px) {
    font-size: 18px;
  }
`;

export const Info = styled.span`
  font-family: "Lato";
  color: var(--black);
  font-size: 14px;

  @media screen and (min-width: 860px) {
    font-size: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  > button {
    width: 100%;
  }
  @media screen and (min-width: 860px) {
    position: relative;
    height: 70px;
    > button {
      position: absolute;
      right: 15px;
      width: 152px;
    }
  }
`;
