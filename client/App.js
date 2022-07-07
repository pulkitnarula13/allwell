import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";


export default function App() {

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppNav />
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
