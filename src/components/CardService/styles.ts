import styled from "styled-components";

export const Container = styled.div`
  width: 155px;
  height: 230px;
  border-radius: 14px;
  background-color: var(--white);
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 8px auto;
  padding: 16px;
  h2 {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 1.3rem;
    color: var(--dark-gray);
    font-weight: 500;
    text-align: left;
    padding: 0.5rem 0;
  }
  h3 {
    font-family: var(--font-standard);
    font-size: 18px;
  }
  .price {
    font-size: 20px;
    font-weight: 700;
  }
  li {
    font-family: var(--font-standard);
    font-size: 14px;
    padding: 4px 0;
  }
  span {
    color: var(--dark-gray);
    font-family: var(--font-standard);
    font-size: 12px;
  }
`;
