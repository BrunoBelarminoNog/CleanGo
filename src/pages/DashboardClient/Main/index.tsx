import React from "react";
import BackgroundGray from "../../../components/BackgroundGray";
import RequestService from "../../../components/RequestService";
import { Container } from "./styles";

const Main = () => {
  return (
    <BackgroundGray logo>
      <Container>
        <RequestService></RequestService>
      </Container>
    </BackgroundGray>
  );
};

export default Main;
