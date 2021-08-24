import { useEffect, useState, lazy, Suspense } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { fetchMovieById } from "../../service/api";
import { Div, LinkNav, Text } from "./MovieDetailsPage.styles";
// import Cast from '../../components/Cast/Cast';
// import Reviews from '../../components/Reviews/Reviews';
import LoaderSpiner from "../../components/LoaderSpiner/LoaderSpiner";

const Cast = lazy(() => import("../../components/Cast/Cast"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [urlLocation, setUrlLocation] = useState("");

  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const locationParam = () => {
    const path = location.state?.from.pathname;
    const search = location.state?.from.search;
    setUrlLocation({
      path: path,
      search: search,
    });
  };

  useEffect(() => {
    fetchMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  useEffect(() => {
    locationParam();
  }, []);

  const onBackBtn = () => {
    if (`${urlLocation.path}` || `${urlLocation.search}` === "undefined") {
      history.push("/");
    }
    history.push(`${urlLocation.path}${urlLocation.search}`);
  };

  return (
    <>
      <MovieDetails movie={movie} onClick={onBackBtn} />

      <hr />
      <Div>
        <Text>Additional information</Text>
        <LinkNav to={`${url}/cast`}>Cast</LinkNav>
        <LinkNav to={`${url}/reviews`}>Reviews</LinkNav>

        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            <Route path="/movies/:movieId/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews />
            </Route>
          </Switch>
        </Suspense>
      </Div>
    </>
  );
}

export default MovieDetailsPage;
