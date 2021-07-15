import styled from "styled-components";
import imageRegister from "../../asssets/images/image-register.png";

export const ContainerRegister = styled.div`
  margin-top: -70px;
  min-height: 100vh;
  display: flex;
  #description {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    #description {
      display: block;
    }
  }
`;

export const ContainerRegisterForm = styled.div`
  flex: 9;
  align-self: center;
  padding: 77px 0;

  @media screen and (min-width: 1024px) {
    flex: 7;
  }
`;

export const ContainerDescription = styled.div`
  flex: 7;
  /* background-image: url(${imageRegister});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  position: relative;
  overflow-x: hidden; */
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
    z-index: 25;
  }

  div {
    text-align: left;
    max-width: 500px;
    padding: 0 20px;
    margin: 110px auto auto 66px;
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
