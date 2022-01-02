import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  facebookAuthProvider,
  firebaseUserAuth,
  googleAuthProvider,
  twitterAuthProvider,
} from "cloudAuth/firebase";
import { addUserSessionStore } from "core/actions/authActions/authActions";
import { modalActions } from "core/features/global/onBoardingModal";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import { useStateDispatch } from "hooks/reduxHooks";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const SocialMedia = (props: Props) => {
  const dispatch = useStateDispatch();
  const navigate = useNavigate();

  const signInWithgoogle = async () => {
    try {
      await signInWithPopup(firebaseUserAuth, googleAuthProvider).then(
        (result) => {
          const userCredentials =
            GoogleAuthProvider.credentialFromResult(result);
          const token = userCredentials?.accessToken;
          dispatch(
            addUserSessionStore({
              userName: result.user.displayName,
              userEmail: result.user.email,
              userId: result.user.uid,
              userImage: result.user.photoURL ? result.user.photoURL : null,
              userAccessToken: token,
            })
          );
        }
      );

      dispatch(modalActions.disableModal());

      navigate("/profile");
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(firebaseUserAuth, facebookAuthProvider).then(
        (result) => {
          FacebookAuthProvider.credentialFromResult(result);
          dispatch(addUserSessionStore(result.user));
        }
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  const signInWithTwitter = async () => {
    try {
      await signInWithPopup(firebaseUserAuth, twitterAuthProvider).then(
        (result) => {
          const credentials = TwitterAuthProvider.credentialFromResult(result);
          console.log(credentials?.accessToken);
          dispatch(addUserSessionStore(result.user));
        }
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Stack spacing={2}>
      <Button
        style={{
          backgroundColor: "red",
          color: "white",
        }}
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={signInWithgoogle}
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
        onClick={signInWithFacebook}
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
        onClick={signInWithTwitter}
      >
        Sign in with twitter
      </Button>
    </Stack>
  );
};

export default SocialMedia;
