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
    // is there yup.password validation??
    // .password("must be a valid password")
    .required("password is required"),

    // terms checkbox
  terms: yup
    .bool()
    .oneOf([true], "Must submit to TERMS!")
 
});