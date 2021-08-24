import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../service/api";
import { Div, Ul, Li, Img, PNameActors, PCharacter } from "./Cast.styles";

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetchCastById(movieId).then((cast) => setActors(cast));
  }, [movieId]);

  return (
    <Div>
      {actors && (
        <Ul>
          {actors.map((actor) => (
            <Li key={actor.id}>
              <Img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w400${actor.profile_path}`
                    : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
                }
                alt={actor.name}
              />
              <PNameActors>{actor.name}</PNameActors>
              <PCharacter>Character: {actor.character}</PCharacter>
            </Li>
          ))}
        </Ul>
      )}
    </Div>
  );
}
