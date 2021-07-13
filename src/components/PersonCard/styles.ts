import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  width: 200px;
  height: 250px;
  background-color: var(--white);
  position: relative;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 175px;
    position: absolute;
    bottom: 0.5rem;
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 55px;
  position: absolute;
  border-radius: 4px 4px 0 0;
  background-color: var(--green);
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin: 8px;
`;

export const Type = styled.span`
  font-size: 14px;
  color: var(--green);
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid var(--dark-green);
  z-index: 1;
  margin-top: 0.8rem;
`;
