import * as React from "react";
import "./App.css";
// eslint-disable-next-line
import { Heading2, Heading2Props } from "./Components/Headings/Heading2";
// eslint-disable-next-line
import { Paragraph, ParagraphProps } from "./Components/Paragraph";
// eslint-disable-next-line
import { LoginScreen, uiConfig, firebaseApp } from "./Components/LoginScreen";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const App = () => {
  /** Local signed-in state. */
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  React.useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="window-container">
          <div className="window-controls-and-title">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="window-controls">
              <div className="minimizeButton" />
              <div className="maximizeButton" />
              <div className="closeButton" />
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Paragraph className="window-title">Youssef Land Chat</Paragraph>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
          <div className="container">
            <Heading2>Youssef Land Chat</Heading2>
            {!isSignedIn ? <LoginScreen /> : null}
          </div>
        </div>
      </header>
    </div>
  );
};
