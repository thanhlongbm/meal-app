import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./navigation/MealNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/reducer";

const fetchFont = () => {
  return Font.loadAsync({
    "raleway-regular": require("./assets/font/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/font/Raleway-Bold.ttf")
  });
};

const store = createStore(rootReducer);

export default function App() {
  const [fontLoaded, setLoadFont] = useState(false);

  if (!fontLoaded)
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setLoadFont(true)} />
    );

  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
