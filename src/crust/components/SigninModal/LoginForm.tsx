import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={props.handleSubmit}
        >
          <TextField
            name="email"
            value={props.values.email}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            id="standard-basic"
            label="Email"
            variant="standard"
            helperText={props.errors.email}
            error={!!props.errors.email}
          />
          <TextField
            name="password"
            value={props.values.password}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            id="standard-basic"
            label="Password"
            variant="standard"
            helperText={props.errors.password}
            error={!!props.errors.password}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              style={{
                backgroundColor: "#000",
                padding: "10px 50px",
                color: "#fff",
                borderRadius: "50px",
              }}
              variant="contained"
              type="submit"
            >
              login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
