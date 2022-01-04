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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import styles from "./styles";
import Box from "@mui/system/Box";
import Avatar from "@mui/material/Avatar";

interface Props {}

const useStyles = makeStyles(styles);

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
  console.log(userData);
  return (
    <AppBar className={classes.appBarcontainer} position="sticky">
      <Container maxWidth="xl" className={classes.mainContainer}>
        <Toolbar className={classes.toolBarContainer} disableGutters>
          <Box className={classes.boxOne}>
            <Typography variant="h1">OncoBuddy</Typography>
            <div className={classes.linksContainer}>
              {linksItem.map((link, index) => (
                <Link className={classes.linksItem} to={`/${link}`} key={index}>
                  {link}
                </Link>
              ))}
            </div>
            <div className={classes.iconsContainer}>
              <div>
                <SearchRoundedIcon />
              </div>
              <div className={classes.iconstProvider}>
                <Typography variant="h6">Providers</Typography>
                <ExpandMoreIcon />
              </div>
            </div>
          </Box>
          <Box className={classes.buttonContainer}>
            {userData ? (
              <div className={classes.profileContainer}>
                {userData?.userImage ? (
                  <Avatar src={userData?.userImage} />
                ) : (
                  <Avatar>{userData?.userName[0]}</Avatar>
                )}
                {/* <Typography className={classes.userName} variant="h6">
                  {userData.userName}
                </Typography> */}
              </div>
            ) : (
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #303746",
                  padding: "5px 25px",
                  borderRadius: "50px",
                  textTransform: "lowercase",
                  fontSize: "15px",
                }}
                variant="contained"
                onClick={openModal}
              >
                Signin
              </Button>
            )}
            <Button
              style={{
                backgroundColor: "#303746",
                color: "#ffff",
                padding: "5px 25px",
                borderRadius: "50px",
                textTransform: "lowercase",
                fontSize: "15px",
                marginLeft: "10px",
              }}
              variant="contained"
              onClick={logout}
            >
              Download App
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
