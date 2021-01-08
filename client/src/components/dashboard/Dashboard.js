import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getItems } from "../../actions/userListActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./dashboard.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.getItems();

    this.state = {
      items: []
    }
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  mapItems = (type) => {
    if (type === true) {
      return (this.props.userList.userList.filter(x => x.finishedStatus !== false).map((item, i) => (
        <Card className="p-3" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Card.Text>
              {item.itemDesc}
            </Card.Text>
            <Button variant="secondary">Delete</Button>
            
          </Card.Body>
        </Card>
      )))
    } else {
      return (this.props.userList.userList.filter(x => x.finishedStatus === false).map((item, i) => (
        <Card className="p-3" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Card.Text>
              {item.itemDesc}
            </Card.Text>
            <Button variant="success">Finished</Button>
          </Card.Body>
        </Card>)))
    }
  } 

  render() {
    const { user } = this.props.auth;

    return (
      <Container id="container">
        <Row id="middle-element">
          <Col>
            <h2 style={{ paddingTop: "50px", paddingBottom: "50px" }}>
              Hey there, {user.name.split(" ")[0]}!
            </h2>
          </Col>
        </Row>
        <Row id="middle-element">
          <Col>
            <Tabs>
              <TabList>
                <Tab>In Progress</Tab>
                <Tab>Completed</Tab>
              </TabList>

              <TabPanel>
                <CardColumns>
                {this.props.userList.userList ? this.mapItems(false) : null}
                  </CardColumns>
              </TabPanel>
              <TabPanel>
              <CardColumns>
              {this.props.userList.userList ? this.mapItems(true) : null}
                  </CardColumns>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  getItems: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  userList: state.userList,
});

export default connect(mapStateToProps, { getItems })(Dashboard);
