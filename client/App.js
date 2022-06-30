import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator, createAppContainer } from 'react-navigation';

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import "react-native-gesture-handler";
//Common

// Doctor

// Patients

import { AuthContext, AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";
import AppStack from "./navigations/AppStack";

export default function App() {
  return (
    // <AuthProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </PaperProvider>
    // </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
