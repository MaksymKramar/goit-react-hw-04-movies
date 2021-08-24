import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import LoaderSpiner from "../../components/LoaderSpiner/LoaderSpiner";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../../service/api";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");

  const { isExact } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (!isExact) {
      history.push("/");
    }
    (async () => {
      setStatus("pending");
      try {
        await fetchTrendingMovies().then((movies) => {
          if (movies.lenght === 0) {
            setStatus("rejected");
            alert(`Error!`);
          }
          setMovies(movies);
          setStatus("resolved");
        });
      } catch (error) {
        alert(`Error!`);
      }
    })();
  }, [history, isExact]);

  switch (status) {
    case "idle":
      return <div></div>;

    case "pending":
      return <LoaderSpiner />;
    case "resolved":
      return (
        <div>
          <MoviesList movies={movies} />
        </div>
      );
    case "rejected":
      return (
        <div>
          <h2>Something goes wrong! Reload page please</h2>
        </div>
      );

    default:
      return;
  }
}

export default HomePage;
