import React from "react";
import { BtnLink, Container, Links } from "./styles";

interface HeaderNavProps {
  whiteSchema?: boolean;
}
const HeaderNav = ({ whiteSchema = false }: HeaderNavProps) => {
  return (
    <Container>
      <Links to="/sejaumparceiro" whiteSchema={whiteSchema}>
        Trabalhe com a CleanGo
      </Links>
      <Links to="/login" whiteSchema={whiteSchema}>
        Login
      </Links>
      <BtnLink to="/cadastro" whiteSchema={whiteSchema}>
        Cadastro
      </BtnLink>
    </Container>
  );
};

export default HeaderNav;
