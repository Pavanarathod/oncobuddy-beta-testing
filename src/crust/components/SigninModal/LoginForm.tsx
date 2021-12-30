import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";

interface Props {}

const LoginForm = (props: Props) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(4, "Too short")
      .max(25, "Too long")
      .required("Password is required"),
  });

  const loginWithEmailAndPassword = (values: object) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => loginWithEmailAndPassword(values)}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <TextField
            name="email"
            value={props.values.email}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            id="standard-basic"
            label="Email"
            variant="standard"
          />

          <button type="submit">login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
