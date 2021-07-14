import { SetStateAction, Dispatch } from "react";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
// import Button from "../Button";
// import { useAuth } from "../../providers/Auth";
// import { useServices } from "../../providers/Services";
// import { notification } from "antd";
// import { FaTimes, FaCheckCircle } from "react-icons/fa";
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
} from "./styles";
// import { useState } from "react";
interface ModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  service: ServiceData;
}
const ModalDetailsService = ({ service, visible, setVisible }: ModalProps) => {
  return (
    <CustomModal
      visible={visible}
      centered
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={null}
      closeIcon={<CloseIcon />}
      width={600}
      title="Serviço disponível"
      okText="Criar"
      cancelText="Cancelar"
    >
      {/* <TitleModal>Serviço disponível</TitleModal> */}
      <ContainerInfo>
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
        <Subtitles>Endereço:</Subtitles>
        <Adress>{`${service.address} - ${service.district},  ${service.city} - ${service.uf}, ${service.cep}`}</Adress>
        <Subtitles>Contratante:</Subtitles>
        <GeneralInfo>{service.contractor}</GeneralInfo>
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
          {/* <Button onClickFunc={handleAccept}>Aceitar</Button> */}
        </ContainerRow>
      </ContainerInfo>
    </CustomModal>
  );
};
export default ModalDetailsService;
