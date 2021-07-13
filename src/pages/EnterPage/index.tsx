import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, useState } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";
import { useTheme } from "../../providers/Theme";
import { ContainerLogin, ContainerEnter, ContainerLogoff } from "./styles";

import FormRegister from "../../components/FormRegister";

const EnterPage = () => {
  const { handleBackground } = useTheme();
  const [slideUp, setSlideUp] = useState(false);

  const formLogOff = useRef<HTMLDivElement>(null);
  const formLogIn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleBackground(false);
  }, [handleBackground]);

  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);
  }, []);

  return (
    <>
      <TitlePage />
      <Header>
        <HeaderNav />
      </Header>
      <ContainerEnter>
        <ContainerLogin className={slideUp ? "" : "slide-up"} ref={formLogIn}>
          <h2
            className="form-title"
            onClick={() => {
              formLogOff.current?.scrollTo(0, 0);
              setSlideUp(!slideUp);
            }}
          >
            <span>ou</span> Faça login
          </h2>
          <div className="form-holder">
            <FormLogin />
          </div>
        </ContainerLogin>
        <ContainerLogoff className={slideUp ? "slide-up" : ""}>
          <div className="center" ref={formLogOff}>
            <h2
              className="form-title"
              onClick={(e: React.MouseEvent<HTMLHeadingElement>) => {
                formLogIn.current?.scrollTo(0, 0);
                setSlideUp(!slideUp);
              }}
            >
              <span>ou</span> Cadastre-se
            </h2>
            <div className="form-holder">
              <FormRegister />
            </div>
          </div>
        </ContainerLogoff>
      </ContainerEnter>
    </>
  );
};

export default EnterPage;
