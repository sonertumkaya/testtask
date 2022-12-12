import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PizzaChart from "./Chartstatu";
import useGoogleCharts from './useGoogleCharts';

function WithHooks({basliksa}) {
  const google = useGoogleCharts();

  return (
    <>
      <Container className="mt-3">
        
        <PizzaChart google={google} idas={basliksa} />
        
      </Container>
    </>
  );
}

export default WithHooks;