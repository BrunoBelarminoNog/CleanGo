import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";
import { useTheme } from "../../providers/Theme";
import {
  ContainerLoginForm,
  ContainerLogin,
  ContainerDescription,
} from "./styles";

import ImageLogin from "../../asssets/images/image-login.png";

const LoginPage = () => {
  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(false);
  }, [handleBackground]);

  const description = useRef<HTMLImageElement>(null);
  const text = useRef<HTMLParagraphElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline();

    tl.from(description.current, {
      opacity: 0,
      translateX: -500,
    })
      .from(
        text.current,
        {
          opacity: 0,
          translateX: 40,
        },
        "-=.3"
      )
      .from(
        title.current,
        {
          opacity: 0,
          delay: 0.1,
          translateX: 40,
        },
        "<"
      );
  }, []);

  return (
    <>
      <TitlePage title="Login" />
      <Header>
        <HeaderNav />
      </Header>
      <ContainerLogin>
        <ContainerLoginForm>
          <FormLogin />
        </ContainerLoginForm>
        <ContainerDescription id="description">
          <div>
            <h2 ref={title}>Te conectamos aos melhores profissionais</h2>
            <p ref={text}>
              Facilitamos a vida de milhares de pessoas, levando comodidade e
              praticidade para seus afazeres do lar!
            </p>
          </div>
          <img src={ImageLogin} alt="" ref={description} />
        </ContainerDescription>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
