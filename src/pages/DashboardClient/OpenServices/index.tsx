import React from "react";
import { Container } from "./styles";

import ServicesProgress from "../../../components/ServicesProgress";
import ServicesOpen from "../../../components/ServicesOpen";

const OpenServices = () => {
  return (
    <Container>
      <ServicesOpen />
      <ServicesProgress />
    </Container>
  );
};
export default OpenServices;
