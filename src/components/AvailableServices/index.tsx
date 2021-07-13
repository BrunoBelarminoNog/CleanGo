import React, { useEffect, useState } from "react";
// import { ServiceData } from "../../types/ServiceData";
import CardService from "../CardService";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "./styles";
import { SliderWrapper } from "./styles";
import { useServices } from "../../providers/Services";

const responsive = {
  0: { items: 1 },
  350: { items: 1.5 },
  720: { items: 1 },
  968: { items: 2 },
  1200: { items: 3 },
  1600: { items: 4.5 },
};

const AvailableServices = () => {
  const { getServices, services } = useServices();
  const [error, setError] = useState(false);
  const [items, setItems] = useState<JSX.Element[]>();

  useEffect(() => {
    getServices(setError);
  }, [getServices]);

  useEffect(() => {
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
  }, [services]);

  return (
    <Container>
      <h2>Serviços disponíveis</h2>
      {error ? (
        <h3>Não há serviços em aberto</h3>
      ) : (
        <SliderWrapper>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={responsive}
            items={items}
            paddingLeft={20}
            paddingRight={20}
          />
        </SliderWrapper>
      )}
    </Container>
  );
};

export default AvailableServices;
