import React from "react";
import { makeStyles } from "@mui/styles";
import styles from "./styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardMedia, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useStateSelector } from "hooks/reduxHooks";
import Divider from "@mui/material/Divider";

interface Props {}

const useStyles = makeStyles(styles);

const UserInfoCards = (props: Props) => {
  const { userData } = useStateSelector((state) => state.authUser);
  const classes = useStyles();
  return (
    <Stack className={classes.cardContainer} direction="row" spacing={5}>
      <Card
        style={{
          backgroundColor: "#F0F0F0",
        }}
        sx={{ minWidth: 405 }}
      >
        <CardContent>
          <Box className={classes.boxOne}>
            <div>
              {userData.userImage ? (
                <Avatar
                  sx={{ height: "120px", width: "120px" }}
                  src={userData.userImage}
                />
              ) : (
                <Avatar>{userData.userName[0]}</Avatar>
              )}
            </div>
            <div
              style={{
                marginLeft: "30px",
              }}
            >
              <Typography variant="h5">Insurence</Typography>
              <Typography variant="h3">{userData.userName}</Typography>
              <Typography variant="h5">Fever </Typography>
              <Stack direction="row" spacing={1}>
                <Typography>Age 20</Typography>
                <Typography>Weight 62kg </Typography>
                <Typography>Blood </Typography>
              </Stack>
            </div>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 405 }}>
        <CardContent>
          <h1>somehtingelse.</h1>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 405 }}>
        <CardContent>
          <h1>somehtingelse.</h1>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default UserInfoCards;

{
  /* <div style={{}} className={classes.cardContainer}>
<div className={classes.cardItem}>
  <h1>Profile image</h1>
</div>
<div className={classes.cardItem}>
  <h1>Chart</h1>
</div>
<div className={classes.cardItem}>
  <h1>Annual Progress.</h1>
</div>
</div> */
}
