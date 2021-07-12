import { ServiceData } from "../../types/ServiceData";
import { Container } from "./styles";
import formatValue from "../../utils/formatedPrice";
interface CardProps {
  service: ServiceData;
}
const CardService = ({ service }: CardProps) => {
  return (
    <Container>
      <h2>{service.serviceDetails.class}</h2>
      <ul>
        <li>{service.serviceDetails.bedroom} quartos</li>
        <li>{service.serviceDetails.bathroom} banheiros</li>
      </ul>
      <h3>{service.serviceDetails.hours} horas</h3>
      <div>
        <span>Valor</span>
        <h3 className="price">{formatValue(service.price)}</h3>
      </div>
    </Container>
  );
};
export default CardService;
