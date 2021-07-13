import React, { useEffect, useState } from "react";
import AvailableServices from "../../../components/AvailableServices";
import Button from "../../../components/Button";
import LastGains from "../../../components/LastGains";
import ReviewsTotal from "../../../components/ReviewsTotal";
import WeekService from "../../../components/WeekService";
import { useAuth } from "../../../providers/Auth";
import { useFeedback } from "../../../providers/Feedbacks";
import { useServices } from "../../../providers/Services";
import { ServiceData } from "../../../types/ServiceData";
import {
  Container,
  FeaturesColumn,
  FeedColumn,
  InputFeed,
  WrapperSections,
} from "./styles";

const Main = () => {
  const { user } = useAuth();
  const { getAllFeedback, feedbacks } = useFeedback();
  const { getServicesAccepted, servicesAccept } = useServices();

  const [servicesAcc, setServicesAcc] = useState<ServiceData[]>([]);
  const [error, setError] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [totalService, setTotalService] = useState(0);

  useEffect(() => {
    getAllFeedback(user?.id || 0, setError);
    getServicesAccepted(setError, user?.id || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (feedbacks.length === 0) {
      setTotalFeedback(5);
    } else {
      let result: number = 0;

      feedbacks.forEach((feedback) => {
        if (feedback.score) {
          result += feedback.score;
        }
      });

      result = result / feedbacks.length;
      setTotalFeedback(result);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbacks]);

  useEffect(() => {
    if (servicesAccept.length !== 0) {
      let now: number | Date = new Date();
      let month = now.getMonth();
      const servicesFiltered = servicesAccept.filter((service) => {
        let date = new Date(service.date);
        return date.getMonth() === month;
      });
      setServicesAcc([...servicesFiltered]);

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
        <AvailableServices />
        <WeekService
          services={servicesAcc}
          servicesAccept={servicesAccept}
          error={error}
        />
        <WrapperSections>
          <LastGains total={totalService} />
          <ReviewsTotal total={totalFeedback.toFixed(2)} />
        </WrapperSections>
      </FeaturesColumn>
      <FeedColumn>
        <InputFeed placeholder="Começar publicação"></InputFeed>
        <Button>Publicar</Button>
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

export default Main;
