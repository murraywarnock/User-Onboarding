// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(6, "username must be 6 chars long"),
    email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
    password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),

    // terms checkbox
  terms: yup
    .bool()
    .oneOf([true], "Must submit to TERMS!")
 
});