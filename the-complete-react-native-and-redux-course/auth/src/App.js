import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "@firebase/app";

import { Header } from "./Components/Common";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCR2unZ5tsgZbJxBsxihSe4A7q1PoLS_Xc",
      authDomain: "auth-83c48.firebaseapp.com",
      databaseURL: "https://auth-83c48.firebaseio.com",
      projectId: "auth-83c48",
      storageBucket: "auth-83c48.appspot.com",
      messagingSenderId: "511222554021"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
