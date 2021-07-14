import { Container, ContainerInner } from "./styles";
import Map from "../../asssets/svg/map.svg";
import Briefcase from "../../asssets/svg/briefcase.svg";
import BagOfMoney from "../../asssets/svg/bag-of-money.svg";

const CardReasons = () => {
  return (
    <Container>
      <ContainerInner>
        <h1>Empreenda você mesmo</h1>
        <img src={Briefcase} alt="Empreendedor" />
        <p>
          Seja seu próprio chefe e concilie sua agenda pessoal e profissional.
        </p>
      </ContainerInner>
      <ContainerInner>
        <h1>Trabalhe perto de casa</h1>
        <img src={Map} alt="Mapa" />
        <p>
          Escolha os melhores lugares para trabalhar e o melhor perto de você.
        </p>
      </ContainerInner>
      <ContainerInner>
        <h1>Complemente sua renda</h1>
        <img src={BagOfMoney} alt="Dinheiro" />
        <p>Você escolhe no que trabalhar e recebe por hora trabalhada.</p>
      </ContainerInner>
    </Container>
  );
};
export default CardReasons;
