import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useFormik } from "formik";
import { signupSchema } from "../../utils/signupSchema";
import { registerUser } from "../../redux/actions/authAction";

const initialValues = {
  name: "",
  email: "",
  phone_no: "",
  password: "",
  confirm_password: "",
};

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        dispatch(registerUser(values));
        navigate("/login");
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="header-form ">
            <h1>Welcome!</h1>
            <p>Please complete the registration!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                label="Name"
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
                error={errors.name}
                handleBlur={handleBlur}
                touched={touched.name}
              />
              <InputField
                label="Email"
                name="email"
                type="text"
                value={values.email}
                handleChange={handleChange}
                error={errors.email}
                handleBlur={handleBlur}
                touched={touched.email}
              />
              <InputField
                label="Phone No."
                name="phone_no"
                type="tel"
                value={values.phone_no}
                handleChange={handleChange}
                error={errors.phone_no}
                handleBlur={handleBlur}
                touched={touched.phone_no}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                handleChange={handleChange}
                error={errors.password}
                handleBlur={handleBlur}
                touched={touched.password}
              />
              <InputField
                label="Confirm Password"
                name="confirm_password"
                type="password"
                value={values.confirm_password}
                handleChange={handleChange}
                error={errors.confirm_password}
                handleBlur={handleBlur}
                touched={touched.confirm_password}
              />
            </div>
            <button type="submit" className="form-btn ">
              Register
            </button>
          </form>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
