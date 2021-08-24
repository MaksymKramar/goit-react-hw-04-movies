import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Img, Li, Title, Ul } from "./MoviesList.styles";

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <Ul>
      {movies &&
        movies.map((movie) => (
          <Li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
                }
                alt={movie.title}
              ></Img>
            </Link>
            <Title>{movie.title}</Title>
          </Li>
        ))}
    </Ul>
  );
}

export default MoviesList;
