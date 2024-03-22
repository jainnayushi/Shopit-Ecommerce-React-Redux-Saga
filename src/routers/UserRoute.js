import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({ children, isAuthenticated, isAdmin }) => {
  return isAdmin ? (
    <Navigate to="/admin" />
  ) : isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    children
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userData.isAuthenticated,
  isAdmin: state.userData.isAdmin,
});

export default connect(mapStateToProps)(UserRoute);
