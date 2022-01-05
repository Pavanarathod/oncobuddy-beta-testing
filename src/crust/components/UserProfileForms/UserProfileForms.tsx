import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import styles from "./styles";
import Divider from "@mui/material/Divider";
import { MenuItem, TextField } from "@mui/material";

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
  const blood = ["A-", "A+", "B-", "C-", "D-"];
  const [bloodGroup, setBloodGroup] = useState("A+");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBloodGroup(event.target.value);
  };

  return (
    <div className={classes.formContainer}>
      <div>
        <form>
          <div>
            <Typography variant="h4">Personal Information</Typography>
          </div>
          <Grid container className={classes.formGridContainers}>
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
                <div>
                  <Button
                    style={{
                      border: "1px solid #0B8389",
                      color: "#0B8389",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                  >
                    Male
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      margin: "10px",
                      border: "1px solid #0B8389",
                      color: "#0B8389",
                      fontWeight: "bold",
                    }}
                  >
                    Female
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #0B8389",
                      color: "#0B8389",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                  >
                    Other
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
          <Divider />
          <div className={classes.marginDivs}>
            <Typography variant="h4">Medical Information</Typography>
            <Typography variant="h6">
              The information will help oncobuddy doctors in understanding you'r
              medical case better.
            </Typography>
          </div>
          <Grid container className={classes.formGridContainers}>
            <Grid item md={4}>
              <div>
                <FormControl
                  style={{
                    width: "70%",
                  }}
                  variant="standard"
                >
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Canser Type
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </div>
              <div style={{ marginTop: "15px" }}>
                <Typography variant="h5">Do you smoke?</Typography>
              </div>
              <div>
                <Button
                  style={{
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "10px",
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                >
                  No
                </Button>
                <Button
                  style={{
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Previosly
                </Button>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Typography>Canser stage.</Typography>
              </div>
              <div>
                <Button
                  style={{
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  0
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "10px",
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                >
                  2
                </Button>
                <Button
                  style={{
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  3
                </Button>
                <Button
                  style={{
                    border: "1px  #0B8389",
                    color: "#0B8389",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  4
                </Button>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div style={{ padding: "20px 0" }}>
                  <Typography>Any alergies?</Typography>
                </div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
              </div>
            </Grid>
            <Grid item md={4}>
              <div style={{ marginBottom: "10px" }}>
                <Typography>Blood group</Typography>
              </div>
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  value={bloodGroup}
                  onChange={handleChange}
                  helperText="Please select your blood group"
                  style={{
                    width: "100%",
                  }}
                >
                  {blood.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <div style={{ padding: "20px 0" }}>
                  <Typography>Family History?</Typography>
                </div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  style={{
                    width: "100%",
                  }}
                  rows={4}
                  defaultValue="Default Value"
                />
              </div>
            </Grid>
          </Grid>
          <Divider />
          <div className={classes.marginDivs}>
            <Typography variant="h4">Medical Insurence</Typography>
          </div>
          <Grid container className={classes.formGridContainers}>
            <Grid item md={4}>
              <div>
                <div style={{ marginTop: "15px" }}>
                  <Typography variant="h5">Have medical insurence?</Typography>
                </div>
                <div>
                  <Button
                    style={{
                      border: "1px  #0B8389",
                      color: "#0B8389",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                  >
                    Yes
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      margin: "10px",
                      border: "1px  #0B8389",
                      color: "#0B8389",
                      fontWeight: "bold",
                    }}
                  >
                    No
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <FormControl
                  style={{
                    width: "70%",
                  }}
                  variant="standard"
                >
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Policy number
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </div>
            </Grid>
            <Grid item md={4}>
              <div style={{ marginBottom: "10px" }}>
                <Typography>Types of medical insurence</Typography>
              </div>
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  value={bloodGroup}
                  onChange={handleChange}
                  helperText="Please select your blood group"
                  style={{
                    width: "80%",
                  }}
                >
                  {blood.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <FormControl
                  style={{
                    width: "100%",
                  }}
                  variant="standard"
                >
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Medical insurence company
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <div>
            <Button
              style={{
                backgroundColor: "#000",
                color: "#FFF",
                padding: "10px 30px",
                borderRadius: "50px",
              }}
              variant="contained"
            >
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForms;
