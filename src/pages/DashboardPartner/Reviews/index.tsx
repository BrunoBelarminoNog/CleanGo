import React, { useEffect, useState } from "react";
import FeedCard from "../../../components/FeedCard";
import ReviewsCards from "../../../components/ReviewsCards";
import ReviewsTotal from "../../../components/ReviewsTotal";
import { useAuth } from "../../../providers/Auth";
import { useFeedback } from "../../../providers/Feedbacks";

import { Container, FeaturesColumn, WrapperSections } from "./styles";

const Reviews = () => {
  const { user } = useAuth();
  const { getAllFeedback, feedbacks } = useFeedback();

  const [error, setError] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    getAllFeedback(user?.id || 0, setError);
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [feedbacks]);

  return (
    <Container>
      <FeaturesColumn>
        <ReviewsCards feedbacks={feedbacks} error={error} />
        <WrapperSections>
          <div></div>
          <ReviewsTotal total={totalFeedback.toFixed(2)} />
        </WrapperSections>
      </FeaturesColumn>
      <FeedCard />
    </Container>
  );
};

export default Reviews;
