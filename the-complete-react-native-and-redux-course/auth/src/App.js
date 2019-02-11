import React, { Component } from "react";
import { View } from "react-native";
import firebase from "@firebase/app";

import {
  Header,
  CardSection,
  Button,
  Spinner,
  Card
} from "./Components/Common";
import LoginForm from "./Components/LoginForm";

import "./ReactotronConfig";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCR2unZ5tsgZbJxBsxihSe4A7q1PoLS_Xc",
      authDomain: "auth-83c48.firebaseapp.com",
      databaseURL: "https://auth-83c48.firebaseio.com",
      projectId: "auth-83c48",
      storageBucket: "auth-83c48.appspot.com",
      messagingSenderId: "511222554021"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => {
                firebase.auth().signOut();
              }}
            >
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
