import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import "react-native-gesture-handler";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";
import AppStack from "./navigations/AppStack";



export default function App(props) {

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppNav {...props} />
        </NavigationContainer>
      </PaperProvider>
    </AuthProvider>
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
