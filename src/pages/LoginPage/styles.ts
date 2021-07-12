import styled from "styled-components";
import imageLogin from "../../asssets/images/image-login.png";

export const ContainerLogin = styled.div`
  margin-top: -77px;
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
  /* background-image: url(${imageLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right; */
  position: relative;
  /* overflow-x: hidden; */

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
