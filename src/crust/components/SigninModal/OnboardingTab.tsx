import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import SocialMedia from "./SocialMedia";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme: any) => ({
  tabContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  tabItem: {
    widows: "50%",
    backgroundColor: "blue",
  },
  socialButtonContainer: {
    margin: "20px 50px",
  },
  dividerLine: {
    color: "#000",
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OnboardingTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{
              width: "50%",
              backgroundColor: `${value === 0 ? "#0B8389" : "white"}`,
              color: `${value === 0 ? "#ffff" : "#000"}`,
              fontWeight: 600,
            }}
            label="Login"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              width: "50%",
              backgroundColor: `${value === 1 ? "#0B8389" : "white"}`,
              color: `${value === 1 ? "#ffff" : "#000"}`,
              fontWeight: 600,
            }}
            label="Register"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <Box className={classes.socialButtonContainer}>
        <SocialMedia />
      </Box>
      <Typography variant="h5" align="center">
        or
      </Typography>

      <TabPanel value={value} index={0}>
        <LoginForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
};

export default OnboardingTab;
