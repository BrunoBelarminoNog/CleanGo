import styled from "styled-components";

interface FeedProps {
  open: boolean;
}

export const FeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 720px;
  background-color: var(--white);
  padding: 80px 50px 50px;
  height: calc(100vh);
  margin-right: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
  transition: all 350ms;
  position: fixed;
  top: ${(props: FeedProps) => (props.open ? "0px" : "-1000px")};
  left: 0;
  right: 0;
  z-index: 2;

  > div {
    overflow-y: auto;
    width: 100%;
    height: 80%;
    margin-top: 32px;
    padding-right: 24px;

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
  }

  button {
    align-self: flex-end;
    margin-top: 0.7rem;
  }

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    max-width: 700px;
    background-color: var(--white);
    padding: 50px;
    height: 92vh;
    min-height: 800px;
    margin-right: 0;
    box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.2);
    border-radius: 16px 16px 0px 0px;
    position: relative;
    top: inherit;
    bottom: 0px;
    left: inherit;
    transform: translateY(5px);
    right: 0;
    z-index: 2;

    > div {
      overflow-y: auto;
      width: 100%;
      height: 80%;
      margin-top: 30px;
    }

    button {
      align-self: flex-end;
      margin-top: 0.7rem;
    }
  }
`;

export const CardFeed = styled.section`
  img {
    width: 20px;
    cursor: pointer;
  }
`;

export const InputFeed = styled.textarea`
  background: rgba(255, 255, 255, 0.75);
  border: 3px solid var(--green);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 100px;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  -webkit-transition: all 300ms;
  transition: all 300ms;

  &::placeholder {
    position: absolute;
    color: var(--gray);
    font-size: 1rem;
  }
`;

export const FeedPost = styled.div`
  width: 100%;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0.5rem 0;

  border-bottom: 1px solid var(--gray);

  h3 {
    font-size: 1rem;
    font-weight: 700;
    /* font-family: var(--font-secondary); */
    color: var(--dark-green);
  }

  p {
    font-size: 0.9rem;
  }

  data {
    width: 100%;
    display: block;
    font-size: 0.7rem;
    margin-left: auto;
    margin-right: 0;
    text-align: right;
    color: var(--dark-gray);
  }
`;

export const ButtonOpen = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--green);
  box-shadow: var(--shadow);
  position: fixed;
  bottom: 90px;
  right: 24px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--white);

  @media screen and (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
