import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, ContainerInner } from "./styles";
import Map from "../../asssets/svg/map.svg";
import Briefcase from "../../asssets/svg/briefcase.svg";
import BagOfMoney from "../../asssets/svg/bag-of-money.svg";

const CardReasons = () => {
  const CardReasonsOne = useRef<HTMLDivElement>(null);
  const CardReasonsTwo = useRef<HTMLDivElement>(null);
  const CardReasonsThree = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(CardReasonsOne.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: CardReasonsOne.current,
        scrub: 2,
        start: "top 90%",
        end: "top 70%",
      },
    });
    gsap.from(CardReasonsTwo.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: CardReasonsTwo.current,
        scrub: 1.5,
        start: "top 90%",
        end: "top 70%",
      },
    });
    gsap.from(CardReasonsThree.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: CardReasonsThree.current,
        scrub: 2,
        start: "top 90%",
        end: "top 70%",
      },
    });
  }, []);

  return (
    <Container>
      <ContainerInner ref={CardReasonsOne}>
        <h1>Empreenda você mesmo</h1>
        <img src={Briefcase} alt="Empreendedor" />
        <p>
          Seja seu próprio chefe e concilie sua agenda pessoal e profissional.
        </p>
      </ContainerInner>
      <ContainerInner ref={CardReasonsTwo}>
        <h1>Trabalhe perto de casa</h1>
        <img src={Map} alt="Mapa" />
        <p>
          Escolha os melhores lugares para trabalhar e o melhor perto de você.
        </p>
      </ContainerInner>
      <ContainerInner ref={CardReasonsThree}>
        <h1>Complemente sua renda</h1>
        <img src={BagOfMoney} alt="Dinheiro" />
        <p>Você escolhe no que trabalhar e recebe por hora trabalhada.</p>
      </ContainerInner>
    </Container>
  );
};
export default CardReasons;
