import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "./styles";
import { SliderWrapper } from "./styles";
import { useServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import CardServiceProgress from "../CardServiceProgress";

const responsive = {
  0: { items: 1 },
  350: { items: 1.5 },
  720: { items: 1 },
  968: { items: 2 },
  1200: { items: 3 },
  1600: { items: 4.5 },
};

const ServicesProgress = () => {
  const { user } = useAuth();
  const { getClientServices, servicesProgress } = useServices();
  const [error, setError] = useState(false);

  useEffect(() => {
    getClientServices(setError, "false", user?.id);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h2>Serviços em andamento</h2>
      {servicesProgress.length === 0 || error ? (
        <h3>Não há serviços em andamento</h3>
      ) : (
        <SliderWrapper>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={responsive}
            items={servicesProgress.map((service) => (
              <CardServiceProgress service={service} key={service.id} />
            ))}
            paddingLeft={20}
            paddingRight={20}
          />
        </SliderWrapper>
      )}
    </Container>
  );
};

export default ServicesProgress;
