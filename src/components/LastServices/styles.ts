import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  max-height: 600px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #bec9bd 14%, #919990 64%);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #546652 14%, #313630 64%);
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 8.2px 10px 12px 0px #f0f0f0;
  }

  h2 {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 1.3rem;
    color: var(--dark-gray);
    font-weight: 500;
    text-align: left;
    padding: 0.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 25% 25%;
  align-items: center;
  border-bottom: 2px solid var(--gray);
  padding: 8px 0;
  transition: all 250ms;
  min-width: 500px;

  &:hover:not(:first-of-type) {
    background-color: rgba(250, 250, 250, 0.45);
    cursor: pointer;
  }
`;

export const TitleTable = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
  &:last-child {
    text-align: right;
  }
`;

export const TableRow = styled.span`
  font-weight: 400;
  font-size: 0.7rem;
  transition: all 350ms;

  &:last-child {
    text-align: right;
  }

  @media screen and (min-width: 420px) {
    font-size: 1rem;
  }
`;
