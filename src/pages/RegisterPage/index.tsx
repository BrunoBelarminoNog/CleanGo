import { useEffect, useLayoutEffect, useRef } from "react";
import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";
import { useTheme } from "../../providers/Theme";
import {
  ContainerRegisterForm,
  ContainerRegister,
  ContainerDescription,
} from "./styles";

import imageRegister from "../../asssets/images/image-register.png";
import gsap from "gsap";

const RegisterPage = () => {
  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(false);
  }, [handleBackground]);

  const descriptionElement = useRef<HTMLImageElement>(null);
  const textElement = useRef<HTMLParagraphElement>(null);
  const titleElement = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from(descriptionElement.current, {
      opacity: 0,
      translateX: 500,
    })
      .from(
        textElement.current,
        {
          opacity: 0,
          translateX: -40,
        },
        "-=.3"
      )
      .from(
        titleElement.current,
        {
          opacity: 0,
          delay: 0.1,
          translateX: -40,
        },
        "<"
      );
  }, []);

  return (
    <>
      <TitlePage title="Cadastro" />
      <Header>
        <HeaderNav />
      </Header>
      <ContainerRegister>
        <ContainerDescription id="description">
          <div>
            <h2 ref={titleElement}>
              A melhor opção para os serviços da sua residência
            </h2>
            <p ref={textElement}>
              Oferecimos a equipe mais confiável e experiente, pronta para
              oferecer serviços de limpeza e consertor gerais de qualidade e o
              cuidado especial que você merece!
            </p>
          </div>
          <img src={imageRegister} alt="" ref={descriptionElement} />
        </ContainerDescription>
        <ContainerRegisterForm>
          <FormRegister />
        </ContainerRegisterForm>
      </ContainerRegister>
    </>
  );
};

export default RegisterPage;
