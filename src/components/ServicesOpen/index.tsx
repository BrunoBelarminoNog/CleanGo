import React, { useEffect, useState } from "react";
// import { ServiceData } from "../../types/ServiceData";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "./styles";
import { SliderWrapper } from "./styles";
import { useServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import CardServiceOpen from "../CardServiceOpen";

const responsive = {
  0: { items: 1 },
  350: { items: 1.5 },
  720: { items: 1 },
  968: { items: 2 },
  1200: { items: 3 },
  1600: { items: 4.5 },
};

const ServicesOpen = () => {
  const { user } = useAuth();
  const { getOpenServices, servicesOpen } = useServices();
  const [error, setError] = useState(false);

  useEffect(() => {
    getOpenServices(setError, user?.id);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h2>Serviços em aberto</h2>
      {servicesOpen.length === 0 || error ? (
        <h3>Não há serviços em aberto</h3>
      ) : (
        <SliderWrapper>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={responsive}
            items={servicesOpen.map((service) => (
              <CardServiceOpen service={service} key={service.id} />
            ))}
            paddingLeft={20}
            paddingRight={20}
          />
        </SliderWrapper>
      )}
    </Container>
  );
};

export default ServicesOpen;
