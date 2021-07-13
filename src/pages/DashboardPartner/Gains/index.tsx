import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LastGains from "../../../components/LastGains";
import LastServices from "../../../components/LastServices";
import { useAuth } from "../../../providers/Auth";
import { useServices } from "../../../providers/Services";
import {
  Container,
  FeaturesColumn,
  FeedColumn,
  WrapperSections,
} from "./style";

const Gains = () => {
  const { getServicesAccepted, servicesAccept } = useServices();
  const { user } = useAuth();

  const [error, setError] = useState(false);
  const [totalService, setTotalService] = useState(0);

  useEffect(() => {
    getServicesAccepted(setError, user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (servicesAccept.length !== 0) {
      let now: number | Date = new Date();
      let month = now.getMonth();
      const servicesFiltered = servicesAccept.filter((service) => {
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
  }, [servicesAccept]);

  return (
    <Container>
      <FeaturesColumn>
        <LastServices services={servicesAccept} />
        {error && ""}
        <WrapperSections>
          <div></div>
          <LastGains total={totalService} />
        </WrapperSections>
      </FeaturesColumn>
      <FeedColumn>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>
      </FeedColumn>
    </Container>
  );
};

export default Gains;
