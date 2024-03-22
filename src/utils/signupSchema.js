import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string()
    .trim("Please enter correct name")
    .strict(true)
    .matches(/^[a-zA-Z ]+$/, "Name must contain only alphabets and spaces")
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .matches(/^\S+@\S+\.\S+$/, "Invalid email address")
    .required("Email is required"),
  phone_no: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(8, "Phone number must be at least 8 digits")
    .max(10, "Phone number must not exceed 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
