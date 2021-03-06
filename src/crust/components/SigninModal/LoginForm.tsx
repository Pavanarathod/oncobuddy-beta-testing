import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import styles from "./styles";

interface Props {}

const useStyles = makeStyles(styles);

const LoginForm = (props: Props) => {
  const classes = useStyles();
  const initialValues = {
    email: "",
    password: "",
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter Valid enail")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Email is required")
      .required("Password is required"),
  });

  const signInWithEmailAndPassword = (loginData: object) => {
    console.log(loginData);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => signInWithEmailAndPassword(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleBlur, handleChange, errors, values, isSubmitting }) => (
        <Form>
          <Stack spacing={1}>
            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="standard-basic"
              label="Email"
              variant="standard"
              helperText={errors.email}
              error={!!errors.email}
            />
            <TextField
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="standard-basic"
              label="Password"
              variant="standard"
              helperText={errors.password}
              error={!!errors.password}
            />
          </Stack>

          <div className={classes.buttonContainer}>
            <Button
              style={{
                padding: "10px 70px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "50px",
              }}
              size="medium"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
