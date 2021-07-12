import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  h2 {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 1.3rem;
    color: var(--dark-gray);
    font-weight: 500;
    text-align: left;
    padding: 0.5rem 0;
  }

  > h3 {
    height: 230px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    box-shadow: inset 14px 14px 28px #d2d2d2, inset -14px -14px 28px #fcfcfc;
  }
`;

export const ReviewsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 16px;

  &:hover li:not(:hover) {
    opacity: 0.5;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar:hover {
    transform: scaleX(1.2);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #bec9bd 14%, #919990 64%);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #546652 14%, #313630 64%);
    transform: scale(2);
  }
  ::-webkit-scrollbar-track {
    background: #d3d3d3;
    border-radius: 10px;

    box-shadow: inset 8.2px 10px 12px 0px #f0f0f0;
  }
`;

export const ReviewsCard = styled.li`
  width: 100%;
  background-color: var(--white);
  border-radius: 14px;
  box-shadow: var(--shadow);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  opacity: 1;

  transition: all 200ms;
`;

export const Stars = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  svg {
    margin-right: 8px;
    fill: var(--green);
  }
`;

export const ReviewContent = styled.p`
  font-size: 1rem;
  color: var(--black);
`;
