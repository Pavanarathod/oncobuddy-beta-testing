import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateDispatch, useStateSelector } from "hooks/reduxHooks";
import { modalActions } from "core/features/global/onBoardingModal";
import { removeUserSessionStore } from "core/actions/authActions/authActions";
import { firebaseUserAuth } from "cloudAuth/firebase";

interface Props {}

const useStyles = makeStyles((theme: any) => ({
  appBarContainer: {
    backgroundColor: theme.palette.background,
    padding: "17px 0",
  },
  appBarBodyContainer: {},
  toolBarContainer: {
    marginRight: "50px",
    marginLeft: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkss: {
    textDecoration: "none",
    color: "#707070",
  },
  linksContainer: {
    flex: "1",
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appBarButtonOne: {
    border: "1px solid #0B8389",
    borderRadius: "40px",
  },
  appBarButtonTwo: {
    backgroundColor: "#0B8389",
    borderRadius: "40px",
    color: "#FFFFFF",
    marginLeft: "10px",
  },
  appBarIconcontainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 20px",
    outline: "none",
  },
}));

const linksItem = [
  "About",
  "Oncologist",
  "Diagnosis",
  "Home Services",
  "Financial Guidence",
  "Wellness Package",
];

const AppHeader = (props: Props) => {
  const { userData } = useStateSelector((state) => state.authUser);
  const dispatch = useStateDispatch();
  const classes = useStyles();

  const openModal = () => {
    dispatch(modalActions.enebleModal());
  };

  const logout = () => {
    firebaseUserAuth.signOut();
    dispatch(removeUserSessionStore());
  };
  return (
    <AppBar position="fixed" className={classes.appBarContainer}>
      <Container maxWidth={false} className={classes.appBarBodyContainer}>
        <Toolbar className={classes.toolBarContainer} disableGutters>
          <div>
            <Typography variant="h1">
              ONCO<span>BUDDY</span>
            </Typography>
          </div>
          <div className={classes.linksContainer}>
            {linksItem.map((links, index) => (
              <Link key={index} className={classes.linkss} to={`/${links}`}>
                {links}
              </Link>
            ))}
          </div>
          <div>
            <div className={classes.appBarIconcontainer}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SearchRoundedIcon />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <Typography variant="h6">Probiders</Typography>
                <ExpandMoreIcon />
              </div>
            </div>
          </div>
          <div>
            {userData ? (
              <span>{userData.userName}</span>
            ) : (
              <Button
                variant="contained"
                size="large"
                className={classes.appBarButtonOne}
                onClick={openModal}
              >
                Sign in
              </Button>
            )}
            <Button
              variant="contained"
              size="large"
              className={classes.appBarButtonTwo}
              onClick={logout}
            >
              Sign out
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
