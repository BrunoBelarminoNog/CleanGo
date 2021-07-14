import React from "react";
import { Title, Container } from "./styles";
import FormUpdateProfile from "../../../components/FormUpdateProfile";

const Settings = () => {
  return (
    <Container>
      <Title>Configurações</Title>
      <FormUpdateProfile />
    </Container>
  );
};

export default Settings;
