import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  Name: Yup.string().min(2).max(25).required("Please enter your name"),
  Email: Yup.string().email().required("Please enter your email"),
  Password: Yup.string().min(6).required("Please enter your password"),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Password must match"),
  Role: Yup.string()
    .oneOf([ "Host", "Participant"], "Invalid role selected")
    .required("Please select a role"),
});

export const LoginSchema = Yup.object({
  Email: Yup.string().email().required("Please enter your email"),
  Password: Yup.string().min(6).required("Please enter your password"),
  Role: Yup.string()
    .oneOf(["Admin", "Host", "Participant"], "Invalid role selected")
    .required("Please select a role"),
});
