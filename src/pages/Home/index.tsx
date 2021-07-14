import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";

import {
  BeDoneContent,
  BeDoneSection,
  BeDoneSectionTitle,
  BeDoneWrapperInfos,
  ButtonUp,
  Carrosel,
  Container,
  FirstSection,
  Gallery,
  HowWorkSection,
  HowWorkSectionTitle,
  IconBath,
  IconBed,
  IconKitchen,
  Icons,
  Info,
  InfoDetails,
  ThirtySection,
  VideoSection,
  VideoSectionTitle,
  WrapperImages,
} from "./styles";

import GalleryImg1 from "../../asssets/images/home2.png";
import GalleryImg2 from "../../asssets/images/home3.png";
import GalleryImg3 from "../../asssets/images/home4.png";
import GalleryImg4 from "../../asssets/images/home5.png";
import DoubleImg1 from "../../asssets/images/home6.png";
import DoubleImg2 from "../../asssets/images/home7.png";
import Carrosel1 from "../../asssets/images/home8.png";
import Carrosel2 from "../../asssets/images/home9.png";
import Carrosel3 from "../../asssets/images/home10.png";
import Video from "../../asssets/videos/home.mp4";

import { useTheme } from "../../providers/Theme";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const HomePage = () => {
  const [beBoneIndex, setBeBoneIndex] = useState(0);

  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(false);
    setInterval(() => {
      if (beBoneIndex <= 1) {
        setBeBoneIndex(beBoneIndex + 1);
      } else {
        setBeBoneIndex(0);
      }
    }, 6000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitlePage title="Home" />
      <Header>
        <HeaderNav />
      </Header>
      <Container>
        <FirstSection>
          <div>
            <h2>
              A limpeza conectada, <br />
              por uma vida mais conectada.
            </h2>
            <p>
              Encontre de forma rápida e segura os melhores profissionais para o
              seu lar
            </p>
          </div>
        </FirstSection>
        <HowWorkSection>
          <HowWorkSectionTitle>
            <h2>Veja como funciona</h2>
            <div className="separator"></div>
            <p>
              Tenha um serviço de qualidade, de forma descomplicada e segura.
              Agende conosco sua limpeza!
            </p>
          </HowWorkSectionTitle>

          <Gallery>
            <div>
              <img src={GalleryImg1} alt="" />
              <div className="content">
                <h3>Escolha o serviço do seu jeito</h3>
                <p>
                  Ao solicitar o serviço, você configura o serviço do jeito que
                  precisar, escolhando quantidade horas e a quantidade de
                  cômodos a serem limpos.
                </p>
              </div>
            </div>
            <div>
              <img src={GalleryImg2} alt="" />
              <div className="content">
                <h3>No endereço e na data combinados</h3>
                <p>
                  Pode contratar o serviço que quiser; na hora que quiser,
                  diretamente no nosso site. E no dia combinado, estaremos em
                  sua residência.
                </p>
              </div>
            </div>
            <div>
              <img src={GalleryImg3} alt="" />
              <div className="content">
                <h3>Conectamos os melhores profissionais</h3>
                <p>
                  Somente os melhores prestadores continuam na nossa plataforma,
                  mediante as avaliações de seus clientes.
                </p>
              </div>
            </div>
            <div>
              <img src={GalleryImg4} alt="" />
              <div className="content">
                <h3>Sem dores de cabeça</h3>
                <p>
                  Não precisa perder tempo procurando indicações, perguntando
                  por telefones de profissionais, fazendo entrevistas e pedindo
                  orçamentos. Nós fazemos tudo isso por você.
                </p>
              </div>
            </div>
          </Gallery>
        </HowWorkSection>
        <ThirtySection>
          <div>
            <h4>
              Por meio da tecnologia e da inteligência do nosso time, te
              ajudamos a contratar profissionais que realizam limpezas
              residenciais e serviço de passadoria.
            </h4>
          </div>
          <WrapperImages>
            <img src={DoubleImg1} alt="" />
            <img src={DoubleImg2} alt="" />
          </WrapperImages>
        </ThirtySection>
        <BeDoneSection>
          <BeDoneSectionTitle>
            <h2>Como iremos deixar seu lar</h2>
            <div className="separator"></div>
          </BeDoneSectionTitle>
          <BeDoneContent>
            <BeDoneWrapperInfos>
              <Icons>
                <IconBed
                  active={beBoneIndex === 0}
                  onClick={() => setBeBoneIndex(0)}
                />
                <IconKitchen
                  active={beBoneIndex === 1}
                  onClick={() => setBeBoneIndex(1)}
                />
                <IconBath
                  active={beBoneIndex === 2}
                  onClick={() => setBeBoneIndex(2)}
                />
              </Icons>
              <Info index={beBoneIndex}>
                <div>
                  <InfoDetails active={beBoneIndex === 0}>
                    <h2>Quartos, sala de estar e áreas comuns</h2>
                    <p>
                      Tirar o pó, varrer, limpar as superfícies do piso,
                      espelhos, batentes, movéis e retirar lixo.
                    </p>
                  </InfoDetails>

                  <InfoDetails active={beBoneIndex === 1}>
                    <h2>Cozinha</h2>
                    <p>
                      Lavar a louça, limpar o exterior do fogão e da geladeira,
                      interior/exterior de microondas, limpar as superfícies do
                      piso, movéis, bancada e retirar lixo.
                    </p>
                  </InfoDetails>
                  <InfoDetails active={beBoneIndex === 2}>
                    <h2>Banheiro(s)</h2>
                    <p>
                      Lavar e sanitizar banheiro, chuveiro, pia, banheira,
                      retirar o pó, limpar as superfícies de piso, espelhos,
                      batentes e retirar lixo.
                    </p>
                  </InfoDetails>
                </div>
              </Info>
            </BeDoneWrapperInfos>
            <Carrosel index={beBoneIndex}>
              <div>
                <img src={Carrosel1} alt="" />
                <img src={Carrosel2} alt="" />
                <img src={Carrosel3} alt="" />
              </div>
            </Carrosel>
          </BeDoneContent>
        </BeDoneSection>
        <VideoSection>
          <div>
            <video loop autoPlay muted>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <VideoSectionTitle>
            <h2>Conte com a gente na sua próxima limpeza!</h2>
          </VideoSectionTitle>
        </VideoSection>
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

export default HomePage;
