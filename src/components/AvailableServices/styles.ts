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

export const SliderWrapper = styled.div`
  width: 90%;
  display: flex;
  position: relative;

  .alice-carousel__prev-btn {
    position: absolute;
    left: -50px;
    top: 50%;
    width: 36px;
    height: 36px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  .alice-carousel__next-btn {
    position: absolute;
    right: -50px;
    top: 50%;
    width: 36px;
    height: 36px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
`;
