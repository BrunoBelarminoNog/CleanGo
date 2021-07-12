import React from "react";
import { Container, Links } from "./styles";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

interface HeaderNavAuthProps {
  name: string;
}

const HeaderNavAuth = ({ name }: HeaderNavAuthProps) => {
  const history = useHistory();
  const { userLogoff, user } = useAuth();

  return (
    <Container>
      <p>{user?.name}</p>
      <Links onClick={() => userLogoff(history)}>
        <IoExitOutline />
      </Links>
    </Container>
  );
};

export default HeaderNavAuth;
