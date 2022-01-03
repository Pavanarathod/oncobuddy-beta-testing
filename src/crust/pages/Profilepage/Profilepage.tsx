import { AppHeader, ProfileHeader, UserInfoCards } from "crust/components";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styles from "./styles";
import Container from "@mui/material/Container";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface Props {}

const useStyles = makeStyles(styles);

const Profilepage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <ProfileHeader />
        <UserInfoCards />
      </Container>
    </>
  );
};

export default Profilepage;
