import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from "./LoaderSpiner.styles";

export default function LoaderSpiner() {
  return (
    <Container>
      <Loader
        type="Circles"
        color="#0bcf4d"
        height={100}
        width={100}
        timeout={3000}
      />
    </Container>
  );
}
