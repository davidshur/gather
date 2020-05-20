import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (


      <section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h2 className="heading mb-3">Hey there, {user.name}</h2>
              <div className="sub-heading">
                <p className="mb-4">
                  You are logged into a full-stack{" "}
                  <span>MERN</span> app 👏
                </p>
                <button className="btn btn-success btn-lg pb_btn-pill " onClick={this.onLogoutClick}>
                  Logout
                </button>
              </div>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5 relative align-self-center">
              <form action="#" className="bg-white rounded pb_form_v1">
                <h2 className="mb-4 mt-0 text-center">Here are your interests</h2>
                <div className="form-group">
                  <ul>
                    <li> 1 interest</li>
                    <li> 2 interest</li>
                    <li> 3 interest</li>
                    <li> 4 interest</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);