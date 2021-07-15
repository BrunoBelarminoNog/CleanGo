import React from "react";
import { useLocation } from "react-router-dom";
import { BtnLink, Container, Links } from "./styles";

interface HeaderNavProps {
  whiteSchema?: boolean;
}
const HeaderNav = ({ whiteSchema = false }: HeaderNavProps) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Links to="/sejaumparceiro" whiteSchema={whiteSchema}>
        Trabalhe com a CleanGo
      </Links>
      <Links to="/login" whiteSchema={whiteSchema}>
        Login
      </Links>
      <BtnLink
        to={pathname === "/sejaumparceiro" ? "/cadastroparceiro" : "/cadastro"}
        whiteSchema={whiteSchema}
      >
        Cadastro
      </BtnLink>
    </Container>
  );
};

export default HeaderNav;
