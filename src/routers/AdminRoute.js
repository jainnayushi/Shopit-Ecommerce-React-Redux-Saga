import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({ children, isAdmin }) => {
  return isAdmin ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  isAdmin: state.userData.isAdmin,
});

export default connect(mapStateToProps)(AdminRoute);
