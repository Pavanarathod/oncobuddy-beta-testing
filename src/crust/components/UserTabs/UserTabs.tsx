import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
import TrackMedWhite from "assets/images/TabImage/TwoWhite.svg";
import TrackMedsWhite from "assets/images/TabImage/TwoWhite.svg";
import MyPurchasesWhite from "assets/images/TabImage/FourWhite.svg";
import MyDiognosis from "assets/images/TabImage/FiveWhite.svg";
import MyProfileWhite from "assets/images/TabImage/SixWhite.svg";
import Grid from "@mui/material/Grid";
import { UserProfileTab } from "crust/components";

const useStyles = makeStyles(styles);

interface TabsProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabComponent = (props: TabsProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
};

export default function UserTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = useState(5);
  const tabData = [
    {
      id: 0,
      name: "My Medical File",
      link: "mymedicalprofile",
      Icon: MyMedical,
      WhiteIcon: "",
    },
    {
      id: 1,
      name: "Track Medicine Intake",
      link: "trackmedicine",
      Icon: TrackMed,
      WhiteIcon: TrackMedWhite,
    },
    {
      id: 2,
      name: "My Appointment",
      link: "myappointment",
      Icon: TrackMeds,
      WhiteIcon: TrackMedsWhite,
    },
    {
      id: 3,
      name: "Purchased Services",
      link: "services",
      Icon: MyPurchases,
      WhiteIcon: MyPurchasesWhite,
    },
    {
      id: 4,
      name: "My Diagnosis",
      link: "diagnosis",
      Icon: MyDignosis,
      WhiteIcon: MyDiognosis,
    },
    {
      id: 5,
      name: "My Profile",
      link: "myprofile",
      Icon: MyProfile,
      WhiteIcon: MyProfileWhite,
    },
  ];

  const handleChange = (newValue: number, linkId: string) => {
    setValue(newValue);
    navigate(`/profile/${linkId}`);
  };

  return (
    <div className={classes.tabContainer}>
      <Grid container>
        <Grid item md={2.5}>
          <List>
            <Divider />
            {tabData.map(({ id, name, link, Icon, WhiteIcon }) => (
              <ListItem
                button
                className={classes.listItemContainer}
                style={{
                  backgroundColor:
                    location.pathname === `/profile/${link}` ? "#007E84" : "",
                  padding: "13px 10px",
                }}
                key={id}
                divider
                onClick={() => handleChange(id, link)}
              >
                <div
                  style={{ width: "100%" }}
                  className={classes.tabIconContainer}
                >
                  <div className={classes.textIconContainer}>
                    <ListItemIcon>
                      {location.pathname === `/profile/${link}` ? (
                        <img src={WhiteIcon} alt="" />
                      ) : (
                        <img src={Icon} alt="" />
                      )}
                    </ListItemIcon>
                    <Typography
                      variant="h6"
                      style={{
                        color:
                          location.pathname === `/profile/${link}`
                            ? "#FFFF"
                            : "#000",
                      }}
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
        </Grid>
        <Grid item md={9.5}>
          <TabComponent value={value} index={0}></TabComponent>
          <TabComponent value={value} index={1}>
            <h1>Track Medicine</h1>
          </TabComponent>
          <TabComponent value={value} index={2}>
            <h1>My Appointment</h1>
          </TabComponent>
          <TabComponent value={value} index={3}>
            <h1>Purchased Services</h1>
          </TabComponent>
          <TabComponent value={value} index={4}>
            <h1>My Diagnosis Report</h1>
          </TabComponent>
          <TabComponent value={value} index={5}>
            <UserProfileTab />
          </TabComponent>
        </Grid>
      </Grid>
    </div>
  );
}
