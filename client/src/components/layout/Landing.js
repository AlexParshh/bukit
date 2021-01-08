import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Landing extends Component {
  render() {
    return (
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      // <h4>
      //   <b>Create</b> your own{" "}
      //   <span style={{ fontFamily: "monospace" }}>Bukit</span> and find inspiration from others!
      // </h4>
      //       <p className="flow-text grey-text text-darken-1">
      //         Life is short, make a Bukit!
      //       </p>
      //       <br />
      //       <div className="col s6">
              // <Link
              //   to="/register"
              //   style={{
              //     width: "140px",
              //     borderRadius: "3px",
              //     letterSpacing: "1.5px"
              //   }}
              //   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              // >
              //   Register
              // </Link>
      //       </div>
      //       <div className="col s6">
              // <Link
              //   to="/login"
              //   style={{
              //     width: "140px",
              //     borderRadius: "3px",
              //     letterSpacing: "1.5px"
              //   }}
              //   className="btn btn-large btn-flat waves-effect white black-text"
              // >
              //   Log In
              // </Link>
      //       </div>
      //     </div>
      //   </div>
      // </div>

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
