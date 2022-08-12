import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, LogBox, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";
import AppointmentContext from "./Context/AppointmentContext";
import { Asset } from "expo-asset";

export default function App() {
  LogBox.ignoreAllLogs();

  const [appointmentData, setAppointmentData] = useState({
    qna: [],
    symptoms: [],
  });

  const loadAssets = async () => {
    await Asset.loadAsync([
      require("./assets/icons/patientsignup.png"),
      require("./assets/icons/doctorsignup.png"),
      require("./assets/icons/Allergies.png"),
      require("./assets/icons/Diarrhea.png"),
      require("./assets/icons/Eyeproblem.png"),
    ]); 
  }

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <AuthProvider>
      <AppointmentContext.Provider
        value={{
          appointmentData,
          setAppointmentData,
        }}
      >
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <AppNav />
          </NavigationContainer>
        </PaperProvider>
      </AppointmentContext.Provider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins_400Regular",
  },
});
