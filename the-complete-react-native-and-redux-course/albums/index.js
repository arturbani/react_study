import React from "react";
import { AppRegistry } from "react-native";

import Header from "./src/Components/Header";

const App = props => {
  return <Header headerText="Albuns" />;
};

AppRegistry.registerComponent("albums", () => App);
