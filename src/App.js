import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import LoaderSpiner from "./components/LoaderSpiner/LoaderSpiner";
import { Route, Switch, Redirect } from "react-router-dom";
// import HomePage from './Pages/HomePage/HomePage';
// import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './Pages/MoviesPage/MoviesPage';

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpiner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
