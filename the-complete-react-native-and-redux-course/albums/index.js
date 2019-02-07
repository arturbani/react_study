import React from "react";
import { AppRegistry, View } from "react-native";

import Header from "./src/Components/Header";
import AlbumList from "./src/Components/AlbumList";

const App = props => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albuns" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent("albums", () => App);
