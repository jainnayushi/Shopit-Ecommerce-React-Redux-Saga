import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthenticatedRoute = ({ children, isAuthenticated, isAdmin }) => {
  return isAuthenticated || isAdmin ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userData.isAuthenticated,
  isAdmin: state.userData.isAdmin,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
