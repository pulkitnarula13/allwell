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
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

export default function App() {
  LogBox.ignoreAllLogs();
  const [appIsReady, setAppIsReady] = useState(false)

  const [appointmentData, setAppointmentData] = useState({
    qna: [],
    symptoms: [],
  });

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_100Thin,
          Poppins_100Thin_Italic,
          Poppins_200ExtraLight,
          Poppins_200ExtraLight_Italic,
          Poppins_300Light,
          Poppins_300Light_Italic,
          Poppins_400Regular,
          Poppins_400Regular_Italic,
          Poppins_500Medium,
          Poppins_500Medium_Italic,
          Poppins_600SemiBold,
          Poppins_600SemiBold_Italic,
          Poppins_700Bold,
          Poppins_700Bold_Italic,
          Poppins_800ExtraBold,
          Poppins_800ExtraBold_Italic,
          Poppins_900Black,
          Poppins_900Black_Italic,
        });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, [])

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
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
          <View  onLayout={onLayout} style={{flex :1}}>
          <NavigationContainer theme={theme}>
            <AppNav />
          </NavigationContainer>
          </View>

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
