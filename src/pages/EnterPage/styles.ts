import styled from "styled-components";

export const ContainerLoginForm = styled.div`
  flex: 9;
  align-self: center;
  padding: 77px 0;

  @media screen and (min-width: 1024px) {
    flex: 7;
  }
`;

export const ContainerDescription = styled.div`
  flex: 7;
  position: relative;
  overflow-x: hidden;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 25;
  }

  div {
    text-align: right;
    max-width: 400px;
    padding: 0 20px;
    margin: 110px 66px auto auto;
    position: relative;
    z-index: 30;

    h2 {
      font-family: Oswald;
      font-size: 2rem;
      color: var(--green);
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
    }
    p {
      margin-top: 13px;
      font-family: Lato;
      font-size: 1rem;
    }
  }
`;

export const ContainerEnter = styled.main`
  background-color: #222;
  margin-top: -77px;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=100");
  }
`;

export const ContainerLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  z-index: 5;
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
  width: 80vw;
  margin: 0 auto;
  background-color: rgba(250, 250, 250, 0.3);
  backdrop-filter: blur(6px);
  max-width: 700px;
  padding: 32px 12px;
  border-radius: 8px;
  overflow: auto;
  height: 60vh;
  max-height: 445px;

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
    background: #d3d3d3;
    border-radius: 10px;
    box-shadow: inset 8.2px 10px 12px 0px #f0f0f0;
  }

  &.slide-up {
    top: 70px;
    transform: translate(-50%, 0%);
    transition: all 0.3s ease;
    overflow: hidden;

    > div {
      opacity: 0;
      visibility: hidden;
    }

    .form-holder,
    .submit-btn {
      opacity: 0;
      visibility: hidden;
    }

    .form-title {
      font-size: 1.1rem;
      cursor: pointer;
      text-align: center;
    }

    .form-title span {
      margin-right: 5px;
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease;
      display: inline;
    }
  }

  .form-title {
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 1rem;
    font-weight: 700;

    @media only screen and (min-width: 768px) {
      font-size: 1.8rem;
    }

    span {
      color: rgba(0, 0, 0, 0.4);
      opacity: 0;
      visibility: hidden;
      display: none;
      transition: all 0.3s ease;
    }
  }
`;

export const ContainerLogoff = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 5;
  transition: all 0.3s ease;
  padding-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translate(-50%, 0);
    background-color: #fff;
    width: 200%;
    height: 250px;
    border-radius: 50%;
    z-index: 4;
    transition: all 0.3s ease;
  }

  .center {
    position: absolute;
    top: calc(50% - -50px);
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: 65%; */
    z-index: 5;
    transition: all 0.3s ease;
    height: 80vh;
    overflow-y: auto;
    min-height: 250px;
    padding: 0 12px;
    width: 90vw;

    @media screen and (min-width: 768px) {
      padding: 0 32px;
    }

    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(13deg, #bec9bd 14%, #919990 64%);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(13deg, #546652 14%, #313630 64%);
    }
    ::-webkit-scrollbar-track {
      background: #d3d3d3;
      border-radius: 10px;
      box-shadow: inset 8.2px 10px 12px 0px #f0f0f0;
    }

    .form-title {
      color: #000;
      font-size: 1.7rem;
      text-align: center;

      span {
        color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        display: none;
      }
    }

    .form-holder {
      border-radius: 15px;
      background-color: #fff;
      margin-top: 12px;
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease;
      padding-bottom: 2rem;
      .input {
        border: 0;
        outline: none;
        box-shadow: none;
        display: block;
        height: 30px;
        line-height: 30px;
        padding: 8px 15px;
        border-bottom: 1px solid #eee;
        width: 100%;
        font-size: 12px;

        &:last-child {
          border-bottom: 0;
        }
        &::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }

    .submit-btn {
      background-color: #6b92a4;
      color: rgba(256, 256, 256, 0.7);
      border: 0;
      border-radius: 15px;
      display: block;
      margin: 15px auto;
      padding: 15px 45px;
      width: 100%;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease;

      &:hover {
        transition: all 0.3s ease;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  &.slide-up {
    top: 90%;
    transition: all 0.3s ease;
  }

  &.slide-up .center {
    top: 3%;
    transform: translate(-50%, 0%);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  &.slide-up .form-holder,
  &.slide-up .submit-btn {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  &.slide-up .form-title {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &.slide-up .form-title span {
    margin-right: 5px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    display: inline;
  }
`;
