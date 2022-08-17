import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, LogBox, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import AppLoading from 'expo-app-loading';

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";
import AppointmentContext from "./Context/AppointmentContext";
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'


export default function App() {
  LogBox.ignoreAllLogs();
  const [appIsReady, setAppIsReady] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    qna: [],
    symptoms: [],
  });



 

  let [fontsLoaded] = Font.useFonts({
    // 'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Italic.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
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
    // fontFamily: "Poppins_400Regular",
  },
});
