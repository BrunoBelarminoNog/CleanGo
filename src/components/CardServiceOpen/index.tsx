import { ServiceData } from "../../types/ServiceData";
import { Container } from "./styles";
import formatValue from "../../utils/formatedPrice";
import ModalOpenService from "../ModalOpenService";
import { useState } from "react";

interface CardProps {
  service: ServiceData;
}
const CardServiceOpen = ({ service }: CardProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Container onClick={() => setVisible(!visible)}>
      <ModalOpenService
        service={service}
        visible={visible}
        setVisible={setVisible}
      />
      <h2>{service.serviceDetails.class}</h2>
      {service.serviceDetails.class?.toLowerCase() !== "passadoria" && (
        <ul>
          <li>{service.serviceDetails.bedroom} quartos</li>
          <li>{service.serviceDetails.bathroom} banheiros</li>
        </ul>
      )}
      <h3>{service.serviceDetails.hours} horas</h3>
      <div>
        <span>Valor</span>
        <h3 className="price">{formatValue(service.price)}</h3>
      </div>
    </Container>
  );
};
export default CardServiceOpen;
