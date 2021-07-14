import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LastServices from "../../../../components/LastServices";
import { useAuth } from "../../../../providers/Auth";
import { useServices } from "../../../../providers/Services";
import { Container, FeaturesColumn } from "./styles";
const Services = () => {
  const { getClientServices, clientServices } = useServices();
  const { user } = useAuth();

  const [error, setError] = useState(false);
  const [totalService, setTotalService] = useState(0);

  useEffect(() => {
    getClientServices(setError, "true", user?.id);
    //teste
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (clientServices.length !== 0) {
      let now: number | Date = new Date();
      let month = now.getMonth();
      const servicesFiltered = clientServices.filter((service) => {
        let date = new Date(service.date);
        console.log(new Date(service.date));
        return date.getMonth() === month;
      });

      let totalValue: number = 0;
      servicesFiltered.forEach((service) => {
        if (service.completed) {
          totalValue += service.price;
        }
      });
      setTotalService(totalValue);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientServices]);

  return (
    <Container>
      <FeaturesColumn>
        <LastServices services={clientServices} />
        {error && ""}
        {totalService && ""}
      </FeaturesColumn>
    </Container>
  );
};

export default Services;
