import React from "react";
import { Container } from "./styles";
import { FaStar } from "react-icons/fa";

interface ReviewsTotalProps {
  total: string;
}

const ReviewsTotal = ({ total }: ReviewsTotalProps) => {
  return (
    <Container>
      <h2>Avaliação</h2>
      <span>
        {total} <FaStar />
      </span>
    </Container>
  );
};

export default ReviewsTotal;
