import React from "react";
import ReviewsCards from "../../../components/ReviewsCards";
import ReviewsTotal from "../../../components/ReviewsTotal";

import {
  Container,
  FeaturesColumn,
  FeedColumn,
  WrapperSections,
} from "./styles";

const Reviews = () => {
  return (
    <Container>
      <FeaturesColumn>
        <ReviewsCards />
        <WrapperSections>
          <div></div>
          <ReviewsTotal total={4.75} />
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

export default Reviews;
