import { Container, ContainerInner } from "./styles";
import Register from "../../asssets/svg/register.svg";
import Return from "../../asssets/svg/return.svg";
import AppAccess from "../../asssets/svg/app-access.svg";
const CardWorkWithUs = () => {
  return (
    <Container>
      <ContainerInner>
        <img src={Register} alt="cadastro" />
        <h1 className="cardTitle">Cadastro</h1>
        <p>Coloque suas informações e receba os melhores serviços.</p>
      </ContainerInner>
      <ContainerInner>
        <img src={Return} alt="cadastro" />
        <h1 className="cardTitle">Acesso ao Aplicativo</h1>
        <p>Tenha uma plataforma só sua para gerenciar seus serviços.</p>
      </ContainerInner>
      <ContainerInner>
        <img src={AppAccess} alt="cadastro" />
        <h1 className="cardTitle">Busque um serviço</h1>
        <p>Veja todos os serviços e selecione apenas os que você quiser.</p>
      </ContainerInner>
    </Container>
  );
};
export default CardWorkWithUs;
