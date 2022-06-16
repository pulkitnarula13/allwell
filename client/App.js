import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DoctorLogin from "./screens/DoctorLogin";
import DoctorSignup from "./screens/DoctorSignup";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="DoctorLogin"
      >
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="DoctorSignup" component={DoctorSignup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
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
