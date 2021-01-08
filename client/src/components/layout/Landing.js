import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Landing extends Component {
  render() {
    return (
      <Container id="container">
        <Row id="middle-element">
          <Col>
            <h2 style={{ paddingTop: "50px" }}>
              <b>Create</b> your own{" "}
              <span style={{ fontFamily: "monospace" }}>Bukit</span> and find
              inspiration from others!
            </h2>
          </Col>
        </Row>
        <Row id="middle-element">
          <Col>
            <h4 style={{ paddingBottom: "30px",paddingTop: "20px" }}>Life is short, make a Bukit!</h4>
          </Col>
        </Row>
        <Row  id="middle-element">
          <Col>
          <Button><Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link></Button>
          </Col>

          <Col><Button variant="secondary"><Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link></Button></Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
