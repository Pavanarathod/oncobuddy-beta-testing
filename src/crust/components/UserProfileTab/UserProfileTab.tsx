import React from "react";
import { UserProfileForms } from "..";
import { makeStyles } from "@mui/styles";
import styles from "./styles";

interface Props {}

const useStyles = makeStyles(styles);
const UserProfileTab = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <UserProfileForms />
    </div>
  );
};

export default UserProfileTab;
