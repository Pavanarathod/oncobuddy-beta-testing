import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface Props {}

const ProfileHeader = (props: Props) => {
  const params = useParams();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p>Home</p>
        <ChevronRightOutlinedIcon />
        <p>My journey</p>
        <ChevronRightOutlinedIcon />
        <p>{params.tabId}</p>
      </div>
      <div>
        <Typography variant="h1">My journey</Typography>
      </div>
    </div>
  );
};

export default ProfileHeader;
