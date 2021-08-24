import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../../service/api";
import { Div, Ul, Li, H3, P } from "./Reviews.styles";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetchReviewById(movieId);
  }, [movieId]);

  return (
    <Div>
      {reviews.length > 0 ? (
        <Ul>
          {reviews.map((review) => (
            <Li key={review.id}>
              <H3>{review.author}</H3>
              <P>{review.content}</P>
            </Li>
          ))}
        </Ul>
      ) : (
        <P>No reviews for this movie </P>
      )}
    </Div>
  );
}
