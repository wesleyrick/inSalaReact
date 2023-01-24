import logo from "../images/logoReact.jpeg";
import React from "react";
import { Container, Row, Col } from "reactstrap";

class Cabecalho extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid style={this.estilo}>
        <Row>
          <Col>
            <img className="img-Fluid" src={logo} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cabecalho;
