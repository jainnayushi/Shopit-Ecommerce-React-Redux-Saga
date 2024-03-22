import * as Yup from "yup";

export const loginSchema = Yup.object({
  loginEmail: Yup.string()
    .matches(/^\S+@\S+\.\S+$/, "Invalid email address")
    .required("Email is required"),
  loginPassword: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
