import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to={this.props.auth.isAuthenticated ? "/dashboard" : "/"}
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">assignment</i>
              Bukit
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
