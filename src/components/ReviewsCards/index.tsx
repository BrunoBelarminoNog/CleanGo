import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FeedBackData } from "../../types/feedbackData";
import {
  Container,
  ReviewContent,
  ReviewsCard,
  ReviewsWrapper,
  Stars,
} from "./styles";

interface ReviewsCardsProps {
  feedbacks: FeedBackData[];
  error: boolean;
}

const ReviewsCards = ({ feedbacks, error }: ReviewsCardsProps) => {
  return (
    <Container>
      <h2>Últimas avaliações</h2>
      <ReviewsWrapper>
        {error || feedbacks.length === 0 ? (
          <span>Não há feedbacks para exibir</span>
        ) : (
          <>
            {feedbacks.map((feedback) => {
              return (
                <ReviewsCard>
                  <Stars>
                    {feedback.score === 5 ? (
                      <Stars>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </Stars>
                    ) : feedback.score === 4 ? (
                      <Stars>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                      </Stars>
                    ) : feedback.score === 3 ? (
                      <Stars>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                      </Stars>
                    ) : feedback.score === 2 ? (
                      <Stars>
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                      </Stars>
                    ) : (
                      <Stars>
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                      </Stars>
                    )}
                  </Stars>
                  <ReviewContent>{feedback.feedback}</ReviewContent>
                </ReviewsCard>
              );
            })}
          </>
        )}
      </ReviewsWrapper>
    </Container>
  );
};

export default ReviewsCards;
