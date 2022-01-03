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
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {}

const useStyles = makeStyles(styles);

const UserInfoCards = (props: Props) => {
  const { userData } = useStateSelector((state) => state.authUser);
  const classes = useStyles();

  const cardStyle = {
    backgroundColor: "#F0F0F0",
  };

  return (
    <div className={classes.container}>
      <Grid style={{ gap: 20 }} container>
        <Grid item xl={3.8}>
          <Card style={cardStyle}>
            <CardContent className={classes.cardItemContainer}>
              <div>
                <Avatar
                  sx={{ height: "100px", width: "100px" }}
                  src={userData.userImage}
                ></Avatar>
              </div>
              <div className={classes.secondItem}>
                <Typography>Insurence</Typography>
                <Typography variant="h3">{userData.userName}</Typography>
                <Typography>Covid 19 | Final stage</Typography>

                <div style={{ marginTop: 5 }}></div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3.8}>
          <Card style={cardStyle}>
            <CardContent>
              <CircularProgress
                style={{
                  color: "#5BC8CE",
                  height: "50px",
                }}
                variant="determinate"
                value={100}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3.8}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography>this info one</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfoCards;
