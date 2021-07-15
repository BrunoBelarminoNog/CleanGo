import Header from "../../components/Header";
import {
  Container,
  ContainerInner,
  SectionReasons,
  SectionPartner,
  SectionWhowItWorks,
  Title,
  Description,
  FinishSection,
} from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { History } from "history";
import CardWorkWithUs from "../../components/CardWorkWithUs";
import CardReasons from "../../components/CardReasons";
import { ButtonUp } from "../Home/styles";
import { FaAngleUp } from "react-icons/fa";
import HeaderNav from "../../components/HeaderNav";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useRef } from "react";

const WorkWithUs = () => {
  const history: History = useHistory();

  const handleClick = (): void => {
    history.push("/cadastroparceiro");
  };

  const FirstSection = useRef<HTMLElement>(null);

  const ContainerLogo = useRef<HTMLDivElement>(null);
  const SvgElement = useRef<SVGSVGElement>(null);
  const SvgEllipse = useRef<SVGEllipseElement>(null);

  const SvgPath = useRef<SVGPathElement>(null);
  const LogoName = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    gsap.from(FirstSection.current, {
      translateX: 500,
      opacity: 0,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ContainerLogo.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
        },
      })
      .from(SvgElement.current, {
        translateX: -1000,
      })
      .from(
        SvgEllipse.current,
        {
          fillOpacity: 1,
        },
        "<"
      )
      .from(SvgPath.current, {
        opacity: 0,
      })
      .from(
        LogoName.current,
        {
          opacity: 0,
          translateX: 500,
        },
        "<"
      );
  }, []);

  return (
    <>
      <Header whiteSchema>
        <HeaderNav whiteSchema />
      </Header>
      <Container>
        <SectionPartner ref={FirstSection}>
          <ContainerInner>
            <Title className="BeAPartner">Seja um parceiro CleanGo</Title>
            <Description>
              Entre para o CleanGo, veja seu número de clientes multiplicarem,
              trabalhe de forma prática, segura e eficiente. Com ganhos acima da
              média do mercado!
            </Description>
            <Button type="button" onClickFunc={handleClick}>
              Cadastre-se como profissional
            </Button>
          </ContainerInner>
        </SectionPartner>
        <SectionWhowItWorks>
          <Title className="whowItWorks">Como funciona</Title>
          <div className="separator"></div>

          <CardWorkWithUs />
        </SectionWhowItWorks>
        <SectionReasons>
          <Title>Por que ser um parceiro CleanGo?</Title>
          <CardReasons />
        </SectionReasons>
        <FinishSection>
          <div ref={ContainerLogo}>
            <svg
              // width="400"
              // height="401"
              viewBox="0 0 400 401"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ref={SvgElement}
            >
              <ellipse
                cx="200"
                cy="200.288"
                rx="200"
                ry="200.288"
                fill="#546652"
                fill-opacity="0.3"
                ref={SvgEllipse}
              />
              <path
                d="M213.687 333.266C209.078 332.625 206.964 331.964 206.964 331.162C206.964 330.821 208.304 326.524 209.942 321.613C213.797 310.058 215.691 300.588 216.165 290.5C216.579 281.712 216.069 281.038 214.103 287.771C209.341 304.09 198.278 327.833 195.438 327.833C193.441 327.833 183.423 323.878 175.028 319.775C167.098 315.9 154.521 308.088 154.521 307.038C154.521 306.744 155.313 306.142 156.281 305.7C158.435 304.718 164.358 300.188 169.266 295.771C175.09 290.53 186.159 276.662 184.518 276.662C184.357 276.662 181.01 278.916 177.08 281.671C164.646 290.388 149.629 296.861 141.839 296.861C139.078 296.861 138.366 296.428 131.27 290.432C127.085 286.896 119.637 280.014 114.719 275.139L105.777 266.275L109.474 265.691C117.681 264.394 129.579 261.068 134.233 258.77C136.942 257.433 139.056 256.236 138.931 256.111C138.806 255.986 134.472 256.168 129.3 256.515C119.616 257.165 102.423 256.399 99.2079 255.175C95.1267 253.621 85.5693 237.795 83.9267 229.872C83.4917 227.774 83.2396 225.953 83.3665 225.826C83.4933 225.699 85.4109 226.01 87.6274 226.517C99.771 229.298 127.093 231.251 144.436 230.579C169.625 229.603 188.096 226.279 200.671 220.461L205.606 218.177L205.201 215.214C204.716 211.673 205.813 209.204 209.796 204.877C214.663 199.59 215.698 200.008 236.201 215.551C245.855 222.87 246.263 224.039 241.782 231.55C240.336 233.973 238.799 235.602 237.336 236.263L235.099 237.273L235.515 241.313C235.743 243.535 236.381 249.746 236.933 255.116C237.484 260.485 238.121 272.164 238.348 281.069C239.091 310.269 236.158 327.428 229.61 332.177C227.489 333.715 220.403 334.2 213.687 333.266V333.266ZM238.092 200.051C233.579 196.822 229.987 193.875 230.109 193.5C230.231 193.125 250.481 164.967 275.109 130.926C302.807 92.6413 320.673 68.5349 321.948 67.7265C326.825 64.6346 333.395 68.3558 333.333 74.1744C333.315 75.7425 332.938 77.8363 332.493 78.8273C331.528 80.9739 247.119 205.916 246.632 205.918C246.447 205.919 242.604 203.279 238.092 200.051V200.051ZM127.725 194.68C125.531 186.444 117.674 179.27 109.368 177.919L106.449 177.444L110.297 176.292C115.471 174.744 119.627 172.211 122.491 168.86C125.198 165.693 127.587 160.955 128.112 157.71C128.472 155.488 129.644 155.218 129.645 157.357C129.647 160.118 133.599 166.704 137.272 170.066C140.755 173.254 146.77 176.339 149.504 176.339C151.372 176.339 150.48 177.537 148.302 177.953C144.968 178.59 139.589 181.298 136.818 183.735C133.398 186.742 131.658 189.347 129.994 193.949L128.576 197.872L127.725 194.68ZM201.6 166.044C201.553 162.185 196.84 156.988 191.807 155.243L189.211 154.343L192.949 152.629C196.995 150.774 199.694 147.824 201.121 143.695L202.006 141.135L203.886 144.983C205.893 149.091 209.567 152.351 213.054 153.118C215.113 153.571 215.801 154.793 213.997 154.793C212.334 154.793 208.124 157.202 206.163 159.276C205.168 160.328 203.737 162.552 202.984 164.219C202.231 165.885 201.608 166.707 201.6 166.044V166.044ZM161.416 131.002C159.874 125.228 154.119 119.458 148.137 117.689C146.471 117.196 145.108 116.623 145.108 116.414C145.108 116.205 146.394 115.651 147.966 115.182C154.352 113.278 159.814 107.335 161.641 100.302C162.44 97.2268 162.441 97.2261 162.947 99.2446C164.88 106.949 171.239 113.364 178.889 115.326L182.423 116.232L180.07 116.736C172.901 118.271 166.293 123.643 163.694 130.049L162.167 133.811L161.416 131.002Z"
                fill="white"
                ref={SvgPath}
              />
            </svg>
            <h1 ref={LogoName}>CleanGo</h1>
          </div>
          <Button type="button" onClickFunc={handleClick}>
            Cadastre-se como profissional
          </Button>
        </FinishSection>
        <ButtonUp
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FaAngleUp />
        </ButtonUp>
      </Container>
    </>
  );
};
export default WorkWithUs;
