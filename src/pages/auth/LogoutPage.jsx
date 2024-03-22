import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import HomePage from "../HomePage";

const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  });
  return <HomePage />;
};

export default LogoutPage;
