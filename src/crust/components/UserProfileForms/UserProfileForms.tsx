import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import styles from "./styles";

interface Props {}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #000",
    fontSize: 16,
    width: "100%",
    padding: "5px 10px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));

const useStyles = makeStyles(styles);
const UserProfileForms = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <div>
        <form>
          <Typography variant="h4">Personal Information</Typography>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Grid container>
              <Grid item md={4}>
                <div>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      First name
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Email Id
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Weight
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
              </Grid>
              <Grid item md={4}>
                <div>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Last Name
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Date of birth
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      City / town
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
              </Grid>
              <Grid item md={4}>
                <div>
                  <FormControl
                    style={{
                      width: "70%",
                    }}
                    variant="standard"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Mobile Number
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Typography>Gender</Typography>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button>Male</Button>
                    <Button style={{ margin: "10px" }}>Female</Button>
                    <Button>Other</Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForms;
