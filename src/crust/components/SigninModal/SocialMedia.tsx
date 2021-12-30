import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";

interface Props {}

const SocialMedia = (props: Props) => {
  return (
    <Stack spacing={2}>
      <Button
        style={{
          backgroundColor: "red",
          color: "white",
        }}
        variant="contained"
        startIcon={<GoogleIcon />}
      >
        Sign in with google
      </Button>
      <Button
        style={{
          backgroundColor: "darkblue",
          color: "white",
        }}
        variant="contained"
        startIcon={<FacebookIcon />}
      >
        Sign in with facebook
      </Button>
      <Button
        style={{
          backgroundColor: "skyblue",
          color: "#000",
        }}
        variant="contained"
        startIcon={<TwitterIcon />}
      >
        Sign in with twitter
      </Button>
    </Stack>
  );
};

export default SocialMedia;
