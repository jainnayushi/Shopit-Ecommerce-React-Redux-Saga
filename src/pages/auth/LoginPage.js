import React from "react";
import { useDispatch } from "react-redux";
import InputField from "../../components/InputField";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/loginSchema";
import { loginUser } from "../../redux/actions/authAction";
import "../../styles/Form.css";

const initialValues = {
  loginEmail: "",
  loginPassword: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        dispatch(loginUser(values));
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <div className="left">
          <div>
            <h1>Welcome Back!</h1>
            <p>Please Login!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                label="Email"
                name="loginEmail"
                type="email"
                value={values.loginEmail}
                handleChange={handleChange}
                error={errors.loginEmail}
                handleBlur={handleBlur}
                touched={touched.loginEmail}
              />
              <InputField
                label="Password"
                name="loginPassword"
                type="password"
                value={values.loginPassword}
                handleChange={handleChange}
                error={errors.loginPassword}
                handleBlur={handleBlur}
                touched={touched.loginPassword}
              />
            </div>
            <button type="submit" className="form-btn ">
              Login
            </button>
          </form>
        </div>
        <div className="right">
          <img
            src="https://media.istockphoto.com/id/1426988809/photo/security-password-login-online-concept-hands-typing-and-entering-username-and-password-of.webp?b=1&s=170667a&w=0&k=20&c=AJD5Wv30lmyILccJyMpQGhkmh0VhZ5WNDtk53MO1OVM="
            // src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
