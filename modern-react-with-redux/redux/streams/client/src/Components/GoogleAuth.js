import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../Actions";
import Spinner from "./Spinner";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "934706277826-se56m6m2je1465r67b9e33tilvctggic.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn == null) {
      return <Spinner />;
    } else if (this.state.isSignedIn) {
      return this.googleButton("Sign Out", this.onSignOutClick);
    } else {
      return this.googleButton("Sign In with Google", this.onSignInClick);
    }
  };

  googleButton = (message, func) => {
    return (
      <button onClick={func} className="ui red google button">
        <i className="google icon" />
        {message}
      </button>
    );
  };

  render() {
    return this.renderAuthButton();
  }
}

export default connect(
  null,
  {
    signIn,
    signOut
  }
)(GoogleAuth);
