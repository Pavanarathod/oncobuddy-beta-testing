import Box from "@mui/material/Box";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MyMedical from "assets/images/TabImage/OneDark.svg";
import TrackMed from "assets/images/TabImage/TwoDark.svg";
import TrackMeds from "assets/images/TabImage/TwoDark.svg";
import MyPurchases from "assets/images/TabImage/FourDark.svg";
import MyDignosis from "assets/images/TabImage/FiveDark.svg";
import MyProfile from "assets/images/TabImage/SixDark.svg";
import { makeStyles } from "@mui/styles";
import styles from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles(styles);

export default function UserTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const tabData = [
    {
      id: 1,
      name: "My Medical File",
      link: "mymedicalprofile",
      Icon: MyMedical,
    },
    {
      id: 2,
      name: "Track Medicine Intake",
      link: "trackmedicine",
      Icon: TrackMed,
    },
    {
      id: 3,
      name: "My Appointment",
      link: "myappointment",
      Icon: TrackMeds,
    },
    {
      id: 4,
      name: "Purchased Services",
      link: "services",
      Icon: MyPurchases,
    },
    {
      id: 5,
      name: "My Diagnosis",
      link: "diagnosis",
      Icon: MyDignosis,
    },
    {
      id: 6,
      name: "My Profile",
      link: "myprofile",
      Icon: MyProfile,
    },
  ];

  return (
    <div className={classes.tabContainer}>
      <Box sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}>
        <List>
          {tabData.map(({ id, name, link, Icon }) => (
            <ListItem
              button
              className={classes.listItemContainer}
              style={{
                backgroundColor:
                  location.pathname === `/profile/${link}` ? "#007E84" : "",
                padding: "10px 10px",
              }}
              key={id}
              divider
              onClick={() => navigate(`/profile/${link}`)}
            >
              <div
                style={{ width: "100%" }}
                className={classes.tabIconContainer}
              >
                <div className={classes.textIconContainer}>
                  <ListItemIcon>
                    <img src={Icon} alt="" />
                  </ListItemIcon>
                  <Typography
                    variant="h6"
                    className={
                      location.pathname === `/profile/${link}`
                        ? classes.activeText
                        : "#0000"
                    }
                  >
                    {name}
                  </Typography>
                </div>

                {location.pathname === `/profile/${link}` && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <ListItemIcon>
                      <ChevronRightIcon fontSize="large" color="primary" />
                    </ListItemIcon>
                  </div>
                )}
              </div>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
