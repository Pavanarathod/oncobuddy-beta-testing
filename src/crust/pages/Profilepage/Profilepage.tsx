import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import {
  AppHeader,
  ProfileHeader,
  UserInfoCards,
  UserTabs,
} from "crust/components";
import React from "react";
import styles from "./styles";

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
        <UserTabs />
      </Container>
    </>
  );
};

export default Profilepage;
