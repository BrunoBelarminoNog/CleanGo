import React, { useState, useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import {
  ContainerServices,
  Container,
  ContainerSelect,
  LabelStyled,
  SelectStyled,
} from "./styles";
import AliceCarousel from "react-alice-carousel";
// import limitServiceCards from "../../../utils/limitServiceCards";
import { SliderWrapper } from "../../../components/AvailableServices/styles";
const Services = () => {
  const [error, setError] = useState<boolean>(false);
  // const [disable, setDisable] = useState<boolean>(true);
  const [items, setItems] = useState<JSX.Element[]>();
  const responsive = {
    0: { items: 1 },
    350: { items: 1 },
    720: { items: 2 },
    968: { items: 4 },
    1200: { items: 6 },
    1600: { items: 9 },
  };
  const { getServices, services, filterServices, filteredServices } =
    useServices();
  const [option, setOption] = useState<string>("");

  useEffect(() => {
    getServices(setError);
  }, [getServices]);

  useEffect(() => {
    if (!option) {
      if (services && services.length > 0) {
        const itens = services.map((service) => (
          <div>
            <CardService service={service} />
          </div>
        ));

        setItems(itens);
      } else {
        setError(true);
      }
    } else {
      filterServices(option);
      const itens = filteredServices.map((service) => (
        <div>
          <CardService service={service} />
        </div>
      ));
      setItems(itens);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services, filteredServices]);
  return (
    <Container>
      <ContainerSelect>
        <LabelStyled htmlFor="categoria">Filtrar por categoria</LabelStyled>
        <SelectStyled
          name="categoria"
          id="categoria"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setOption(e.target.value);
            filterServices(e.target.value);
          }}
          value={option}
        >
          <option value="">Categoria</option>
          <option value="Passadoria">Passadoria</option>
          <option value="Limpeza Residencial">Limpeza Residencial</option>
        </SelectStyled>
      </ContainerSelect>
      {error && ""}
      <ContainerServices>
        <SliderWrapper>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            items={items}
            paddingLeft={20}
            paddingRight={20}
            responsive={responsive}
          />
        </SliderWrapper>
      </ContainerServices>
    </Container>
  );
};
export default Services;
