import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getItems } from "../../actions/userListActions";

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.userList.userList
    }

    this.props.getItems();

  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList != this.props.userList) {
      this.setState({userList:nextProps.userList})
    }
  }


  
  render() {
    
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to {" "}
                <span style={{ fontFamily: "monospace" }}>Bukit</span> 👏
              </p>
            </h4>

            <h1></h1>
      


            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userList: state.userList
});

export default connect(
  mapStateToProps,
  { logoutUser, getItems }
)(Dashboard);