import { LinkNav } from "./Navigation.styles";

const Navigation = () => (
  <nav>
    <LinkNav exact to="/">
      Home
    </LinkNav>
    <LinkNav to="/movies">Movies</LinkNav>
    <hr />
  </nav>
);
export default Navigation;
