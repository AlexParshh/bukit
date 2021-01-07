import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import { logoutUser } from "../../actions/authActions";
import Button from "react-bootstrap/Button";

class Navbarnew extends Component {

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  

  render() {
    return (
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Navbar.Brand
          href={this.props.auth.isAuthenticated ? "/dashboard" : "/"}
        >
          <img
            alt=""
            src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Bucket-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Buckit
        </Navbar.Brand>
        {this.props.auth.isAuthenticated ? <Button onClick={this.onLogoutClick} size="lg" variant="primary">
                Logout
              </Button> : null}
      </Navbar>
    );
  }
}

Navbarnew.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbarnew);
