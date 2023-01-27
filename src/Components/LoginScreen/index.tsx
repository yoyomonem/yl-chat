import * as React from "react";
import { firebaseConfig } from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// eslint-disable-next-line
import { Heading3, Heading3Props } from "../Headings/Heading3";

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  /** The authorization provider(s). */
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const LoginScreen = () => {
  return (
    <>
      <Heading3>Sign in</Heading3>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth(firebaseApp)}
      />
    </>
  );
};
