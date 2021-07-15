import { SetStateAction, Dispatch } from "react";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
import Button from "../Button";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useAuth } from "../../providers/Auth";
import { useClients } from "../../providers/Clients";
import {
  ContainerInfo,
  ContainerRow,
  CloseIcon,
  ServiceClass,
  Subtitles,
  GeneralInfo,
  Adress,
  ServiceDetails,
  CustomModal,
  WrapperStars,
  Stars,
  LabelStyled,
  ErrorMessage,
  ContainerTextArea,
  TextAreaStyled,
} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { useFeedback } from "../../providers/Feedbacks";
interface ModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  service: ServiceData;
}
const ModalReviewService = ({ service, visible, setVisible }: ModalProps) => {
  const { newFeedback } = useFeedback();
  const { user } = useAuth();
  const { searchClient, client } = useClients();
  const [error, setError] = useState<boolean>(false);
  const [review, setReview] = useState(false);
  const [stars, setStars] = useState(0);
  const [about, setAbout] = useState("");
  const [aboutError, setAboutError] = useState(false);

  useEffect(() => {
    setReview(false);
    setStars(0);
    if (service.partnerId !== 0) {
      searchClient(service.partnerId);
    }
    //eslint-disable-next-line
  }, [visible, service.partnerId]);

  const submitReview = () => {
    const review = {
      userId: user?.partner ? service.userId : service.partnerId,
      score: stars,
      feedback: about,
    };

    newFeedback(review, setVisible);
    setError(false);
    setAboutError(false);
  };

  return (
    <CustomModal
      visible={visible}
      centered
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={null}
      closeIcon={<CloseIcon />}
      width={600}
      title="Detalhes serviço realizado"
      okText="Criar"
      cancelText="Cancelar"
    >
      {/* <TitleModal>Serviço disponível</TitleModal> */}
      <ContainerInfo>
        {review ? (
          <>
            <ServiceClass>
              Avaliar: {user?.partner ? service.contractor : client.name}{" "}
            </ServiceClass>
            {error && ""}
            <WrapperStars>
              <Stars onClick={() => setStars(1)}>
                {stars >= 1 ? <FaStar /> : <FaRegStar />}
              </Stars>
              <Stars onClick={() => setStars(2)}>
                {stars >= 2 ? <FaStar /> : <FaRegStar />}
              </Stars>
              <Stars onClick={() => setStars(3)}>
                {stars >= 3 ? <FaStar /> : <FaRegStar />}
              </Stars>
              <Stars onClick={() => setStars(4)}>
                {stars >= 4 ? <FaStar /> : <FaRegStar />}
              </Stars>
              <Stars onClick={() => setStars(5)}>
                {stars === 5 ? <FaStar /> : <FaRegStar />}
              </Stars>
            </WrapperStars>
            <ContainerTextArea>
              <LabelStyled>Sobre você</LabelStyled>
              <TextAreaStyled
                error={false}
                placeholder="Apresente-se para seus clientes"
                value={about}
                required
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setAbout(e.target.value)
                }
              ></TextAreaStyled>
              {aboutError && <ErrorMessage>Campo obrigatório</ErrorMessage>}
            </ContainerTextArea>
            <ContainerRow>
              <div></div>
              <Button onClickFunc={submitReview}>Enviar</Button>
            </ContainerRow>
          </>
        ) : (
          <>
            <ServiceClass>{service.serviceDetails.class}</ServiceClass>
            {service.serviceDetails.class.toLowerCase() !== "passadoria" && (
              <>
                <Subtitles>Detalhes:</Subtitles>
                <ServiceDetails>
                  <li>{service.serviceDetails.bedroom} quartos</li>
                  <li>{service.serviceDetails.bathroom} banheiros</li>
                </ServiceDetails>
              </>
            )}
            {error && ""}
            <Subtitles>Endereço:</Subtitles>
            <Adress>{`${service.address}, ${service.addressNumber} ${
              service.complement && service?.complement
            } - ${service.district},  ${service.city} - ${service.uf}, ${
              service.cep
            }`}</Adress>
            {user?.partner ? (
              <>
                <Subtitles>Contratante:</Subtitles>
                <GeneralInfo>{service.contractor}</GeneralInfo>
              </>
            ) : (
              <>
                <Subtitles>Contratado:</Subtitles>
                <GeneralInfo>{client.name}</GeneralInfo>
              </>
            )}
            <ContainerRow>
              <ContainerInfo>
                <Subtitles>Duração total:</Subtitles>
                <GeneralInfo className="hours">
                  {service.serviceDetails.hours} horas
                </GeneralInfo>
              </ContainerInfo>
              <ContainerInfo>
                <Subtitles>Valor</Subtitles>
                <GeneralInfo className="price">
                  {formatValue(service.price)}
                </GeneralInfo>
              </ContainerInfo>
              <Button
                onClickFunc={(e) => setReview(true)}
                disabled={!service.completed}
              >
                Avaliar
              </Button>
            </ContainerRow>
          </>
        )}
      </ContainerInfo>
    </CustomModal>
  );
};
export default ModalReviewService;
