import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, LogBox, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";
import AppointmentContext from "./Context/AppointmentContext";
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App() {
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const [appointmentData, setAppointmentData] = useState({
    qna: [],
    symptoms: [],
  });

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
