import React, { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
  logo?: boolean;
}

const BackgroundGray = ({ children, logo = false }: Props) => {
  return <Container logo={logo}>{children}</Container>;
};

export default BackgroundGray;
