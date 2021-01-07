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

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.userList.userList,
    };

    this.props.getItems();
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList != this.props.userList) {
      this.setState({ userList: nextProps.userList });
    }
  }

  render() {
    const { user } = this.props.auth;

    return (
        <Container id="container">
          <Row id="middle-element">
            <Col>
              <h4>
                <b>Hey there, {user.name.split(" ")[0]}</b>
              </h4>
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
