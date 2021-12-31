import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useStateDispatch, useStateSelector } from "hooks/reduxHooks";
import { modalActions } from "core/features/global/onBoardingModal";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import OnboardingTab from "./OnboardingTab";

interface Props {}

const useStyles = makeStyles((theme: any) => ({
  modalContainer: {
    widows: 600,
  },

  boxContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    backgroundColor: "#ffff",
    borderRadius: "7px",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
  },
}));

const SigninModal = (props: Props) => {
  const classes = useStyles();
  const dispatch = useStateDispatch();
  const modal = useStateSelector((state) => state.modal);

  const disableModal = () => {
    dispatch(modalActions.disableModal());
  };

  return (
    <Modal
      className={classes.modalContainer}
      open={modal.eneble}
      onClose={disableModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.boxContainer}>
        <div className={classes.modalHeader}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Login / Sign Up to continue
          </Typography>
          <CancelOutlinedIcon />
        </div>
        <OnboardingTab />
      </Box>
    </Modal>
  );
};

export default SigninModal;
