import React from "react";
import {
  Div,
  Btn,
  Container,
  Img,
  MovieTitle,
  Text,
  Span,
  MovieDescrTitle,
  MovieDescriptionText,
  Li,
} from "./MovieDetails.styles";

function MovieDetails({ movie, onClick }) {
  return (
    <>
      {movie && (
        <div>
          <Btn type="button" onClick={onClick}>
            Go back
          </Btn>

          <Container>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
              }
              alt={movie.original_title}
            />
            <Div>
              <MovieTitle>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </MovieTitle>
              <Text>
                User Score:
                <Span>{movie.vote_average * 10}%</Span>
              </Text>
              <MovieDescrTitle>Overview</MovieDescrTitle>
              <MovieDescriptionText>{movie.overview}</MovieDescriptionText>
              <MovieTitle>Genres:</MovieTitle>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <Li key={genre.id}>{genre.name}</Li>
                  ))}
              </ul>
            </Div>
          </Container>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
