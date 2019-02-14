import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "@firebase/app";

import Reducers from "./Reducers";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCQwKYWtUQ08cyJJSmf5phmX7jvG2C0dvU",
      authDomain: "manager-75c56.firebaseapp.com",
      databaseURL: "https://manager-75c56.firebaseio.com",
      projectId: "manager-75c56",
      storageBucket: "",
      messagingSenderId: "632460181123"
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
