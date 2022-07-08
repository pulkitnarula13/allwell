import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import { useFonts } from 'expo-font';


import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigations/AppNav";


export default function App() {

  // Using font Poppins
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

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
