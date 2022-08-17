import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, LogBox, Image } from "react-native";
import { ActivityIndicator, Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import AppLoading from 'expo-app-loading';

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";
import AppointmentContext from "./Context/AppointmentContext";
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as Icon from '@expo/vector-icons';


export default function App() {
  LogBox.ignoreAllLogs();
  const [appIsReady, setAppIsReady] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    qna: [],
    symptoms: [],
  });



  _loadResourcesAsync = async () => {
    await Font.loadAsync({
      ...Icon.Ionicons.font,
      "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
      ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
      anticon: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf"),
      "material-community": require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
    });
  };


  useEffect(() => {
    _loadResourcesAsync();
  }, [])

  
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
